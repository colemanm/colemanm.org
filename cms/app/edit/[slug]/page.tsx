'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Save, X, Loader, ChevronDown, ChevronUp } from 'lucide-react';
import ImageUploader from '../../components/ImageUploader';

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
    
    // Update images in frontMatter if it's a photo type
    const updatedFrontMatter = { ...frontMatter };
    if (frontMatter.type === 'photo') {
      const validImages = images.filter(img => img.trim() !== '');
      if (validImages.length > 0) {
        updatedFrontMatter.images = validImages;
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
                <input
                  type="text"
                  value={frontMatter.date || ''}
                  onChange={(e) => updateFrontMatter('date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  value={frontMatter.tags ? frontMatter.tags.join(', ') : ''}
                  onChange={(e) => updateFrontMatter('tags', e.target.value.split(',').map((t: string) => t.trim()))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tag1, tag2, tag3"
                />
              </div>
              
              {frontMatter.categories !== undefined && (
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
                  <input
                    type="text"
                    value={frontMatter.layout || ''}
                    onChange={(e) => updateFrontMatter('layout', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
              
              {frontMatter.target !== undefined && (
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
                          value={frontMatter.provider || ''}
                          onChange={(e) => updateFrontMatter('provider', e.target.value)}
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
                          value={frontMatter.id || ''}
                          onChange={(e) => updateFrontMatter('id', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Video ID from provider"
                        />
                      </div>
                      {frontMatter.url !== undefined && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Video URL
                          </label>
                          <input
                            type="text"
                            value={frontMatter.url || ''}
                            onChange={(e) => updateFrontMatter('url', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://..."
                          />
                        </div>
                      )}
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