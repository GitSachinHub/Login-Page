/**
 * -------------------------------------------------------------
 * 🔥 YOUR FIREBASE CONFIGURATION & BRIDGE
 * -------------------------------------------------------------
 * Connected to live Firebase project: loginpage-d5a33
 * Supports both Google Auth and Email (Gmail) / Password Login
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

// Check if Firebase is available
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
   * Trigger Google Sign-In via Popup
   */
  loginWithGoogle: async function() {
    if (!isFirebaseConfigured || !firebaseAuth) {
      return {
        user: {
          uid: "google-sachin-user",
          displayName: "Sachin Kumar",
          email: "kumarsachin21759@gmail.com",
          photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
        },
        isMock: true
      };
    }

    try {
      const popupPromise = firebaseAuth.signInWithPopup(googleProvider);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("auth/popup-timeout")), 6000)
      );

      const result = await Promise.race([popupPromise, timeoutPromise]);
      const user = result.user;

      try {
        await this.saveUserToFirestore(user);
      } catch (dbErr) {
        console.warn("Firestore save warning (check Security Rules in Firebase Console):", dbErr);
      }

      return {
        user: {
          uid: user.uid,
          displayName: user.displayName || "Sachin Kumar",
          email: user.email || "kumarsachin21759@gmail.com",
          photoURL: user.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
        },
        isMock: false
      };
    } catch (error) {
      console.warn("Google login error:", error);
      throw error;
    }
  },

  /**
   * Email (Gmail) and Password Login via Firebase Auth
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
   * Register with Email (Gmail) and Password via Firebase Auth
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
   * Save user profile details to Firestore in the 'users' collection
   */
  saveUserToFirestore: async function(user) {
    if (!firestoreDb) return;

    try {
      const userRef = firestoreDb.collection("users").doc(user.uid);
      const userData = {
        uid: user.uid,
        displayName: user.displayName || "Sachin Kumar",
        email: user.email || "kumarsachin21759@gmail.com",
        photoURL: user.photoURL || "",
        providerId: user.providerData?.[0]?.providerId || "password",
        lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
        userAgent: navigator.userAgent
      };

      await userRef.set(userData, { merge: true });
      console.log("✅ User details saved to Firestore successfully:", userData);
    } catch (err) {
      console.warn("Firestore save error:", err);
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
