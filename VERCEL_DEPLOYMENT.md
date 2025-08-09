# Deploying to Vercel

This document provides instructions on how to deploy the JaanRaksha application to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
2. Vercel CLI installed (optional, for command-line deployment)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (this is already set in vercel.json)
   - Output Directory: `.next` (this is already set in vercel.json)
6. Add any required environment variables
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI if you haven't already:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel from the CLI:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and run:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

## Configuration Files

The following configuration files have been set up for Vercel deployment:

- `vercel.json`: Contains Vercel-specific configuration
- `.vercelignore`: Specifies files to exclude from deployment

## Environment Variables

Make sure to set up the following environment variables in your Vercel project settings:

1. Copy the variables from `.env.example` to your Vercel project settings
2. Fill in the actual values for each environment variable

Required Firebase environment variables include:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

And any other API keys or secrets used in the application

## Post-Deployment

After deployment, verify that:

1. The application loads correctly
2. All routes work as expected
3. Firebase integration is functioning properly

## Troubleshooting

If you encounter issues during deployment:

1. Check the Vercel deployment logs
2. Verify that all environment variables are correctly set
3. Ensure that the build process completes successfully

## Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository. Any push to the main branch will trigger a new deployment.