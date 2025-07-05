// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmqzdqKK69W5VfmMoqE9oT6HoyVK9Fol0",
    authDomain: "sigmanticai.firebaseapp.com",
    projectId: "sigmanticai",
    storageBucket: "sigmanticai.appspot.com",
    messagingSenderId: "999182859252",
    appId: "1:999182859252:web:6608b11cc8dc90ad0c97a1"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateProfile 
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    addDoc, 
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for global use
window.firebaseApp = app;
window.auth = auth;
window.db = db;

// Authentication functions
export const authFunctions = {
    // Sign up new user
    async signUp(email, password, username) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update user profile with username
            await updateProfile(user, {
                displayName: username
            });
            
            // Store additional user data in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                email: email,
                createdAt: serverTimestamp(),
                lastLogin: serverTimestamp(),
                demoRequested: true
            });
            
            // Log demo request for team notification
            await addDoc(collection(db, 'demoRequests'), {
                userId: user.uid,
                username: username,
                email: email,
                requestedAt: serverTimestamp(),
                status: 'pending'
            });
            
            console.log('New demo request:', { username, email, timestamp: new Date() });
            
            return { success: true, user };
        } catch (error) {
            console.error('Sign up error:', error);
            return { success: false, error: error.message };
        }
    },
    
    // Sign in existing user
    async signIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update last login
            await setDoc(doc(db, 'users', user.uid), {
                lastLogin: serverTimestamp()
            }, { merge: true });
            
            return { success: true, user };
        } catch (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
    },
    
    // Sign out user
    async signOut() {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return { success: false, error: error.message };
        }
    },
    
    // Check authentication state
    onAuthStateChanged(callback) {
        return onAuthStateChanged(auth, callback);
    },
    
    // Get current user
    getCurrentUser() {
        return auth.currentUser;
    }
};

// Make auth functions available globally
window.authFunctions = authFunctions; 