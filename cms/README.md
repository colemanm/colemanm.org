# Blog CMS

A lightweight, local CMS interface for managing Jekyll blog posts and microblogs.

## Features

- **Dual Post Types**: Manage both regular blog posts (`_posts`) and microblogs (`_micro`)
- **Front Matter Editor**: Visual interface for editing YAML front matter
- **Markdown Editor**: Built-in Monaco editor with syntax highlighting
- **Search & Filter**: Quickly find posts by title or content
- **File Management**: Create, edit, and delete posts directly from the interface
- **Auto-slug Generation**: Automatically generates Jekyll-compatible filenames
- **Image Upload**: Direct browser upload for microblog images
- **Type-specific Fields**: Dynamic form fields based on microblog type (text, photo, video, link)

## Installation

1. Navigate to the CMS directory:
```bash
cd cms
```

2. Install dependencies (if not already installed):
```bash
npm install
```

## Running the CMS

Start the development server from the cms directory:
```bash
cd cms
npm run dev
```

The CMS will be available at http://localhost:3000 (or port 3002 if 3000 is in use)

## Usage

### Viewing Posts
- The main page displays all your blog posts and microblogs
- Use the tabs to switch between Blog Posts and Microblogs
- Use the search bar to filter posts

### Creating a New Post

1. Click the "New Post" or "New Microblog" button
2. Fill in the front matter fields:
   - **Title**: Post title (blog posts only)
   - **Date**: Publication date (auto-filled with current date)
   - **Tags**: Comma-separated list of tags
   - **Categories**: Post category (blog posts only)
   - **Description**: Brief description for SEO
   - **Layout**: Jekyll layout to use (post, link, or micro)
3. Write your content in the Markdown editor
4. Click "Save" to create the post

### Editing Posts

1. Click the edit icon next to any post
2. Modify the front matter or content
3. Click "Save Changes" to update

### Deleting Posts

1. Click the trash icon next to any post
2. Confirm the deletion

## Post Types

### Blog Posts (`_posts`)
- Full-length articles with titles
- Support for categories and descriptions
- Can use "post" or "link" layouts

### Microblogs (`_micro`)
- Short-form content
- Organized by year in subdirectories
- Typically use "micro" layout
- Support for photo type

## File Structure

The CMS reads and writes directly to your Jekyll directories:
- Blog posts: `_posts/` (in the parent directory)
- Microblogs: `_micro/YYYY/` (organized by year)

Files are saved with Jekyll-compatible naming:
- `YYYY-MM-DD-post-title.md`

## Front Matter Fields

### Common Fields
- `date`: Publication date/time
- `layout`: Jekyll layout template
- `tags`: Array of tags

### Blog Post Fields
- `title`: Post title
- `categories`: Post category
- `description`: SEO description
- `target`: External link URL (for link posts)

### Microblog Fields
- `type`: Content type (text, photo, video, link)

#### Photo Type
- `images`: Array of image filenames
- **Image Upload**: Click "Upload Image" to upload directly through the browser
- Images are automatically saved to `/images/micro/`

#### Video Type
- `provider`: Video platform (youtube, vimeo, etc.)
- `id`: Video ID from the provider
- `url`: Full video URL

#### Link Type
- `url`: External link URL
- `title`: Link title/description

## Development

The CMS is built with:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Monaco Editor for markdown editing
- gray-matter for front matter parsing

## Notes

- The CMS runs locally and directly modifies your Jekyll files
- Always commit your changes to Git after using the CMS
- The server must have read/write access to the Jekyll directories
- Port 3000 is used by default (configurable in package.json)
