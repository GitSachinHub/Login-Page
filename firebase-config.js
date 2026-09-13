// Firebase SDK v10 Modular Imports via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

/**
 * -------------------------------------------------------------
 * 🔑 YOUR FIREBASE CONFIGURATION
 * -------------------------------------------------------------
 * Replace the placeholder values below with your real Firebase
 * project credentials from Firebase Console -> Project Settings.
 */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Determine if user has replaced placeholder keys
const isConfigured = firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("YOUR_API_KEY");

let app = null;
let auth = null;
let db = null;
let googleProvider = null;

if (isConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });
    console.log("✅ Firebase initialized successfully!");
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
}

/**
 * Save user profile details to Firestore in the 'users' collection
 * @param {Object} user - The Firebase user object
 */
export async function saveUserToFirestore(user) {
  if (!db) {
    console.warn("Firestore not initialized (check firebaseConfig). Skipping DB write.");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    const userData = {
      uid: user.uid,
      displayName: user.displayName || "Anonymous User",
      email: user.email || "",
      photoURL: user.photoURL || "",
      providerId: user.providerData?.[0]?.providerId || "google.com",
      lastLoginAt: serverTimestamp(),
      userAgent: navigator.userAgent
    };

    // setDoc with merge: true creates or updates without overwriting existing fields
    await setDoc(userRef, userData, { merge: true });
    console.log("✅ User details saved to Firestore successfully:", userData);
    return true;
  } catch (error) {
    console.error("❌ Error saving user to Firestore:", error);
    throw error;
  }
}

/**
 * Trigger Google Sign-In via Popup
 */
export async function loginWithGoogle() {
  if (!isConfigured) {
    // If user hasn't added keys yet, provide a helpful demo prompt
    const proceedWithDemo = confirm(
      "🔑 Firebase Config Not Detected Yet!\n\n" +
      "To connect with your real Firebase, paste your keys in 'firebase-config.js'.\n\n" +
      "Would you like to preview the Coming Soon screen with demo Google user data right now?"
    );

    if (proceedWithDemo) {
      const mockUser = {
        uid: "demo-google-user-12345",
        displayName: "Sachin Kumar",
        email: "kumarsachin21759@gmail.com",
        photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
      };
      return { user: mockUser, isMock: true };
    } else {
      throw new Error("Firebase configuration required.");
    }
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Save to Firestore
    await saveUserToFirestore(user);
    
    return { user, isMock: false };
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
}

/**
 * Sign out current user
 */
export async function logoutUser() {
  if (auth) {
    await signOut(auth);
  }
}

/**
 * Auth state change listener
 */
export function subscribeToAuth(callback) {
  if (auth) {
    return onAuthStateChanged(auth, callback);
  }
  return () => {};
}

export { auth, db, isConfigured };
