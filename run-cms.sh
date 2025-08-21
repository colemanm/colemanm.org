#!/bin/bash

# Script to run the local CMS server from any directory
# This starts the Next.js development server for the blog CMS

echo "Starting blog CMS..."
echo "Navigating to cms directory..."

cd "$(dirname "$0")/cms" || {
    echo "Error: Could not find cms directory"
    exit 1
}

echo "Running npm run dev..."
npm run dev