import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const BASE_DIR = '/Users/coleman/Documents/git/colemanm.org/.conductor/montevideo';
const MICRO_IMAGES_DIR = path.join(BASE_DIR, 'images', 'micro');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    
    // Ensure the directory exists
    await fs.mkdir(MICRO_IMAGES_DIR, { recursive: true });
    
    // Generate filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const extension = path.extname(file.name);
    const baseName = path.basename(file.name, extension)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const fileName = `${baseName}-${timestamp}${extension}`;
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Save file
    const filePath = path.join(MICRO_IMAGES_DIR, fileName);
    await fs.writeFile(filePath, buffer);
    
    return NextResponse.json({ 
      success: true, 
      fileName,
      path: `/images/micro/${fileName}`
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}