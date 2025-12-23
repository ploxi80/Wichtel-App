const CACHE_NAME = 'wichtel-v1';
const ASSETS = [
  './',
  './index.html',
  './musik.mp3', // HIER DEINEN DATEINAMEN EINTRAGEN
  './icon.png',
  './manifest.json'
];

// Installation: Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Abruf: Wenn offline, Dateien aus dem Cache nehmen
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});