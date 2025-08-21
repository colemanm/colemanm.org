'use client';

import { useState } from 'react';
import { Upload, X, Loader, Check } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (fileName: string) => void;
  className?: string;
}

export default function ImageUploader({ onUpload, className = '' }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }
    
    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }
    
    setUploading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      if (res.ok) {
        const data = await res.json();
        setUploadedFile(data.fileName);
        onUpload(data.fileName);
        
        // Clear success state after 3 seconds
        setTimeout(() => {
          setUploadedFile(null);
        }, 3000);
      } else {
        setError('Failed to upload image');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('Error uploading image');
    } finally {
      setUploading(false);
      // Reset the input
      e.target.value = '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="sr-only"
        />
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          {uploading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              <span className="text-sm">Uploading...</span>
            </>
          ) : uploadedFile ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">Uploaded: {uploadedFile}</span>
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              <span className="text-sm">Upload Image</span>
            </>
          )}
        </div>
      </label>
      
      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
          <X className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
}