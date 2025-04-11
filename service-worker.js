const CACHE_NAME = 'quiz-app-v23';
const APP_VERSION = '1.036';
const BASE_PATH = '';
const ASSETS_TO_CACHE = [
    'index.html',
    'styles.css',
    'quiz.js',
    'questions.js',
    'config.js',
    'manifest.json',
    'icons/icon-72x72.png',
    'icons/icon-96x96.png',
    'icons/icon-128x128.png',
    'icons/icon-144x144.png',
    'icons/icon-152x152.png',
    'icons/icon-192x192.png',
    'icons/icon-384x384.png',
    'icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    console.log(`[Service Worker] Installing new version ${APP_VERSION}`);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log(`[Service Worker] Opened cache ${CACHE_NAME}`);
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .catch(error => {
                console.error('[Service Worker] Cache addAll failed:', error);
            })
    );
});

self.addEventListener('activate', event => {
    console.log(`[Service Worker] Activating new version ${APP_VERSION}`);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Notify all clients that a new version is ready
            return self.clients.matchAll().then(clients => {
                console.log(`[Service Worker] Notifying ${clients.length} clients about new version ${APP_VERSION}`);
                clients.forEach(client => {
                    client.postMessage({
                        type: 'NEW_VERSION_READY',
                        version: APP_VERSION
                    });
                });
            });
        })
    );
});

// Listen for messages from clients
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[Service Worker] Received SKIP_WAITING message, activating new version');
        self.skipWaiting();
    }
});

self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response immediately
                const fetchPromise = fetch(event.request)
                    .then(networkResponse => {
                        // Update cache with fresh response
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Network request failed, continue with cached response
                        return response;
                    });

                // Return cached response if available, otherwise wait for network
                return response || fetchPromise;
            })
    );
});
