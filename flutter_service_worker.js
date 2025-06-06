'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6a1025883f6f76f1ef28ec18d99ae56d",
"index.html": "ecc43efceded8f24e105a209b7299e4f",
"/": "ecc43efceded8f24e105a209b7299e4f",
"main.dart.js": "1dca5bf9eb8dc9a79d59e7d35cda9628",
"version.json": "899bd5ce14dd7a11fe6f5cde654341cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "a33f987cde4becc5255ca33eb1da2a89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f9adfea0baa257e4e008652c8290ce1b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "9e418ff62a8e912c073ed93c1359ca8d",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/gh-pages": "bf7ad6dc638978f12929f5e39f93094e",
".git/refs/remotes/origin/gh-pages": "bf7ad6dc638978f12929f5e39f93094e",
".git/objects/a4/66249979ac71a0a085cd338ef9f767c816ff61": "ec3fb2f739c8e82893c33b0799591ab4",
".git/objects/a4/fa06c44add8be49d041ac4614da88d13adf9e0": "b561954867c28e54f71882d16039991a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "faab227f1a05ff78769b7b0e892e8c67",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "2609fc8dd28ceabd6807a51679e580d7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/f6/c1e6c7779ab63082e9e3715e5490f48a9800be": "50708e24c982734ccd18589b9ed1194a",
".git/objects/f6/3bfe733bae4090ce3913e9cc8af1b0ac295c89": "b3cbeff7118d7c7533b7e6c7d3ca2254",
".git/objects/5d/8fb67fa41557cb0daf7ea61684795acfb130ff": "a4c04109639de5cf85bf00fcd9975fd4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/02/5b6bd04537b049b1ec66041cb25b3cc79bd866": "7667c2cda47cdcd33ecbf740c6929b5a",
".git/objects/15/96300ff0791e041207ee0ff5d5718c88beed4f": "0a2c5ca8d8a78625cb9802a32e319740",
".git/objects/38/01d143fb06d45bda642a48c00df7b4b061b3a5": "52551fd05263dd09fbfdd7d9f7efdc17",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/84c9805c67e2e7d5994300d140e015f9332fb9": "8b83fd4257eea4c6ec99595c3e3ddfbf",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b1/9f061b03a7c1ebd491995d16d7b5afa9ac7a58": "5d87fe44bab147355b023f45a6571714",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/53/d538bb930bf23d6049e495bb53351d9a65ee75": "8fd6b3f4b5b26e90bfd0c2ed9128bb74",
".git/objects/22/e2a18061891b96e3648e1a147543274d353bb7": "3c01f6ac77f132dcdb835e13ba0eae23",
".git/objects/98/313ad73254900c118530f149cd532159b229a6": "3964bf048398062cb6e280031962713d",
".git/objects/71/86dcacd46f6261574f34085a5f262b913c7c7a": "79f572152098fb412c8502b8109b12b5",
".git/objects/f4/f8af9e59aa12f2ea76e9ca38fc953375db8fde": "9590f831fcf4f4737f8702445c522ac2",
".git/objects/f4/c181ca45e28a5ef2740f50d61efae12aa756cc": "ecb6fc013a2dcbd54ac1ff92802988a6",
".git/objects/c9/760d5b8d865ef50f624410bff2d1c3b75ffc39": "dd11ecbe2647c40146a1759cb79d6c11",
".git/objects/39/8aa99fdc5a3996027f4970beabcedbc31bd261": "98c5ff4576f178adfb0d60a7b521ea8b",
".git/objects/bc/4162ce0f0f9f75a6a1e0603bc4a014d8de0609": "ce433dfc790469a4763760da4790a44f",
".git/objects/7b/acd8ab699cb50cab3d6712a70772aa0036ef94": "021e0e4a99a7a09eb68b3247fae5d68a",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/94/9ce054ccb210cb78df3e164341e4a27bb1dd96": "13082af5bfdfebe19c7804066ee33812",
".git/objects/0b/c07282cbb8eec5304bcf1b64bea92370729ea0": "51c75d74bed1eb66fb17bea0fe27e67d",
".git/objects/d8/82a3d9d44d1f649f2bd76dff0ee3d25b193514": "a08bbc269a717cd668348df6a0f2fb47",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/ff/2d32a3127f7877f6b32393ff34b640bec50732": "fd08e279d27a1d75b8867a7b5ba27368",
".git/objects/1f/481043a6a5754d86590581c737dffd71832deb": "19c6cedae8b567173bce7a115521d42f",
".git/objects/7d/9029b7b04510d4eace42e597ac181f23d35d67": "5224299036c3a09ae59b743b28ea9e04",
".git/objects/c5/6525f946101c25104a1d517e91e4ddc731c29e": "89a8ac87343c6f98c22f9da53c4b1d59",
".git/objects/db/e8ababca4668e57eb84996bf8933d3d22c11ef": "210029548ad28f308fc6afdd76977e88",
".git/objects/dc/c7a5536789a8fe6a54e5fdfc613043d1ab7eaf": "1a9f0612dbf8a5cc18bf6e8c38cb8136",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "d2773f184380e8d62c9deb6e20abf44e",
".git/objects/bb/d158b2a680c2156f50c35e44636f7d155a1f78": "bdd3a56257bb0b64a90074eb0417838e",
".git/objects/18/f0ff8fb995da5d48e49376ba780e5426a9a857": "c2b7a6105e6fc9a549efa8a82d21204a",
".git/objects/e0/6fa792c83a84ca5371361506edf8f481e8f2b9": "5a61a29c604895c235727c1ed7dd12ef",
".git/objects/37/f83a9e72a0b9df523197ad840694942b819a98": "6f433e04da70f14dcaf43f67d07f8906",
".git/objects/00/c03ebb172505c803bb2573a44ea917a81dd0ed": "5ee0a286789367705256177e544ea1bf",
".git/COMMIT_EDITMSG": "edd19f53ea743b1e65ba777e2a14ddec",
".git/logs/HEAD": "f923fdc2e4eb7f5405996d8a69d1e065",
".git/logs/refs/heads/gh-pages": "602fac7f3089a16f59c4d1758f97966a",
".git/logs/refs/remotes/origin/gh-pages": "3fca30f60270bca4c9d4e48c9f9002de",
".git/config": "ad493565678218b5ef4436c30152aec1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "a682dffba3f46b2aded45adf6ae9dfb8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
