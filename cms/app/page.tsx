'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, FileText, Mic, Search } from 'lucide-react';
import { formatDate } from './utils/date';
import { stripMarkdown } from './utils/markdown';

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  frontMatter: any;
  type: 'blog' | 'micro';
  filePath: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [microPosts, setMicroPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'blog' | 'micro'>('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const [blogRes, microRes] = await Promise.all([
        fetch('/api/posts?type=blog'),
        fetch('/api/posts?type=micro')
      ]);
      
      const blogData = await blogRes.json();
      const microData = await microRes.json();
      
      setPosts(blogData);
      setMicroPosts(microData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const res = await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const currentPosts = activeTab === 'blog' ? posts : microPosts;
  const filteredPosts = currentPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog CMS</h1>
          <p className="text-gray-600">Manage your blog posts and microblogs</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'blog'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileText className="inline-block w-4 h-4 mr-2" />
                  Blog Posts
                </button>
                <button
                  onClick={() => setActiveTab('micro')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'micro'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Mic className="inline-block w-4 h-4 mr-2" />
                  Microblogs
                </button>
              </div>
              
              <Link
                href={`/new?type=${activeTab}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                New {activeTab === 'blog' ? 'Post' : 'Microblog'}
              </Link>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : filteredPosts.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No {activeTab === 'blog' ? 'posts' : 'microblogs'} found
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div key={post.slug} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {post.frontMatter.title || post.slug}
                        {post.frontMatter.error && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                            YAML Error
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {formatDate(post.frontMatter.date)}
                      </p>
                      <p className="text-gray-700 line-clamp-2">
                        {post.frontMatter.description || stripMarkdown(post.content).substring(0, 150)}...
                      </p>
                      {post.frontMatter.tags && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {post.frontMatter.tags.map((tag: string) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Link
                        href={`/edit/${post.slug}`}
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
