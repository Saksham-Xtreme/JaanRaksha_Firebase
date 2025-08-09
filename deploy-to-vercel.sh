#!/bin/bash

# Script to deploy the JaanRaksha application to Vercel

echo "Preparing for Vercel deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Warning: .env.local file not found."
    echo "Please create a .env.local file based on .env.example before deploying."
    
    if [ -f .env.example ]; then
        echo "Would you like to create .env.local from .env.example? (y/n)"
        read answer
        if [ "$answer" = "y" ]; then
            cp .env.example .env.local
            echo "Created .env.local. Please edit it with your actual values before deploying."
            exit 1
        fi
    else
        echo "No .env.example file found. Please create a .env.local file manually."
        exit 1
    fi
fi

# Run build to make sure everything compiles correctly
echo "Running build to check for errors..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Please fix the errors before deploying."
    exit 1
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel

echo "Deployment process initiated. Follow the prompts to complete deployment."