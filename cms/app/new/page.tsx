'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import { Save, X, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import DateTimePicker from '../components/DateTimePicker';

const MarkdownEditor = dynamic(() => import('../components/MarkdownEditor'), { ssr: false });

export default function NewPostPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postType = searchParams.get('type') as 'blog' | 'micro' || 'blog';
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd HH:mm:ss"));
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [layout, setLayout] = useState(postType === 'blog' ? 'post' : 'micro');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [saving, setSaving] = useState(false);
  
  // Microblog-specific fields
  const [microType, setMicroType] = useState('text');
  const [videoProvider, setVideoProvider] = useState('');
  const [videoId, setVideoId] = useState('');
  const [images, setImages] = useState<string[]>(['']);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTitle, setLinkTitle] = useState('');
  const [quoteSource, setQuoteSource] = useState('');
  const [quoteWork, setQuoteWork] = useState('');
  const [quoteUrl, setQuoteUrl] = useState('');
  
  // Blog link post fields
  const [targetUrl, setTargetUrl] = useState('');
  
  // Collapsible front-matter panel state
  const [frontMatterCollapsed, setFrontMatterCollapsed] = useState(false);

  useEffect(() => {
    if (postType === 'micro') {
      // For microblogs, generate slug with date and random ID
      const randomId = Math.random().toString(36).substring(2, 8);
      const generatedSlug = `${format(new Date(), 'yyyy-MM-dd')}-${randomId}`;
      setSlug(generatedSlug);
    } else if (title) {
      // For blog posts, use title-based slug
      const generatedSlug = `${format(new Date(), 'yyyy-MM-dd')}-${title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')}`;
      setSlug(generatedSlug);
    }
  }, [title, postType]);

  const regenerateSlug = () => {
    if (postType === 'micro') {
      const randomId = Math.random().toString(36).substring(2, 8);
      const generatedSlug = `${format(new Date(), 'yyyy-MM-dd')}-${randomId}`;
      setSlug(generatedSlug);
    }
  };

  const handleSave = async () => {
    if (!slug) {
      alert('Please enter a filename slug');
      return;
    }
    
    setSaving(true);
    
    const frontMatter: any = {
      date,
      layout,
    };
    
    if (title) frontMatter.title = title;
    if (tags) frontMatter.tags = tags.split(',').map(t => t.trim());
    if (postType === 'blog') frontMatter.categories = 'blog';
    if (description) frontMatter.description = description;
    
    // Add target URL for blog link posts
    if (postType === 'blog' && layout === 'link' && targetUrl) {
      frontMatter.target = targetUrl;
    }
    
    if (postType === 'micro') {
      frontMatter.type = microType;
      
      // Add type-specific fields
      if (microType === 'video') {
        const videoObj: any = {};
        if (videoProvider) videoObj.provider = videoProvider;
        if (videoId) videoObj.id = videoId;
        if (Object.keys(videoObj).length > 0) {
          frontMatter.video = videoObj;
        }
      } else if (microType === 'photo') {
        const validImages = images.filter(img => img.trim() !== '');
        if (validImages.length > 0) {
          frontMatter.images = validImages;
        }
      } else if (microType === 'link') {
        if (linkUrl) frontMatter.url = linkUrl;
        if (linkTitle) frontMatter.title = linkTitle;
      } else if (microType === 'quote') {
        const quoteObj: any = {};
        if (quoteSource) quoteObj.source = quoteSource;
        if (quoteWork) quoteObj.work = quoteWork;
        if (quoteUrl) quoteObj.url = quoteUrl;
        if (Object.keys(quoteObj).length > 0) {
          frontMatter.quote = quoteObj;
        }
      }
    }
    
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: postType,
          slug,
          frontMatter,
          content
        })
      });
      
      if (res.ok) {
        router.push('/');
      } else {
        alert('Failed to save post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            New {postType === 'blog' ? 'Blog Post' : 'Microblog'}
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setFrontMatterCollapsed(!frontMatterCollapsed)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg font-semibold">Front Matter</h2>
              {frontMatterCollapsed ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {!frontMatterCollapsed && (
              <div className="px-6 pb-6 border-t border-gray-100">
              
              {postType === 'blog' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Post title"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <DateTimePicker
                  value={date}
                  onChange={setDate}
                  placeholder="YYYY-MM-DD HH:MM:SS"
                />
              </div>
              
              {postType === 'micro' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <select
                      value={microType}
                      onChange={(e) => setMicroType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="text">Text</option>
                      <option value="photo">Photo</option>
                      <option value="video">Video</option>
                      <option value="link">Link</option>
                      <option value="quote">Quote</option>
                    </select>
                  </div>
                  
                  {microType === 'video' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Video Provider
                        </label>
                        <input
                          type="text"
                          value={videoProvider}
                          onChange={(e) => setVideoProvider(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="youtube, vimeo, etc."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Video ID
                        </label>
                        <input
                          type="text"
                          value={videoId}
                          onChange={(e) => setVideoId(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Video ID from provider"
                        />
                      </div>
                    </>
                  )}
                  
                  {microType === 'photo' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Images
                      </label>
                      <div className="space-y-2">
                        {images.map((image, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={image}
                              onChange={(e) => {
                                const newImages = [...images];
                                newImages[index] = e.target.value;
                                setImages(newImages);
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="image-filename.jpg"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (images.length > 1) {
                                  setImages(images.filter((_, i) => i !== index));
                                }
                              }}
                              className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setImages([...images, ''])}
                            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                          >
                            + Add Image
                          </button>
                          <ImageUploader 
                            onUpload={(fileName) => {
                              // Add the uploaded filename to the last empty slot or create a new one
                              const emptyIndex = images.findIndex(img => img.trim() === '');
                              if (emptyIndex !== -1) {
                                const newImages = [...images];
                                newImages[emptyIndex] = fileName;
                                setImages(newImages);
                              } else {
                                setImages([...images, fileName]);
                              }
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Images will be saved to /images/micro/</p>
                    </div>
                  )}
                  
                  {microType === 'link' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Link URL
                        </label>
                        <input
                          type="text"
                          value={linkUrl}
                          onChange={(e) => setLinkUrl(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Link Title
                        </label>
                        <input
                          type="text"
                          value={linkTitle}
                          onChange={(e) => setLinkTitle(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Link title"
                        />
                      </div>
                    </>
                  )}
                  
                  {microType === 'quote' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quote Source
                        </label>
                        <input
                          type="text"
                          value={quoteSource}
                          onChange={(e) => setQuoteSource(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Author or source name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Work
                        </label>
                        <input
                          type="text"
                          value={quoteWork}
                          onChange={(e) => setQuoteWork(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Book, article, or work title"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reference URL
                        </label>
                        <input
                          type="text"
                          value={quoteUrl}
                          onChange={(e) => setQuoteUrl(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="https://..."
                        />
                      </div>
                    </>
                  )}
                </>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tag1, tag2, tag3"
                />
              </div>
              
              {postType === 'blog' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Brief description of the post"
                  />
                </div>
              )}
              
              {postType === 'blog' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Layout
                  </label>
                  <select
                    value={layout}
                    onChange={(e) => setLayout(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="post">post</option>
                    <option value="link">link</option>
                  </select>
                </div>
              )}
              
              {postType === 'blog' && layout === 'link' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target URL
                  </label>
                  <input
                    type="text"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://..."
                  />
                  <p className="text-xs text-gray-500 mt-1">External URL this link post points to</p>
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filename
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    placeholder={postType === 'micro' ? "YYYY-MM-DD-unique-id" : "YYYY-MM-DD-post-slug"}
                  />
                  {postType === 'micro' && (
                    <button
                      type="button"
                      onClick={regenerateSlug}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                      title="Generate new ID"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {postType === 'micro' 
                    ? 'Auto-generated filename with unique ID. Click refresh for a new ID.' 
                    : '.md will be added automatically'}
                </p>
              </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold">Content</h2>
            </div>
            <div className="h-[600px]">
              <MarkdownEditor
                value={content}
                onChange={setContent}
                height="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}