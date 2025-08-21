import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Use absolute paths to the montevideo directory
const BASE_DIR = '/Users/coleman/Documents/git/colemanm.org/.conductor/montevideo';
const BLOG_DIR = path.join(BASE_DIR, '_posts');
const MICRO_DIR = path.join(BASE_DIR, '_micro');

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  frontMatter: any;
  type: 'blog' | 'micro';
  filePath: string;
}

async function getPosts(type: 'blog' | 'micro' = 'blog'): Promise<Post[]> {
  const dir = type === 'blog' ? BLOG_DIR : MICRO_DIR;
  
  console.log(`Looking for ${type} posts in: ${dir}`);
  
  try {
    // Check if directory exists
    await fs.access(dir);
    
    const files = await fs.readdir(dir, { recursive: true });
    console.log(`Found ${files.length} files in ${dir}`);
    
    const posts: Post[] = [];
    
    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.md')) {
        const filePath = path.join(dir, file);
        
        try {
          const content = await fs.readFile(filePath, 'utf8');
          const { data, content: markdown } = matter(content);
          
          // Extract just the filename for the slug (remove directory path)
          const fileName = path.basename(file);
          const slug = fileName.replace('.md', '');
          
          // Strip leading newlines from content for cleaner editor display
          const cleanContent = markdown.replace(/^\n+/, '');
          
          posts.push({
            slug,
            title: data.title || fileName,
            date: data.date || '',
            content: cleanContent,
            frontMatter: data,
            type,
            filePath
          });
        } catch (parseError) {
          console.error(`Error parsing file ${file}:`, parseError);
          // Still add the post with minimal info so it shows up in the list
          const fileName = path.basename(file);
          const slug = fileName.replace('.md', '');
          
          posts.push({
            slug,
            title: slug,
            date: '',
            content: `Error parsing front matter: ${parseError}`,
            frontMatter: {
              title: slug,
              error: 'Failed to parse front matter'
            },
            type,
            filePath
          });
        }
      }
    }
    
    console.log(`Returning ${posts.length} ${type} posts`);
    return posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      // Handle invalid dates - put them at the end
      if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
      if (isNaN(dateA.getTime())) return 1;
      if (isNaN(dateB.getTime())) return -1;
      
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error(`Error reading ${type} posts from ${dir}:`, error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') as 'blog' | 'micro' || 'blog';
  
  const posts = await getPosts(type);
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, slug, frontMatter, content } = body;
    
    let filePath: string;
    const fileName = `${slug}.md`;
    
    if (type === 'micro') {
      // Extract year from slug (YYYY-MM-DD-title format)
      const year = slug.substring(0, 4);
      const yearDir = path.join(MICRO_DIR, year);
      
      // Create year directory if it doesn't exist
      await fs.mkdir(yearDir, { recursive: true });
      
      filePath = path.join(yearDir, fileName);
    } else {
      filePath = path.join(BLOG_DIR, fileName);
    }
    
    // Add a newline at the beginning of content for proper formatting
    const contentWithNewline = content ? '\n' + content : '';
    const fileContent = matter.stringify(contentWithNewline, frontMatter);
    
    await fs.writeFile(filePath, fileContent);
    
    return NextResponse.json({ success: true, filePath });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}