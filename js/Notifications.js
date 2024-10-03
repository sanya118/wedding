const firebaseConfig = {
    apiKey: "AIzaSyDSx1Wb3E4X0eWAJoTYfIRFASkU5JIae84",
    authDomain: "sangam-wedding.firebaseapp.com",
    projectId: "sangam-wedding",
    storageBucket: "sangam-wedding.appspot.com",
    messagingSenderId: "502527114604",
    appId: "1:502527114604:web:84b916eb84917ee0ac4749",
    measurementId: "G-HC8FLV6WR0"
  };

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function(err) {
        console.log('Service Worker registration failed:', err);
      });
  }

  // Request notification permission
function requestPermission() {
    console.log('Requesting permission...');
  
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
  
  function getToken() {
    messaging.getToken({ vapidKey: 'AIzaSyDSx1Wb3E4X0eWAJoTYfIRFASkU5JIae84' }).then((currentToken) => {
      if (currentToken) {
        console.log('Token generated:', currentToken);
        // You need to send this token to your server to save and use it to send push notifications
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  