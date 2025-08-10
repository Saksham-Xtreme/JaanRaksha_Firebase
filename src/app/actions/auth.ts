"use server";

import { z } from "zod";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  displayName: z.string().min(2),
});

export async function signInUser(values: z.infer<typeof signInSchema>) {
  const parsed = signInSchema.safeParse(values);
  
  if (!parsed.success) {
    return { success: false, message: "Invalid email or password format." };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, parsed.data.email, parsed.data.password);
    const user = userCredential.user;

    // Get user document
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: userData?.displayName || '',
        photoURL: userData?.photoURL || '',
        totalPoints: userData?.totalPoints || 0,
        level: userData?.level || 1,
      }
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to sign in." };
  }
}

export async function signUpUser(values: z.infer<typeof signUpSchema>) {
  const parsed = signUpSchema.safeParse(values);
  
  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, parsed.data.email, parsed.data.password);
    const user = userCredential.user;

    // Create user document
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: parsed.data.displayName,
      photoURL: user.photoURL || '',
      totalPoints: 0,
      level: 1,
      achievements: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: parsed.data.displayName,
        photoURL: user.photoURL || '',
        totalPoints: 0,
        level: 1,
      }
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to sign up." };
  }
}

export async function getCurrentUser() {
  const user = auth.currentUser;
  if (!user) return null;

  const userDoc = await getDoc(doc(db, 'users', user.uid));
  const userData = userDoc.data();

  return {
    uid: user.uid,
    email: user.email,
    displayName: userData?.displayName || '',
    photoURL: userData?.photoURL || '',
    totalPoints: userData?.totalPoints || 0,
    level: userData?.level || 1,
  };
}
