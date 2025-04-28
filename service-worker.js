const CACHE_NAME = 'quiz-app-v33';
const APP_VERSION = '1.054';
const BASE_PATH = '';
const CRITICAL_ASSETS = [
    'index.html',
    'styles.css',
    'quiz.js',
    'config.js',
    'manifest.json',
    'questions.js'
];

const SECONDARY_ASSETS = [
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
                // First cache critical assets with better error handling
                return Promise.all(
                    CRITICAL_ASSETS.map(asset => 
                        fetch(asset)
                            .then(response => {
                                if (!response || response.status !== 200) {
                                    throw new Error(`Failed to fetch ${asset}: ${response?.status}`);
                                }
                                return cache.put(asset, response);
                            })
                            .catch(error => {
                                console.error(`[Service Worker] Failed to cache ${asset}:`, error);
                                throw error; // Re-throw to prevent activation
                            })
                    )
                )
                .then(() => {
                    console.log('[Service Worker] Critical assets cached successfully');
                    // Then cache secondary assets in the background
                    return Promise.all(
                        SECONDARY_ASSETS.map(asset => 
                            fetch(asset)
                                .then(response => {
                                    if (response && response.status === 200) {
                                        return cache.put(asset, response);
                                    }
                                })
                                .catch(error => {
                                    console.warn(`[Service Worker] Failed to cache secondary asset ${asset}:`, error);
                                })
                        )
                    );
                });
            })
            .catch(error => {
                console.error('[Service Worker] Cache initialization failed:', error);
                throw error; // Prevent activation if critical assets fail to cache
            })
    );
    // Only skip waiting if critical assets are cached successfully
    self.skipWaiting();
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
            // Verify critical assets are cached before notifying clients
            return caches.open(CACHE_NAME)
                .then(cache => cache.keys())
                .then(requests => {
                    const cachedAssets = requests.map(req => req.url.split('/').pop());
                    const missingAssets = CRITICAL_ASSETS.filter(asset => !cachedAssets.includes(asset));
                    
                    if (missingAssets.length > 0) {
                        console.error('[Service Worker] Missing critical assets:', missingAssets);
                        throw new Error('Critical assets missing from cache');
                    }
                    
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
                });
        })
    );
});

self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    const assetName = url.pathname.split('/').pop();
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // For critical assets, always try network first
                if (CRITICAL_ASSETS.includes(assetName)) {
                    return fetch(event.request)
                        .then(networkResponse => {
                            if (networkResponse && networkResponse.status === 200) {
                                const responseToCache = networkResponse.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => {
                                        cache.put(event.request, responseToCache);
                                    });
                                return networkResponse;
                            }
                            throw new Error(`Network response not ok: ${networkResponse?.status}`);
                        })
                        .catch(error => {
                            console.error(`[Service Worker] Network fetch failed for ${assetName}:`, error);
                            if (response) {
                                console.log(`[Service Worker] Falling back to cached version of ${assetName}`);
                                return response;
                            }
                            throw error;
                        });
                }
                
                // For secondary assets, use cache-first strategy
                if (response) {
                    // Update cache in the background
                    fetch(event.request)
                        .then(networkResponse => {
                            if (networkResponse && networkResponse.status === 200) {
                                const responseToCache = networkResponse.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => {
                                        cache.put(event.request, responseToCache);
                                    });
                            }
                        })
                        .catch(() => {});
                    return response;
                }
                
                return fetch(event.request);
            })
    );
});
