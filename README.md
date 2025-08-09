# JaanRaksha Firebase

This is a NextJS application with Firebase integration.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file based on `.env.example` and fill in your Firebase configuration
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Firebase Deployment

This project is configured for Firebase hosting. To deploy to Firebase:

1. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize your project (if not already done):
   ```bash
   firebase init
   ```
4. Build the project:
   ```bash
   npm run build
   ```
5. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

### Vercel Deployment

This project is also configured for Vercel deployment. For detailed instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md).

Quick deployment with Vercel CLI:

1. Use the provided deployment script:
   ```bash
   ./deploy-to-vercel.sh
   ```

Or manually:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy to Vercel:
   ```bash
   vercel
   ```
