# Custom CMS Specification for colemanm.org

## Overview
A lightweight, custom CMS solution for managing blog posts, microblog posts, and book pages on a Jekyll-based static site. The system will maintain the current Git-based workflow while providing a user-friendly interface for content management.

## Core Requirements

### 1. Authentication & Authorization
- Simple authentication system
- Role-based access (admin, editor)
- Session management
- Secure password handling

### 2. Content Management

#### Blog Posts
- Create, edit, delete blog posts
- Markdown editor with live preview
- Front matter management
- Draft/publish workflow
- Scheduled publishing
- Tag management
- Category organization

#### Microblog Posts
- Quick post creation
- Simple text editor
- Optional media attachments
- Tag support
- Archive management

#### Book Pages
- Book metadata management
- Reading status tracking
- Review/notes section
- Rating system
- Cover image management

### 3. Media Management
- Image upload and optimization
- File organization
- CDN integration (optional)
- Image cropping/resizing
- Alt text management

### 4. Technical Architecture

#### Backend
- Ruby on Rails API
- PostgreSQL database
- Redis for caching
- Sidekiq for background jobs

#### Frontend
- React.js for admin interface
- Tailwind CSS for styling
- Markdown editor component
- Image upload component
- Tag input component

#### Integration Points
- Git integration for content versioning
- Jekyll build process hooks
- Existing Ruby scripts integration
- Webhook support for deployments

### 5. Data Models

```ruby
# User
- email
- password_digest
- role
- name
- created_at
- updated_at

# Post
- title
- slug
- content
- front_matter
- status (draft/published)
- published_at
- author_id
- post_type (blog/micro/book)
- tags
- categories

# Media
- filename
- path
- alt_text
- post_id
- file_type
- size
- dimensions

# Tag
- name
- slug
- description
- post_count
```

### 6. API Endpoints

#### Authentication
```
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

#### Posts
```
GET /api/posts
POST /api/posts
GET /api/posts/:id
PUT /api/posts/:id
DELETE /api/posts/:id
GET /api/posts/drafts
GET /api/posts/published
```

#### Media
```
POST /api/media
GET /api/media
DELETE /api/media/:id
```

#### Tags
```
GET /api/tags
POST /api/tags
DELETE /api/tags/:id
```

### 7. Development Phases

#### Phase 1: Core Infrastructure
- Basic authentication
- Post CRUD operations
- Simple markdown editor
- Basic file upload

#### Phase 2: Enhanced Features
- Advanced media management
- Tag system
- Draft/publish workflow
- Search functionality

#### Phase 3: Polish & Integration
- Git integration
- Build process hooks
- Performance optimization
- UI/UX improvements

### 8. Security Considerations
- CSRF protection
- XSS prevention
- Rate limiting
- Input sanitization
- Secure file uploads
- API authentication

### 9. Performance Requirements
- Page load < 2s
- API response < 200ms
- Image optimization
- Caching strategy
- Background job processing

### 10. Deployment Strategy
- Docker containerization
- CI/CD pipeline
- Environment configuration
- Backup strategy
- Monitoring setup

## Next Steps

1. Set up development environment
2. Create basic project structure
3. Implement authentication
4. Build core post management
5. Add media handling
6. Integrate with existing Jekyll setup

## Questions to Address

1. Should we maintain separate databases for different content types?
2. How should we handle content versioning?
3. What level of real-time preview is needed?
4. How should we handle content migrations?
5. What backup strategy should we implement?

## Future Considerations

1. Multi-user collaboration features
2. Advanced analytics
3. Content scheduling
4. API rate limiting
5. Content import/export tools
6. Advanced search capabilities 