// Initialize Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSx1Wb3E4X0eWAJoTYfIRFASkU5JIae84",
  authDomain: "sangam-wedding.firebaseapp.com",
  projectId: "sangam-wedding",
  storageBucket: "sangam-wedding.appspot.com",
  messagingSenderId: "502527114604",
  appId: "1:502527114604:web:84b916eb84917ee0ac4749",
  measurementId: "G-HC8FLV6WR0"
};

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/wedding/config/firebase-messaging-sw.js')
      .then((registration) => {
          console.log('Service Worker registered:', registration);
          // Initialize Firebase after successful registration
          firebase.initializeApp(firebaseConfig);
          // Now request notification permission
          requestNotificationPermission();
      }).catch((err) => {
          console.error('Service Worker registration failed:', err);
      });
}

// Function to request notification permission from the user
function requestNotificationPermission() {
  Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
          console.log('Notification permission granted.');
          getFCMToken();
      } else {
          console.log('Notification permission denied.');
      }
  });
}

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Function to get FCM token
function getFCMToken() {
  messaging.getToken({ vapidKey: 'BC5RsvHOub_csru0gwh11LNR6rTEwYeu1D' }).then((currentToken) => {
      if (currentToken) {
          console.log('FCM Token:', currentToken);
          // Store token to send push notifications later
      } else {
          console.log('No FCM token available.');
      }
  }).catch((err) => {
      console.error('An error occurred while retrieving the FCM token.', err);
  });
}