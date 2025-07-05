# SigmanticAI Website

A modern, AI-powered hardware design automation platform website with Firebase authentication.

## Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Firebase Authentication**: Secure user sign-up and sign-in functionality
- **Demo Request System**: Users can request demos through authenticated flow
- **Real-time Notifications**: Team notifications when users sign up (via console logging)
- **Persistent Sessions**: Users stay logged in across browser sessions

## Firebase Configuration

### Project Details
- **Project ID**: sigmanticai
- **Project Number**: 999182859252
- **Web API Key**: AIzaSyDmqzdqKK69W5VfmMoqE9oT6HoyVK9Fol0
- **App ID**: 1:999182859252:web:6608b11cc8dc90ad0c97a1

### Authentication Flow
1. User clicks "Request Demo" button → redirects to `login.html`
2. User can sign in (existing account) or sign up (new account)
3. New users provide: username, email, password
4. Account created in Firebase Auth + user data stored in Firestore
5. Demo request logged in `demoRequests` collection
6. User redirected to `demo-waiting.html` with personalized message
7. Team receives notification via console logging

### File Structure
```
├── index.html              # Main landing page
├── login.html              # Authentication page
├── demo-waiting.html       # Post-login waiting page
├── firebase-config.js      # Firebase configuration and auth functions
├── firebase.json           # Firebase project configuration
├── firestore.rules         # Database security rules
├── firestore.indexes.json  # Database indexes
└── styles.css              # Modern styling with animations
```

### Team Notifications

Currently using console logging for demo request notifications. When a user signs up, check the browser console for:

```
🎉 NEW DEMO REQUEST 🎉
Username: [username]
Email: [email]
Time: [timestamp]
User ID: [firebase_uid]
---
```

### Security Features
- Email/password authentication with Firebase Auth
- Secure session management
- Firestore security rules
- User data isolation
- Input validation and error handling

### Email Notifications Setup (Future)
To enable email notifications to rohilkhare@sigmanticai.com and tamzidrazzaque@sigmanticai.com:
1. Upgrade Firebase to Blaze plan
2. Deploy Cloud Functions with email service
3. Configure SMTP or use SendGrid/Mailgun

## Local Development

1. Open `index.html` in a web browser
2. Click "Request Demo" to test the authentication flow
3. Monitor browser console for demo request notifications
4. Test sign-up and sign-in functionality

## Deployment

The website is configured for Firebase Hosting deployment:
```bash
firebase deploy
```

## Support

For questions or issues, contact:
- rohilkhare@sigmanticai.com
- tamzidrazzaque@sigmanticai.com 