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

// Check if user has pasted real Firebase config keys
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
    console.log("✅ Firebase initialized successfully!");
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
    // If not yet configured with real keys, provide interactive preview
    if (!isFirebaseConfigured || !firebaseAuth) {
      const proceedWithDemo = confirm(
        "🔑 Firebase Configuration Needed!\n\n" +
        "Real Google login aur Firestore data save karne ke liye 'firebase-config.js' me apni Firebase project keys paste karein.\n\n" +
        "Kya aap abhi 'Coming Soon' page aur user display ka preview dekhna chahte hain?"
      );

      if (proceedWithDemo) {
        return {
          user: {
            uid: "demo-google-user-12345",
            displayName: "Sachin Kumar",
            email: "kumarsachin21759@gmail.com",
            photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
          },
          isMock: true
        };
      } else {
        throw new Error("Firebase configuration required.");
      }
    }

    try {
      const result = await firebaseAuth.signInWithPopup(googleProvider);
      const user = result.user;

      // Automatically save user profile details to Firestore 'users' collection
      await this.saveUserToFirestore(user);

      return {
        user: {
          uid: user.uid,
          displayName: user.displayName || "Google User",
          email: user.email || "",
          photoURL: user.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
        },
        isMock: false
      };
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  },

  /**
   * Save user profile details to Firestore in the 'users' collection
   * @param {Object} user - The Firebase user object
   */
  saveUserToFirestore: async function(user) {
    if (!firestoreDb) return;

    try {
      const userRef = firestoreDb.collection("users").doc(user.uid);
      const userData = {
        uid: user.uid,
        displayName: user.displayName || "Anonymous User",
        email: user.email || "",
        photoURL: user.photoURL || "",
        providerId: user.providerData?.[0]?.providerId || "google.com",
        lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
        userAgent: navigator.userAgent
      };

      // set with merge: true creates or updates without overwriting existing fields
      await userRef.set(userData, { merge: true });
      console.log("✅ User details saved to Firestore successfully:", userData);
    } catch (err) {
      console.error("❌ Error saving user to Firestore:", err);
      throw err;
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
