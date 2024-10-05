importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');


// Initialize Firebase in service worker
firebase.initializeApp({
  apiKey: "AIzaSyDSx1Wb3E4X0eWAJoTYfIRFASkU5JIae84",
  authDomain: "sangam-wedding.firebaseapp.com",
  projectId: "sangam-wedding",
  storageBucket: "sangam-wedding.appspot.com",
  messagingSenderId: "502527114604",
  appId: "1:502527114604:web:84b916eb84917ee0ac4749",
  measurementId: "G-HC8FLV6WR0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/icons/icon-192x192.png' // Optional notification icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});