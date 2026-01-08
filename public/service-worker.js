const CACHE_NAME = 'receipt-generator-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
     '/preview.html',
      '/history.html',
       '/verify.html',
        '/index.js',
         '/preview.js',
          '/assets/css/tailwindcdn.js',

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    )
});

self.addEventListener('fetch', event => {
    event.respondwith(
        fetch(event.request)
        .catch(() => caches.match(event.request))
        .then(response => response || caches.match('/offline.html'))
    );
});