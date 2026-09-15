/**
 * -------------------------------------------------------------
 * 🔥 YOUR FIREBASE CONFIGURATION & BRIDGE
 * -------------------------------------------------------------
 * Connected to live Firebase project: loginpage-d5a33
 * Supports Google Auth, Email/Password Login & Registration,
 * Password Reset, and Firestore User Sync.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBD-bSisrQelz9x_SNGE7GODArs6y-MLeg",
  authDomain: "loginpage-d5a33.firebaseapp.com",
  projectId: "loginpage-d5a33",
  storageBucket: "loginpage-d5a33.firebasestorage.app",
  messagingSenderId: "643663798223",
  appId: "1:643663798223:web:ac1b3e27a6eaa2fa48bcba",
  measurementId: "G-035LG43BQY"
};

// Check if Firebase SDK is available
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  !firebaseConfig.apiKey.includes("YOUR_API_KEY") &&
  typeof firebase !== "undefined"
);

let firebaseAuth = null;
let firestoreDb = null;
let googleProvider = null;

if (isFirebaseConfigured) {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebaseAuth = firebase.auth();
    firestoreDb = firebase.firestore();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });
    console.log("✅ Firebase initialized successfully with loginpage-d5a33!");
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
}

// Global Firebase Bridge: Works on both file:// and http:// protocols
window.FirebaseBridge = {
  isConfigured: isFirebaseConfigured,

  /**
   * Helper to format Firebase errors into friendly consumer-facing messages
   */
  getFriendlyErrorMessage: function(error) {
    if (!error) return "Something went wrong. Please try again.";
    const code = error.code || "";
    switch (code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
        return "Incorrect email or password. Please try again.";
      case "auth/email-already-in-use":
        return "An account with this email already exists. Please sign in.";
      case "auth/weak-password":
        return "Password is too weak. Please use at least 6 characters.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/network-request-failed":
        return "Unable to connect. Please check your internet connection and try again.";
      case "auth/popup-closed-by-user":
      case "auth/cancelled-popup-request":
        return "Google sign-in was cancelled.";
      case "auth/popup-blocked":
        return "Sign-in popup was blocked by your browser. Please allow popups.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again in a few moments.";
      default:
        return error.message || "Authentication error. Please try again.";
    }
  },

  /**
   * Trigger Google Sign-In via Popup
   */
  loginWithGoogle: async function() {
    if (!isFirebaseConfigured || !firebaseAuth) {
      return {
        user: {
          uid: "google-demo-uid",
          displayName: "Google User",
          email: "user@gmail.com",
          photoURL: ""
        },
        isMock: true
      };
    }

    try {
      const popupPromise = firebaseAuth.signInWithPopup(googleProvider);
      const result = await popupPromise;
      const user = result.user;

      try {
        await this.saveUserToFirestore(user);
      } catch (dbErr) {
        console.warn("Firestore save warning:", dbErr);
      }

      return {
        user: {
          uid: user.uid,
          displayName: user.displayName || user.email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL || ""
        },
        isMock: false
      };
    } catch (error) {
      console.warn("Google login note:", error);
      throw error;
    }
  },

  /**
   * Email and Password Login via Firebase Auth
   */
  loginWithEmail: async function(email, password) {
    if (!isFirebaseConfigured || !firebaseAuth) {
      return null;
    }
    try {
      const cred = await firebaseAuth.signInWithEmailAndPassword(email.trim(), password);
      const user = cred.user;
      try {
        await this.saveUserToFirestore(user);
      } catch (dbErr) {
        console.warn("Firestore save warning:", dbErr);
      }
      return {
        user: {
          uid: user.uid,
          displayName: user.displayName || email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL || ''
        },
        isMock: false
      };
    } catch (err) {
      console.warn("Firebase email login note:", err.message);
      throw err;
    }
  },

  /**
   * Register with Email and Password via Firebase Auth
   */
  registerWithEmail: async function(email, password, displayName) {
    if (!isFirebaseConfigured || !firebaseAuth) {
      return null;
    }
    try {
      const cred = await firebaseAuth.createUserWithEmailAndPassword(email.trim(), password);
      const user = cred.user;
      if (displayName && user.updateProfile) {
        await user.updateProfile({ displayName: displayName.trim() });
      }
      try {
        await this.saveUserToFirestore(user);
      } catch (dbErr) {
        console.warn("Firestore save warning:", dbErr);
      }
      return {
        user: {
          uid: user.uid,
          displayName: displayName || user.displayName || email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL || ''
        },
        isMock: false
      };
    } catch (err) {
      console.warn("Firebase email registration note:", err.message);
      throw err;
    }
  },

  /**
   * Send Password Reset Email
   */
  sendPasswordResetEmail: async function(email) {
    if (!isFirebaseConfigured || !firebaseAuth) {
      return { success: false, message: "Firebase is currently offline or unconfigured." };
    }
    try {
      await firebaseAuth.sendPasswordResetEmail(email.trim());
      return { success: true, message: "Password reset link sent! Please check your email inbox." };
    } catch (err) {
      console.warn("Firebase password reset note:", err.message);
      return { success: false, message: this.getFriendlyErrorMessage(err) };
    }
  },

  /**
   * Save user profile details to Firestore in the 'users' collection
   */
  saveUserToFirestore: async function(user) {
    if (!firestoreDb) return;

    try {
      const userRef = firestoreDb.collection("users").doc(user.uid);
      const userData = {
        uid: user.uid,
        displayName: user.displayName || "User",
        email: user.email,
        photoURL: user.photoURL || "",
        providerId: user.providerData?.[0]?.providerId || "password",
        lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
        userAgent: navigator.userAgent
      };

      await userRef.set(userData, { merge: true });
      console.log("✅ User details saved to Firestore successfully:", userData);
    } catch (err) {
      console.warn("Firestore save note:", err);
    }
  },

  /**
   * Sign out current user
   */
  logoutUser: async function() {
    if (firebaseAuth) {
      await firebaseAuth.signOut();
    }
  }
};
