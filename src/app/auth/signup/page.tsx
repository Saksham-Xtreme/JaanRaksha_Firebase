'use client';

import { GoogleSignIn } from '@/components/auth/GoogleSignIn';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function SignupPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/'); // Redirect to home or dashboard after signup
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <GoogleSignIn />
      </div>
    </div>
  );
}
