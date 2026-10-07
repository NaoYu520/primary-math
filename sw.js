/* 【闹闹鱼】奥数训练课堂 Service Worker v2 */
var CACHE_NAME = 'aoshu-app-v2';
var PRECACHE = [
'./index.html',
'./manifest.webmanifest',
'./sw.js',
  './js/anime.js',
  './js/anime-t1.js',
  './js/anime-t2.js',
  './js/anime-t3.js',
  './js/games.js',
  './js/gen.js',
  './js/gen2-g34.js',
  './js/gen2-g56.js',
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
  './data/upgrade-g1g2.js',
  './data/lessons-g3a.js',
  './data/lessons-g3b.js',
  './data/lessons-g3c.js',
  './data/lessons-g3d.js',
  './data/lessons-g4a.js',
  './data/lessons-g4b.js',
  './data/lessons-g4c.js',
  './data/lessons-g4d.js',
  './data/lessons-g5a.js',
  './data/lessons-g5b.js',
  './data/lessons-g5c.js',
  './data/lessons-g5d.js',
  './data/lessons-g6a.js',
  './data/lessons-g6b.js',
  './data/lessons-g6c.js',
  './data/lessons-g6d.js',
  './assets/icon-180.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/fish/face-cheer.svg',
  './assets/fish/face-happy.svg',
  './assets/fish/face-think.svg',
  './assets/fish/fish-cheer.png',
  './assets/fish/fish-core.png',
  './assets/fish/fish-empty.png',
  './assets/fish/fish-encourage.png',
  './assets/fish/fish-happy.png',
  './assets/fish/fish-load.png',
  './assets/fish/fish-think.png',
  './assets/scenes/airport.png',
  './assets/scenes/aquarium.png',
  './assets/scenes/bakery.png',
  './assets/scenes/bike.png',
  './assets/scenes/birthday.png',
  './assets/scenes/blackboard.png',
  './assets/scenes/bookstore.png',
  './assets/scenes/bridge.png',
  './assets/scenes/bus.png',
  './assets/scenes/campus.png',
  './assets/scenes/car-trip.png',
  './assets/scenes/classroom.png',
  './assets/scenes/construction.png',
  './assets/scenes/engineering-site.png',
  './assets/scenes/factory.png',
  './assets/scenes/family.png',
  './assets/scenes/farm.png',
  './assets/scenes/festival.png',
  './assets/scenes/fruit-stand.png',
  './assets/scenes/garden.png',
  './assets/scenes/home-living.png',
  './assets/scenes/kitchen.png',
  './assets/scenes/lab.png',
  './assets/scenes/library.png',
  './assets/scenes/livestock.png',
  './assets/scenes/mall-clothes.png',
  './assets/scenes/market.png',
  './assets/scenes/nature-forest.png',
  './assets/scenes/orchard.png',
  './assets/scenes/park.png',
  './assets/scenes/party.png',
  './assets/scenes/playground.png',
  './assets/scenes/restaurant.png',
  './assets/scenes/river.png',
  './assets/scenes/school-bus.png',
  './assets/scenes/sports-ball.png',
  './assets/scenes/sports-run.png',
  './assets/scenes/stationery.png',
  './assets/scenes/street.png',
  './assets/scenes/study-room.png',
  './assets/scenes/supermarket.png',
  './assets/scenes/swimming.png',
  './assets/scenes/traffic.png',
  './assets/scenes/train.png',
  './assets/scenes/travel-scene.png',
  './assets/scenes/weather.png',
  './assets/scenes/zoo.png'
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
