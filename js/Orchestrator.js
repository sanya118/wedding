
// Initialize the Firebase app in the service worker
const firebaseConfig = {
    apiKey: "AIzaSyDSx1Wb3E4X0eWAJoTYfIRFASkU5JIae84",
    authDomain: "sangam-wedding.firebaseapp.com",
    projectId: "sangam-wedding",
    storageBucket: "sangam-wedding.appspot.com",
    messagingSenderId: "502527114604",
    appId: "1:502527114604:web:84b916eb84917ee0ac4749",
    measurementId: "G-HC8FLV6WR0"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Request notification permission from the user
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    getFCMToken();
  } else {
    console.log('Notification permission denied.');
  }
});

// Function to get FCM token
function getFCMToken() {
  messaging.getToken({ vapidKey: 'BJU0uXCS0t8HmE23OTzkWURj-01UBTK_NhPg0O-FJlD9Wkyc66jUkS6O0Cbv9qjeZjDnMaqF0EwOp4oV1VOzP9Y' }).then((currentToken) => {
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

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/wedding/config/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    }).catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
}