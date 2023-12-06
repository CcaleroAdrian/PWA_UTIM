const cacheName = 'utim-news-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/logo.png',  // Añade aquí tus recursos estáticos
  '/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
