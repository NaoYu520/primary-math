/* 小学奥数举一反三 Service Worker */
var CACHE_NAME = 'aoshu-app-v1';
var PRECACHE = [
  './index.html',
  './manifest.webmanifest',
  './js/gen.js',
  './js/games.js',
  './data/lessons-seed.js',
  './data/lessons-g1a.js',
  './data/lessons-g1b.js',
  './data/lessons-g1c.js',
  './data/lessons-g1d.js',
  './data/lessons-g2a.js',
  './data/lessons-g2b.js',
  './data/lessons-g2c.js',
  './data/lessons-g2d.js',
  './data/lessons-g2e.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-180.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE).catch(function() {});
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* 图片：缓存优先，后台更新 */
  if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(req).then(function(cached) {
          var fetchPromise = fetch(req).then(function(resp) {
            if (resp && resp.status === 200) cache.put(req, resp.clone());
            return resp;
          }).catch(function() { return cached; });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  /* 其他资源：缓存优先，网络回退 */
  event.respondWith(
    caches.match(req).then(function(cached) {
      return cached || fetch(req).then(function(resp) {
        if (resp && resp.status === 200) {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(req, clone); });
        }
        return resp;
      }).catch(function() {
        if (req.mode === 'navigate') return caches.match('./index.html');
        return cached;
      });
    })
  );
});
