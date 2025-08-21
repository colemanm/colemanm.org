import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Use relative path to the main repository directory
const BASE_DIR = path.resolve(process.cwd(), '..');
const BLOG_DIR = path.join(BASE_DIR, '_posts');
const MICRO_DIR = path.join(BASE_DIR, '_micro');

async function findPost(slug: string) {
  const blogPath = path.join(BLOG_DIR, `${slug}.md`);
  const microPath = path.join(MICRO_DIR, `${slug}.md`);
  
  try {
    await fs.access(blogPath);
    return { path: blogPath, type: 'blog' };
  } catch {
    try {
      await fs.access(microPath);
      return { path: microPath, type: 'micro' };
    } catch {
      const blogSubdirs = await fs.readdir(BLOG_DIR, { withFileTypes: true });
      for (const dir of blogSubdirs) {
        if (dir.isDirectory()) {
          const subPath = path.join(BLOG_DIR, dir.name, `${slug}.md`);
          try {
            await fs.access(subPath);
            return { path: subPath, type: 'blog' };
          } catch {}
        }
      }
      
      const microYears = await fs.readdir(MICRO_DIR, { withFileTypes: true });
      for (const year of microYears) {
        if (year.isDirectory()) {
          const yearPath = path.join(MICRO_DIR, year.name, `${slug}.md`);
          try {
            await fs.access(yearPath);
            return { path: yearPath, type: 'micro' };
          } catch {}
        }
      }
      
      return null;
    }
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const postInfo = await findPost(slug);
  
  if (!postInfo) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  
  try {
    const content = await fs.readFile(postInfo.path, 'utf8');
    const { data, content: markdown } = matter(content);
    
    // Strip leading newlines from content for cleaner editor display
    const cleanContent = markdown.replace(/^\n+/, '');
    
    return NextResponse.json({
      slug,
      frontMatter: data,
      content: cleanContent,
      type: postInfo.type,
      filePath: postInfo.path
    });
  } catch (error) {
    console.error('Error reading post:', error);
    return NextResponse.json({ error: 'Failed to read post' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const postInfo = await findPost(slug);
  
  if (!postInfo) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  
  try {
    const body = await request.json();
    const { frontMatter, content } = body;
    
    // Add a newline at the beginning of content for proper formatting
    const contentWithNewline = content ? '\n' + content : '';
    const fileContent = matter.stringify(contentWithNewline, frontMatter);
    await fs.writeFile(postInfo.path, fileContent);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const postInfo = await findPost(slug);
  
  if (!postInfo) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  
  try {
    await fs.unlink(postInfo.path);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}