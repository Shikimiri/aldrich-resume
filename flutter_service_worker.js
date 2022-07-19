'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c5558cf821ebee915dc74f903009d4e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "95bb64eaa4f2605909fd73482778f332",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4e53a8ed36dbcfaa3b4316a02a687ac",
".git/logs/refs/heads/main": "91078245a3e2c4145b3948b65283b0fb",
".git/logs/refs/remotes/origin/main": "fba45cd2832cd54428428a6bc5a1c3cc",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0d/1e913daf4f9efbecd26089e51ae42d4bda5736": "173a18cc57d74c37d56b50b21726a6f0",
".git/objects/17/6195e934ed6f73d7e4667a2e2c919be619bdee": "07bca3c0dc314ff4ac40f3cea9d251b0",
".git/objects/1d/ede9fb0dbc1d3f7c05892a25bea9a4eccb8a12": "d60e9b0849011602824a0141bf1c2912",
".git/objects/1f/0802cac07003167b8b4ccc06aa2708434c5cfe": "2fd1f250f3c5ca747c11485537d0560e",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/1f/bed2d4ed1ab257f7a77128f7c970b7ad065d7b": "1dcf1e5a78b59cf207c753163bb0795b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/b56e2166e9e912f7369f0ca08b9675c1cc83db": "9cfb9ebb98dced0ceb6d43abad692e9a",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/aaf9b9599edc13fecc869619d6fcab28890841": "e7ce2f8b6c1ab5ee063e68870b8a7f92",
".git/objects/5d/e7d278fddfe573ec0fe666682d485fa05f1825": "b7f5020c85031b77d6a796b6d5c5e4ff",
".git/objects/63/33d4ae8325d9fd33f628e40bc7d0cb73423d4e": "976fdd7ac4add9d84a273c4819faf6eb",
".git/objects/6a/bb4cb000074e75238608bb77919512c94cae9a": "ad72cb473645f344ef28a051d05ee08d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/9f20a9860f5a3cb0ebf27e90780c4e83db9917": "76febc4eecc9107889143659c70f316d",
".git/objects/88/3f8cdd48df4ed373f07871c04b3de1a03d2d8d": "9e991738463a48ce12eedab5b37bc430",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/97/a9ebfc940fd0de0a8e7bccc14edbc9cc9964c0": "c4c56bb4262e25fdadcd42a18044582d",
".git/objects/98/344b3893748dcee0d84a9263959c9ddbea6551": "0c7e797883b5acbb574791b7c2ee6adc",
".git/objects/98/6f14bd0428e65f7acbd83446ff427844002a32": "1f1bcafe7488b98df26fbee68866bbdc",
".git/objects/9b/2004cc0345bdc3e0e0781f50a6533c91fcdfa5": "24b34d95fe8efa25bd51158a83cb37ac",
".git/objects/9d/689e7cf1349af47e1252642666ee2f1d3266b1": "fb43e66f372f7cbf22e6d2a8a10d024a",
".git/objects/9f/fe4b32e112136d15d0486ef4af86ac8dabad3d": "fa46074c23a25e5eb8e8390eb64482e0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3f101f9fd20dd2a5f08b796cf6b455e527c6a0": "b29016d8b7cf83ab2f4f7d477fe01721",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/cd/d4d50f2e210d0dd5f4f1450d74ab35dc132b41": "6c53e27aa28829977492a87d06abc1d8",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/d6444a9b9f57ae94c348425fc0f8c354b4f6c3": "6f99f34d975dd899925ed9472a5c15bc",
".git/objects/f0/83e09ab10eb13d9863cfd444502e08a3803796": "6faabe312cb707e09c251ac2913a6b74",
".git/objects/f4/0ba77f67cadf49e32321f06c5299ea7c8b4b5f": "21d81c5fc64da59de254682019bf993b",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fb/fdd748accd7673951f9ea2c9509a6349763934": "a0a6b524b821c3c311909f0055821d04",
".git/objects/fd/de055ded3096f0a78ba80a7d3f5160682ebd3c": "82546691d5f786350fa18f268df177a1",
".git/refs/heads/main": "b7002567c8ca98a801c02c0c0dbdf5c7",
".git/refs/remotes/origin/main": "b7002567c8ca98a801c02c0c0dbdf5c7",
"assets/AssetManifest.json": "c2108e83b0f7e10394032d69dda9bb9b",
"assets/assets/animations/clouds_bg.riv": "5ab3cc51c57034463bef8ef3f3ae2a5d",
"assets/assets/animations/falling_charac.riv": "92be041ae0c417468a30ed9429e6b915",
"assets/assets/animations/flutter_bird.riv": "3a155bda8bd8e20990ad076868e106af",
"assets/assets/images/ako.jpg": "efaef04922cef3c4a9669037f8ba1af9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "303cf150a1003da6287b284a531bd9cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"index.html": "343422d0a58927f1d4df008659ef88c5",
"/": "343422d0a58927f1d4df008659ef88c5",
"main.dart.js": "770dabf565d17eea731d53cea30f4c7f",
"version.json": "763e992bb62d41ae38b1b2c065b0d8b4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
