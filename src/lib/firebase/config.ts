import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBYP0JkezuvB-MpStjnSYWiyqeXI3xMN9Q",
  authDomain: "jaanraksha-d7e09.firebaseapp.com",
  projectId: "jaanraksha-d7e09",
  storageBucket: "jaanraksha-d7e09.firebasestorage.app",
  messagingSenderId: "365282339236",
  appId: "1:365282339236:web:dc706575f48a627263b931",
  measurementId: "G-GN88GL653Q"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, auth, db, analytics };
