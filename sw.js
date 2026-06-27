const CACHE_NAME = 'nextsem-cache-v41';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/blog.html',
  '/syllabus.html',
  '/interactive-notebook.html',
  '/swiper-demo.html',
  '/lessons-data.json',
  '/lessons.html?v=39',
  '/playground.html?v=39',
  '/style.css?v=39',
  '/app.js?v=39',
  '/firebase.js?v=39',
  '/lessons-data.js?v=39',
  '/confetti.js?v=39',
  '/playground.js?v=39',
  '/mobile-nav.js?v=39',
  '/bubu_neutral.png',
  '/bubu_happy.png',
  '/bubu_confused.png',
  '/dudu_neutral.png',
  '/dudu_happy.png',
  '/dudu_confused.png',
  '/pandy_neutral.png',
  '/pandy_happy.png',
  '/pandy_confused.png',
  '/step_ingredients.png',
  '/step_stove.png',
  '/step_listening.png',
  '/fs_step_1_require.png',
  '/fs_step_2_read.png',
  '/lesson_hello-world.png',
  '/lesson_modules.png',
  '/lesson_fs.png',
  '/lesson_async.png',
  '/lesson_http.png',
  '/lesson_express.png',
  '/lesson_events.png',
  '/lesson_streams.png',
  '/lesson_database.png',
  '/lesson_jwt.png',
  '/lesson_os-process.png',
  '/lesson_error-handling.png',
  '/lesson_websockets.png',
  '/lesson_testing.png',
  '/lesson_cors-helmet.png',
  '/lesson_env-config.png',
  '/lesson_file-upload.png',
  '/lesson_redis.png',
  '/lesson_clustering.png',
  '/lesson_graphql.png',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching app shell and static assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Network-First falling back to Cache)
self.addEventListener('fetch', event => {
  // Ignore non-GET requests, Google Ads, or Firebase Auth / Firestore API requests
  if (event.request.method !== 'GET' || 
      event.request.url.includes('googleads') || 
      event.request.url.includes('pagead2') ||
      event.request.url.includes('/__/auth/') ||
      event.request.url.includes('identitytoolkit.googleapis.com') ||
      event.request.url.includes('securetoken.googleapis.com') ||
      event.request.url.includes('firestore.googleapis.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If response is valid, clone and put it in cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache if network is unavailable
        return caches.match(event.request);
      })
  );
});
