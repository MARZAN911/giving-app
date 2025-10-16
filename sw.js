self.addEventListener('install', e => {
  console.log('Service Worker installed');
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
