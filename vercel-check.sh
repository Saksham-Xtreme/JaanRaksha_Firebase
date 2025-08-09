#!/bin/bash

# Script to check if the application is ready for Vercel deployment

echo "Checking if the application is ready for Vercel deployment..."

# Check if required files exist
required_files=(
  "vercel.json"
  ".vercelignore"
  "next.config.ts"
  "package.json"
  "tsconfig.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Error: Required file $file not found."
    exit 1
  fi
done

echo "✅ All required files exist."

# Check if .env.example exists
if [ ! -f ".env.example" ]; then
  echo "Warning: .env.example file not found. This file is recommended for documenting required environment variables."
else
  echo "✅ .env.example file exists."
fi

# Check if package.json has the required scripts
if ! grep -q '"build"' package.json; then
  echo "Error: build script not found in package.json."
  exit 1
fi

if ! grep -q '"vercel-build"' package.json; then
  echo "Warning: vercel-build script not found in package.json. This script is recommended for Vercel deployment."
else
  echo "✅ vercel-build script exists in package.json."
fi

# Check if next.config.ts has the required configuration
if ! grep -q 'output:' next.config.ts; then
  echo "Warning: output configuration not found in next.config.ts. This configuration is recommended for Vercel deployment."
else
  echo "✅ output configuration exists in next.config.ts."
fi

# Run a build to check for errors
echo "Running build to check for errors..."
npm run build

if [ $? -ne 0 ]; then
  echo "Error: Build failed. Please fix the errors before deploying to Vercel."
  exit 1
fi

echo "✅ Build successful."

echo "\nThe application is ready for Vercel deployment! 🚀"
echo "To deploy to Vercel, run: ./deploy-to-vercel.sh"