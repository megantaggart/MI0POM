#!/bin/bash
# Development script: Build and run Hugo server

# Kill any existing Hugo processes
pkill -f "hugo server" 2>/dev/null

# Build the site
echo "Building site..."
hugo

# Start the development server
echo "Starting development server on http://localhost:1313"
hugo server --port 1313
