'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format, parse, isValid, parseISO } from 'date-fns';

interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function DateTimePicker({
  value,
  onChange,
  placeholder = "YYYY-MM-DD HH:MM:SS",
  className = ""
}: DateTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localDate, setLocalDate] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse the current value and set local date/time and display value
    if (value) {
      try {
        let parsedDate: Date | null = null;
        
        // Try different parsing methods
        // First try ISO format (2025-09-02T14:41:18.000Z)
        if (value.includes('T') || value.includes('Z')) {
          try {
            parsedDate = parseISO(value);
          } catch {
            // Ignore parsing error, try next method
          }
        }
        
        // Try standard format (YYYY-MM-DD HH:mm:ss)
        if (!parsedDate || !isValid(parsedDate)) {
          try {
            parsedDate = parse(value, 'yyyy-MM-dd HH:mm:ss', new Date());
          } catch {
            // Ignore parsing error, try next method
          }
        }
        
        if (parsedDate && isValid(parsedDate)) {
          setLocalDate(format(parsedDate, 'yyyy-MM-dd'));
          setLocalTime(format(parsedDate, 'HH:mm:ss'));
          setDisplayValue(format(parsedDate, 'MMMM d, yyyy \'at\' h:mm:ss a'));
        } else {
          // If parsing fails, try to extract date and time parts
          const parts = value.split(' ');
          if (parts.length >= 2) {
            setLocalDate(parts[0]);
            setLocalTime(parts[1]);
            setDisplayValue(value); // Fallback to original value
          } else {
            setDisplayValue(value);
          }
        }
      } catch (error) {
        console.error('Error parsing date:', error);
        setDisplayValue(value); // Fallback to original value
      }
    } else {
      setDisplayValue('');
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateDateTime = (newDate?: string, newTime?: string) => {
    const date = newDate || localDate;
    const time = newTime || localTime;
    
    if (date && time) {
      const combined = `${date} ${time}`;
      onChange(combined);
      
      // Update display value
      try {
        const parsedDate = parse(combined, 'yyyy-MM-dd HH:mm:ss', new Date());
        if (isValid(parsedDate)) {
          setDisplayValue(format(parsedDate, 'MMMM d, yyyy \'at\' h:mm:ss a'));
        }
      } catch (error) {
        console.error('Error formatting display date:', error);
      }
    }
  };

  const setToNow = () => {
    const now = new Date();
    const dateStr = format(now, 'yyyy-MM-dd');
    const timeStr = format(now, 'HH:mm:ss');
    setLocalDate(dateStr);
    setLocalTime(timeStr);
    updateDateTime(dateStr, timeStr);
  };

  const handleDateChange = (newDate: string) => {
    setLocalDate(newDate);
    updateDateTime(newDate, localTime);
  };

  const handleTimeChange = (newTime: string) => {
    setLocalTime(newTime);
    updateDateTime(localDate, newTime);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="relative">
        <input
          type="text"
          value={displayValue || value}
          onChange={(e) => {
            // When user types directly, update the raw value
            onChange(e.target.value);
            setDisplayValue(''); // Clear display value to show raw input
          }}
          onFocus={(e) => {
            // On focus, show the raw technical value for editing
            e.target.value = value;
            setDisplayValue('');
          }}
          onBlur={(e) => {
            // On blur, if the value is valid, show the human-readable format
            const rawValue = e.target.value;
            if (rawValue !== value) {
              onChange(rawValue);
            }
          }}
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 p-4 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[280px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Set Date & Time</h3>
              <button
                type="button"
                onClick={setToNow}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Clock className="w-3 h-3" />
                Now
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={localDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  step="1"
                  value={localTime}
                  onChange={(e) => handleTimeChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}