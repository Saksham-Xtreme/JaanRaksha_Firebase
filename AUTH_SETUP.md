# Google Authentication Setup Guide

## Overview
This guide will help you set up Google authentication for the JaanRaksha platform using Firebase.

## Prerequisites
1. Firebase project with Google authentication enabled
2. Environment variables configured

## Setup Steps

### 1. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Google authentication:
   - Go to Authentication > Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your Firebase configuration:
```bash
cp .env.local.example .env.local
```

### 3. Firebase Configuration
The Firebase configuration has been updated with the provided real values:
- `apiKey`: "AIzaSyBYP0JkezuvB-MpStjnSYWiyqeXI3xMN9Q"
- `authDomain`: "jaanraksha-d7e09.firebaseapp.com"
- `projectId`: "jaanraksha-d7e09"
- `storageBucket`: "jaanraksha-d7e09.firebasestorage.app"
- `messagingSenderId`: "365282339236"
- `appId`: "1:365282339236:web:dc706575f48a627263b931"
- `measurementId`: "G-GN88GL653Q"

### 4. Authentication Flow
- **Login**: `/auth/login`
- **Signup**: `/auth/signup`

### 5. Provide-Shelter Page Flow
The provide-shelter page now includes:
1. **Fundraiser Form**: Users can donate before offering land
2. **Land Verification Form**: After fundraiser or skipping it
3. **Google Authentication**: Integrated throughout the flow

## Features Implemented

### ✅ Google Authentication
- Firebase Google sign-in with popup
- Authentication context provider
- Protected routes with user state
- Logout functionality

### ✅ Fundraiser Form
- Donation form with amount selection
- Anonymous donation option
- Progress tracking
- Success/error handling

### ✅ Provide-Shelter Page
- Fundraiser redirect before land form
- Skip option for direct land offering
- Integrated authentication flow

### ✅ Updated Components
- `AuthContext.tsx`: Authentication state management
- `GoogleSignIn.tsx`: Google sign-in button component
- `FundraiserForm.tsx`: Donation form component
- `ProvideShelter.tsx`: Updated with fundraiser flow

## File Structure
```
src/
├── lib/
│   └── firebase/
│       └── config.ts          # Firebase configuration
├── contexts/
│   └── AuthContext.tsx        # Authentication context
├── components/
│   ├── auth/
│   │   └── GoogleSignIn.tsx   # Google sign-in component
│   └── sections/
│       └── FundraiserForm.tsx # Fundraiser form
├── app/
│   ├── auth/
│   │   ├── login/page.tsx     # Login page
│   │   └── signup/page.tsx    # Signup page
│   └── provide-shelter/
│       └── page.tsx           # Updated provide-shelter page
└── layout.tsx                 # Updated with AuthProvider
```

## Usage
1. **Authentication**: Use `useAuth()` hook to access user state
2. **Google Sign-in**: Use `<GoogleSignIn />` component
3. **Fundraiser**: Navigate to `/provide-shelter` to see the new flow

## Next Steps
1. Test the authentication flow
2. Customize the UI as needed
3. Add additional authentication providers if required
4. Set up Firebase security rules for production
