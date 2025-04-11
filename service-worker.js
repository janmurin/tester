const CACHE_NAME = 'quiz-app-v19';
const APP_VERSION = '1.032';
const BASE_PATH = '/';
const ASSETS_TO_CACHE = [
    BASE_PATH,
    BASE_PATH + 'index.html',
    BASE_PATH + 'styles.css',
    BASE_PATH + 'quiz.js',
    BASE_PATH + 'questions.js',
    BASE_PATH + 'config.js',
    BASE_PATH + 'manifest.json',
    BASE_PATH + 'icons/icon-72x72.png',
    BASE_PATH + 'icons/icon-96x96.png',
    BASE_PATH + 'icons/icon-128x128.png',
    BASE_PATH + 'icons/icon-144x144.png',
    BASE_PATH + 'icons/icon-152x152.png',
    BASE_PATH + 'icons/icon-192x192.png',
    BASE_PATH + 'icons/icon-384x384.png',
    BASE_PATH + 'icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // Handle requests with the base path
    const requestUrl = new URL(event.request.url);
    const path = requestUrl.pathname;
    
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Handle requests within our scope
    if (path.startsWith(BASE_PATH)) {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    
                    const fetchRequest = event.request.clone();
                    
                    return fetch(fetchRequest).then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
                })
        );
    }
});
