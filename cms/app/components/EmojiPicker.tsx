'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Smile } from 'lucide-react';

interface EmojiPickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const emojiCategories: Record<string, string[]> = {
  'Smileys & People': [
    '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩',
    '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨',
    '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢',
    '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👱‍♀️', '👱‍♂️', '🧔', '👵', '🧓', '👴', '👲', '👳‍♀️', '👳‍♂️'
  ],
  'Objects & Symbols': [
    '🔗', '🌐', '📱', '💻', '🖥️', '🖨️', '📚', '📖', '📝', '✏️', '🖊️', '🖋️', '✒️', '📄', '📃', '📑',
    '📊', '📈', '📉', '📋', '📌', '📍', '🔍', '🔎', '💡', '🔦', '🔑', '🗝️', '🔐', '🔒', '🔓', '❤️',
    '💙', '💚', '💛', '🧡', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💖', '💗', '💘', '💝', '💟',
    '⭐', '🌟', '✨', '⚡', '🔥', '💧', '🌈', '☀️', '🌙', '⭐', '🌠', '☁️', '⛅', '⛈️', '🌤️', '🌦️'
  ],
  'Activities & Hobbies': [
    '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍',
    '🏏', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸️', '🥌', '🎿', '⛷️',
    '🎮', '🕹️', '🎲', '♠️', '♥️', '♦️', '♣️', '♟️', '🃏', '🀄', '🎴', '🎭', '🖼️', '🎨', '🧵', '🧶'
  ],
  'Travel & Places': [
    '🏠', '🏡', '🏘️', '🏚️', '🏗️', '🏭', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩',
    '💒', '🏛️', '⛪', '🕌', '🕍', '🛕', '🗼', '🗽', '⛲', '⛱️', '🏖️', '🏝️', '🏜️', '🌋', '⛰️', '🏔️',
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵'
  ],
  'Food & Drink': [
    '🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
    '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐',
    '☕', '🍵', '🥤', '🧃', '🥛', '🍼', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊'
  ],
  'Nature': [
    '🌱', '🌿', '🍀', '🌾', '🌵', '🌲', '🌳', '🌴', '🌺', '🌻', '🌸', '🌼', '🌷', '🥀', '🌹', '🏵️',
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸',
    '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺'
  ]
};

export default function EmojiPicker({
  value,
  onChange,
  placeholder = "Select an emoji",
  className = ""
}: EmojiPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Smileys & People');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEmojiSelect = (emoji: string) => {
    onChange(emoji);
    setIsOpen(false);
    setSearchQuery('');
  };

  const filteredEmojis = searchQuery
    ? Object.values(emojiCategories)
        .flat()
        .filter(emoji => 
          // Simple search - could be enhanced with emoji names/descriptions
          emoji.includes(searchQuery) || 
          // This is basic - in a real app you'd want emoji names/keywords
          (searchQuery.toLowerCase().includes('smile') && ['😀', '😃', '😄', '😁', '😊'].includes(emoji)) ||
          (searchQuery.toLowerCase().includes('heart') && ['❤️', '💙', '💚', '💛', '🧡', '💜'].includes(emoji)) ||
          (searchQuery.toLowerCase().includes('star') && ['⭐', '🌟', '✨'].includes(emoji)) ||
          (searchQuery.toLowerCase().includes('link') && ['🔗', '🌐'].includes(emoji)) ||
          (searchQuery.toLowerCase().includes('fire') && ['🔥'].includes(emoji)) ||
          (searchQuery.toLowerCase().includes('rocket') && ['🚀'].includes(emoji))
        )
    : emojiCategories[selectedCategory] || [];

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {value ? (
            <>
              <span className="text-lg">{value}</span>
              <span className="text-sm text-gray-700">Emoji selected</span>
            </>
          ) : (
            <>
              <Smile className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">{placeholder}</span>
            </>
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search emojis..."
                className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {!searchQuery && (
              <div className="flex flex-wrap gap-1">
                {Object.keys(emojiCategories).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.split(' ')[0]}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="max-h-64 overflow-y-auto p-3">
            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-8 gap-1">
                {filteredEmojis.slice(0, 64).map((emoji: string, index: number) => (
                  <button
                    key={`${emoji}-${index}`}
                    type="button"
                    onClick={() => handleEmojiSelect(emoji)}
                    className={`w-8 h-8 flex items-center justify-center text-lg rounded hover:bg-gray-100 transition-colors ${
                      value === emoji ? 'bg-blue-50 ring-2 ring-blue-500' : ''
                    }`}
                    title={emoji}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-gray-500">
                {searchQuery ? `No emojis found for "${searchQuery}"` : 'No emojis in this category'}
              </div>
            )}
          </div>
          
          {value && (
            <div className="border-t border-gray-100 p-2">
              <button
                type="button"
                onClick={() => handleEmojiSelect('')}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}