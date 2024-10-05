const cacheName = 'wedding-app-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/images/icons/wedding192.png',
  '/images/icons/wedding512.png',
  // Add other files that need to be cached
];

// Install Event - Caches the app shell (static resources)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(filesToCache);
      })
      .catch(error => {
        console.error('Failed to cache:', error);
      })
  );
});

// Activate Event - Cleans up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          console.log('Removing old cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Fetch Event - Serves cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Serve cached response if found, otherwise fetch from network
      return response || fetch(event.request);
    }).catch(error => {
      console.error('Error fetching data:', error);
    })
  );
});
