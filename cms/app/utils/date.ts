import { format } from 'date-fns';

export function formatDate(date: any): string {
  if (!date) return 'No date';
  
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      // If it's an invalid date, return the original string
      return String(date);
    }
    return format(dateObj, 'PPP');
  } catch {
    // Fallback to string representation if formatting fails
    return String(date);
  }
}

export function parseDate(date: any): Date | null {
  if (!date) return null;
  
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return null;
    }
    return dateObj;
  } catch {
    return null;
  }
}