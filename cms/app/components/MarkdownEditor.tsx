'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Bold, Italic, Link, List, ListOrdered, Quote, Code, 
  Image, Heading1, Heading2, Minus, Eye, Edit3, Columns, Square
} from 'lucide-react';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: string;
}

export default function MarkdownEditor({ value, onChange, height = '600px' }: MarkdownEditorProps) {
  const [preview, setPreview] = useState('');
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'split'>('split');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const processMarkdown = async () => {
      try {
        const result = await remark()
          .use(remarkGfm)
          .use(html)
          .process(value);
        setPreview(result.toString());
      } catch (error) {
        console.error('Error processing markdown:', error);
      }
    };
    processMarkdown();
  }, [value]);

  const insertFormatting = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);

    const newText = beforeText + before + selectedText + after + afterText;
    onChange(newText);

    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertAtCursor = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const beforeText = value.substring(0, start);
    const afterText = value.substring(start);

    onChange(beforeText + text + afterText);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + text.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const toolbarButtons = [
    { icon: Bold, action: () => insertFormatting('**', '**'), title: 'Bold' },
    { icon: Italic, action: () => insertFormatting('*', '*'), title: 'Italic' },
    { icon: Link, action: () => insertFormatting('[', '](url)'), title: 'Link' },
    { divider: true },
    { icon: Heading1, action: () => insertAtCursor('# '), title: 'Heading 1' },
    { icon: Heading2, action: () => insertAtCursor('## '), title: 'Heading 2' },
    { divider: true },
    { icon: List, action: () => insertAtCursor('- '), title: 'Bullet List' },
    { icon: ListOrdered, action: () => insertAtCursor('1. '), title: 'Numbered List' },
    { icon: Square, action: () => insertAtCursor('- [ ] '), title: 'Checklist' },
    { divider: true },
    { icon: Quote, action: () => insertAtCursor('> '), title: 'Quote' },
    { icon: Code, action: () => insertFormatting('`', '`'), title: 'Inline Code' },
    { icon: Image, action: () => insertFormatting('![', '](url)'), title: 'Image' },
    { icon: Minus, action: () => insertAtCursor('---\n'), title: 'Horizontal Rule' },
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-gray-50 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {toolbarButtons.map((button, index) => {
            if (button.divider) {
              return <div key={index} className="w-px h-6 bg-gray-300 mx-1" />;
            }
            const Icon = button.icon!;
            return (
              <button
                key={index}
                onClick={button.action}
                title={button.title}
                className="p-2 hover:bg-gray-200 rounded transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-700" />
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode('edit')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'edit' ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
            title="Edit only"
          >
            <Edit3 className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'split' ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
            title="Split view"
          >
            <Columns className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'preview' ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
            title="Preview only"
          >
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="flex flex-1 overflow-hidden" style={{ height: `calc(${height} - 50px)` }}>
        {/* Editor */}
        {viewMode !== 'preview' && (
          <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} flex flex-col`}>
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
              <span className="text-xs font-medium text-gray-600 uppercase">Markdown</span>
            </div>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none"
              placeholder="Write your markdown here..."
              style={{ lineHeight: '1.6' }}
            />
          </div>
        )}

        {/* Divider */}
        {viewMode === 'split' && <div className="w-px bg-gray-200" />}

        {/* Preview */}
        {viewMode !== 'edit' && (
          <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} flex flex-col`}>
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
              <span className="text-xs font-medium text-gray-600 uppercase">Preview</span>
            </div>
            <div 
              className="flex-1 p-4 overflow-y-auto prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: preview }}
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}