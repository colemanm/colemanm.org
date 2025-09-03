'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Save, X, Loader, ChevronDown, ChevronUp } from 'lucide-react';
import ImageUploader from '../../components/ImageUploader';
import DateTimePicker from '../../components/DateTimePicker';
import EmojiPicker from '../../components/EmojiPicker';

const MarkdownEditor = dynamic(() => import('../../components/MarkdownEditor'), { ssr: false });

interface PostData {
  slug: string;
  frontMatter: any;
  content: string;
  type: 'blog' | 'micro';
}

export default function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [post, setPost] = useState<PostData | null>(null);
  const [frontMatter, setFrontMatter] = useState<any>({});
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');
  
  // Microblog-specific state
  const [images, setImages] = useState<string[]>(['']);
  
  // Collapsible front-matter panel state
  const [frontMatterCollapsed, setFrontMatterCollapsed] = useState(false);
  
  // State for tags input to allow spaces while typing
  const [tagsInput, setTagsInput] = useState('');
  
  // State for link post icon
  const [linkIcon, setLinkIcon] = useState('');

  useEffect(() => {
    params.then(p => {
      setSlug(p.slug);
      fetchPost(p.slug);
    });
  }, [params]);

  const fetchPost = async (postSlug: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${postSlug}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data);
        setFrontMatter(data.frontMatter);
        setContent(data.content);
        
        // Initialize tags input
        if (data.frontMatter.tags) {
          setTagsInput(data.frontMatter.tags.join(', '));
        }
        
        // Initialize link icon for link posts
        if (data.frontMatter.links && data.frontMatter.links.length > 0) {
          setLinkIcon(data.frontMatter.links[0].icon || '');
        }
        
        // Initialize images state if it's a photo type microblog
        if (data.frontMatter.type === 'photo' && data.frontMatter.images) {
          setImages(data.frontMatter.images);
        }
      } else {
        alert('Post not found');
        router.push('/');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    
    // Process tags from input
    const processedTags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    
    // Update images in frontMatter if it's a photo type
    const updatedFrontMatter = { ...frontMatter };
    if (processedTags.length > 0) {
      updatedFrontMatter.tags = processedTags;
    }
    
    if (frontMatter.type === 'photo') {
      const validImages = images.filter(img => img.trim() !== '');
      if (validImages.length > 0) {
        updatedFrontMatter.images = validImages;
      }
    }
    
    // Ensure blog posts always have categories set to 'blog'
    if (post?.type === 'blog') {
      updatedFrontMatter.categories = 'blog';
      
      // Update links array for link posts
      if (updatedFrontMatter.layout === 'link' && updatedFrontMatter.target) {
        updatedFrontMatter.links = [{
          url: updatedFrontMatter.target,
          title: updatedFrontMatter.title || 'Link',
          icon: linkIcon || '🔗'
        }];
      }
    }
    
    // Migrate video fields to nested structure for video microblogs
    if (frontMatter.type === 'video') {
      // If we have old flat structure, migrate to nested (excluding URL)
      if (updatedFrontMatter.provider || updatedFrontMatter.id) {
        updatedFrontMatter.video = {
          ...(updatedFrontMatter.video || {}),
          ...(updatedFrontMatter.provider && { provider: updatedFrontMatter.provider }),
          ...(updatedFrontMatter.id && { id: updatedFrontMatter.id })
        };
        
        // Clean up old flat properties
        delete updatedFrontMatter.provider;
        delete updatedFrontMatter.id;
      }
      
      // Remove URL from video object if it exists (since it's redundant)
      if (updatedFrontMatter.video?.url) {
        delete updatedFrontMatter.video.url;
      }
      
      // Remove any flat URL property for video types
      if (updatedFrontMatter.url) {
        delete updatedFrontMatter.url;
      }
    }
    
    try {
      const res = await fetch(`/api/posts/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frontMatter: updatedFrontMatter,
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

  const updateFrontMatter = (key: string, value: any) => {
    setFrontMatter((prev: any) => ({
      ...prev,
      [key]: value
    }));
  };

  const updateVideoField = (field: string, value: string) => {
    setFrontMatter((prev: any) => {
      const updated = { ...prev };
      if (!updated.video) {
        updated.video = {};
      }
      updated.video[field] = value;
      
      // Remove old flat structure if it exists
      if (updated.provider !== undefined) delete updated.provider;
      if (updated.id !== undefined) delete updated.id;
      
      return updated;
    });
  };

  const updateQuoteField = (field: string, value: string) => {
    setFrontMatter((prev: any) => {
      const updated = { ...prev };
      if (!updated.quote) {
        updated.quote = {};
      }
      updated.quote[field] = value;
      
      return updated;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Edit {post.type === 'blog' ? 'Post' : 'Microblog'}
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
              {saving ? 'Saving...' : 'Save Changes'}
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
              
              {frontMatter.title !== undefined && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={frontMatter.title || ''}
                    onChange={(e) => updateFrontMatter('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <DateTimePicker
                  value={frontMatter.date || ''}
                  onChange={(value) => updateFrontMatter('date', value)}
                  placeholder="YYYY-MM-DD HH:MM:SS"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tag1, tag2, machine learning"
                />
              </div>
              
              {frontMatter.categories !== undefined && post.type !== 'blog' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categories
                  </label>
                  <input
                    type="text"
                    value={frontMatter.categories || ''}
                    onChange={(e) => updateFrontMatter('categories', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
              
              {frontMatter.description !== undefined && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={frontMatter.description || ''}
                    onChange={(e) => updateFrontMatter('description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                  />
                </div>
              )}
              
              {frontMatter.layout !== 'micro' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Layout
                  </label>
                  {post?.type === 'blog' ? (
                    <select
                      value={frontMatter.layout || 'post'}
                      onChange={(e) => updateFrontMatter('layout', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="post">post</option>
                      <option value="link">link</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={frontMatter.layout || ''}
                      onChange={(e) => updateFrontMatter('layout', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                </div>
              )}
              
              {frontMatter.target !== undefined && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Link Target URL
                    </label>
                    <input
                      type="text"
                      value={frontMatter.target || ''}
                      onChange={(e) => updateFrontMatter('target', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Link Emoji
                    </label>
                    <EmojiPicker
                      value={linkIcon}
                      onChange={setLinkIcon}
                      placeholder="Select an emoji for this link"
                    />
                    <p className="text-xs text-gray-500 mt-1">Emoji will be used in the links array</p>
                  </div>
                </>
              )}
              
              {frontMatter.type !== undefined && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type (for microblogs)
                    </label>
                    <select
                      value={frontMatter.type || 'text'}
                      onChange={(e) => updateFrontMatter('type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="text">Text</option>
                      <option value="photo">Photo</option>
                      <option value="video">Video</option>
                      <option value="link">Link</option>
                      <option value="quote">Quote</option>
                    </select>
                  </div>
                  
                  {frontMatter.type === 'video' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Video Provider
                        </label>
                        <input
                          type="text"
                          value={frontMatter.video?.provider || frontMatter.provider || ''}
                          onChange={(e) => updateVideoField('provider', e.target.value)}
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
                          value={frontMatter.video?.id || frontMatter.id || ''}
                          onChange={(e) => updateVideoField('id', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Video ID from provider"
                        />
                      </div>
                    </>
                  )}
                  
                  {frontMatter.type === 'photo' && (
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
                  
                  {frontMatter.type === 'link' && frontMatter.url !== undefined && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Link URL
                        </label>
                        <input
                          type="text"
                          value={frontMatter.url || ''}
                          onChange={(e) => updateFrontMatter('url', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="https://..."
                        />
                      </div>
                      {frontMatter.title !== undefined && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Link Title
                          </label>
                          <input
                            type="text"
                            value={frontMatter.title || ''}
                            onChange={(e) => updateFrontMatter('title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Link title"
                          />
                        </div>
                      )}
                    </>
                  )}
                  
                  {frontMatter.type === 'quote' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quote Source
                        </label>
                        <input
                          type="text"
                          value={frontMatter.quote?.source || ''}
                          onChange={(e) => updateQuoteField('source', e.target.value)}
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
                          value={frontMatter.quote?.work || ''}
                          onChange={(e) => updateQuoteField('work', e.target.value)}
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
                          value={frontMatter.quote?.url || ''}
                          onChange={(e) => updateQuoteField('url', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="https://..."
                        />
                      </div>
                    </>
                  )}
                </>
              )}
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