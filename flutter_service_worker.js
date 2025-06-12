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
"flutter_bootstrap.js": "dcc693ef996e67101ea0cdc02bc084c3",
"index.html": "ecc43efceded8f24e105a209b7299e4f",
"/": "ecc43efceded8f24e105a209b7299e4f",
"main.dart.js": "75210033d8747ced50a130c386546f26",
"version.json": "899bd5ce14dd7a11fe6f5cde654341cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2c105295a9d4feec99282d8382a4a83b",
"assets/AssetManifest.bin": "30260c9996a22ac66feafae9ebc0647f",
"assets/AssetManifest.bin.json": "260ef4a8ba2e82a746fd60900b48732f",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "9cca748a22e8f6dd848f036adfc21973",
"assets/assets/login.png": "e8d0363cb3c6d15d262e59953f010da5",
"assets/assets/login2.png": "f663647a9c0d6af94bfc8ce39d8f663f",
"assets/assets/shoppingcart.png": "6615b22e8163adccfda5562498e7293d",
"assets/assets/background.jpg": "549b19b05b25b9083d63f8b421092132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/login.png": "e8d0363cb3c6d15d262e59953f010da5",
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
".git/refs/heads/gh-pages": "b9e948f0b14b068babda9920058b56c6",
".git/refs/remotes/origin/gh-pages": "b9e948f0b14b068babda9920058b56c6",
".git/objects/a4/66249979ac71a0a085cd338ef9f767c816ff61": "ec3fb2f739c8e82893c33b0799591ab4",
".git/objects/a4/fa06c44add8be49d041ac4614da88d13adf9e0": "b561954867c28e54f71882d16039991a",
".git/objects/a4/47f980e1390379b7550067e98230603c97000d": "0a6e1c8436a50edfca8e428584932238",
".git/objects/a4/ad296f8e6aab44a9ebaf39bc8d45ce2b13ef28": "9e0df671e6897590be1018e0cfc809e9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/8f/dabd454e40917a4b5ef394883ed5cdde687249": "1b2a7de2c10a7652086b5d4456c57aa1",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/69/a66b7dd3d07a3a63b27853c9e405dbde496c04": "d90ba342138281382b6ebd3f2cd7fa41",
".git/objects/69/4b5c0794f9a355f330f29a3e89c36fd4be32e9": "a077c6bcd2fae8e477d41ce0826877c5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/03/4943cabc755912cccda789d7127dd584cb5162": "a64eb16ad71548728633e07b4573c175",
".git/objects/03/ab917425b1c5015c22f33965446c716812edfc": "a0b8b0924cd992d3ba85287bf607e579",
".git/objects/03/ad4a2848ad86a8a3bd91f9b40162e33430e581": "1c6efbd06f7e0b2cb66f168b48709613",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/46/71f678aefd682e725b013252e2c6a82ce36117": "a83792b62eb4d5c76025ada769902faa",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "faab227f1a05ff78769b7b0e892e8c67",
".git/objects/0d/2485f0509ef23a7d08badb52dd8d46ceaece61": "7e1bde298467c516fa0b8dd20e776fcd",
".git/objects/0d/c8f434c1b8a00235c4fee0b0a010f0d441b43f": "8421212d4f030d0d15200c3c77805daa",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "2609fc8dd28ceabd6807a51679e580d7",
".git/objects/ca/6a1767bccd47ccde0b0c704a600e3cb80933e5": "5a117f6f4b3d0ce12f517bd6f26896ce",
".git/objects/ca/c20bb6e605d28e7b4806d5ef2037a9ae528457": "6fd0ec3cf4d7548559838ab0dfa8850b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/35/87d235945d2c22cf6ecde4e17f9d0fecfdc80a": "29c48d62ce31727749f6007617177ac6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/4f/90b203124541fe274c341f55b88e33de98c76e": "092eac0f316423e94794e7c7b64bd0bb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/91/b2c02c47fa91e2c1f63b14cde5881cf115e171": "99937d32b620469cee22b67b1d72061a",
".git/objects/91/56cec8ddaf95e7d297d5acdad6ca80a44a1ece": "4c407946138f8abdc91aadb40889ffab",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/57/5978d01f5e89cfff31ea6d49b26e1d3cf8d8d6": "7e43c081059026eb0b8defb94683c9f7",
".git/objects/57/f8b5063dd94351c8b723fb25eb038831df2e15": "6416e08a298414ea10f37aceba043e77",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/d9/e535f53a469775643976bd54f81a05d3c528d9": "c7388ccf27bf17029a5ee5e6efcc10f4",
".git/objects/d9/7db2cf2b64f88bd3a0824e58a1c9f806d2276a": "84f15b51ac2db4fa1c110cc675cf9b7f",
".git/objects/d9/027beb0a6aa07d0eba22891e6cfacfeccbfd0a": "c7221c7e31d9885fb879e19f57397724",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/8a/35bdb81d0bd83f5dd630f96a81aba25c109646": "0bd6879ad864528936d038ce1d64b666",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/40/3871fa6bd11573dff0dddcd4d7879b1725757c": "fe0711bdd52e75f63b5bf81017058348",
".git/objects/40/94ea74d1327b0a1835cb80ca33a618c763b830": "9ccc9ced273606ddce3b3fd8caa3f7f0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/5f/1363758b014a570734cdc30a951ef48a70e840": "6fad31299466d8eafaa7779d6fe3fd03",
".git/objects/5f/f28f787ec21e553b07e0622cb0beb5459b5bbb": "e6d5c555c38a10cefecf84c8d4a82146",
".git/objects/5f/c389aba57ac27dab44bf9f64357be9b3dae60a": "005e133ce673eb80775c91093355cd5b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/a8/ae25b88d02b152c983da5be505a6148c5f608f": "9b3c501593f427ebf6f4817adba62742",
".git/objects/f6/c1e6c7779ab63082e9e3715e5490f48a9800be": "50708e24c982734ccd18589b9ed1194a",
".git/objects/f6/3bfe733bae4090ce3913e9cc8af1b0ac295c89": "b3cbeff7118d7c7533b7e6c7d3ca2254",
".git/objects/f6/b0271948b787aed78f4a4945c100e27870dbf0": "4c0e55da9c453c3bdbef3a968d639fed",
".git/objects/f6/4a1779371dd17c9300768951d4aa569e2f02a5": "811d51bd435d68074e47ff34eafafc2d",
".git/objects/f6/207f8e78e6088c49152d43b9eb54a4805ca42b": "3c7c3378bfc364189cf2df15a396f203",
".git/objects/5d/8fb67fa41557cb0daf7ea61684795acfb130ff": "a4c04109639de5cf85bf00fcd9975fd4",
".git/objects/5d/43454c3558914f792b0b3523368e54d4919fc7": "525668d72cbb5c44a0cf071970aeccc2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/88/57133afbf626ab88e7d5b7226886c3100986de": "c2cf4985abdd8a3ef28f17fccc8719d3",
".git/objects/88/8c4c13b10486c704db9458dad526050bbd3766": "a0cada13b6edeba0b3874fe92b552110",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/eb/b6ced89dbb49c201fc59765dc8d275eed0d48b": "d927b5f87da68217429f3e48ba86830b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/d6/2760ff67e274cc1512c58ad56e8dd2ccdcac44": "380fd7cefa665c04e7130a31a702c253",
".git/objects/d6/ee44240ae1ac399a7cbfe9eef047cd0826765e": "dfdf5c0444e4949a631705d3e67a6bad",
".git/objects/02/5b6bd04537b049b1ec66041cb25b3cc79bd866": "7667c2cda47cdcd33ecbf740c6929b5a",
".git/objects/15/96300ff0791e041207ee0ff5d5718c88beed4f": "0a2c5ca8d8a78625cb9802a32e319740",
".git/objects/15/63467386b5ccf567757eed22a98e100d0d834d": "127be536690536b9f1f7621edb3ea6dc",
".git/objects/38/01d143fb06d45bda642a48c00df7b4b061b3a5": "52551fd05263dd09fbfdd7d9f7efdc17",
".git/objects/38/2c270d971b7422be6b614784da32813e0180b6": "26f2389e982b1eded36b481bb0e73e9e",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/84c9805c67e2e7d5994300d140e015f9332fb9": "8b83fd4257eea4c6ec99595c3e3ddfbf",
".git/objects/6b/c66be58d248d04c78de770a1af76e28d7f83e8": "b5017c47b861261f1af036e2d6016c9b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/f5/da0456d14125508a5ac3f97970482caa179594": "95e12a875d91c230c3c2d5e6860a2214",
".git/objects/f5/8e1ef4d4eb07d584b7210465d4ea2e99de9aef": "731b48b627cdade81e8815cc5bc255f0",
".git/objects/f5/90d8e280a0ee1e42b3b7e680a367fef80bf4c6": "4c0c8f15451fddaef6c3518f9e0d8d82",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/40bbd09ade49f02dc94eb6aafd720a87aac474": "961f9d6dfbe536ff1b465a6cc3fd81a5",
".git/objects/b1/9f061b03a7c1ebd491995d16d7b5afa9ac7a58": "5d87fe44bab147355b023f45a6571714",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/ecec18af18a055f9d051c91b5bc99b2f136580": "1a0d28036e166e2b303619750e056971",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/33/5bea15948ffc0189f2fa618dff1ad1a90bb46b": "6f10b3848fa8ebe2752da800786a17a6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e50ceee58f40bd53687c5a017c1c0a02cd952a": "777afe461138ed861c618234fa34c015",
".git/objects/53/d538bb930bf23d6049e495bb53351d9a65ee75": "8fd6b3f4b5b26e90bfd0c2ed9128bb74",
".git/objects/53/40ec03ecd40065c3d462d88cfa8ea0d9f63332": "4ac12540b48eef0f1a48fb769eb1483c",
".git/objects/22/e2a18061891b96e3648e1a147543274d353bb7": "3c01f6ac77f132dcdb835e13ba0eae23",
".git/objects/22/7351dea07b8bcf2bb5273ccc95c5b46c2580e3": "04c81fb3bbfab95ef79e3dbe37e4d142",
".git/objects/98/313ad73254900c118530f149cd532159b229a6": "3964bf048398062cb6e280031962713d",
".git/objects/98/ecccd4b4bde89fa57cd4ae59615f705911d5cd": "bbd7ca299a16152619888a3024dc79a6",
".git/objects/71/86dcacd46f6261574f34085a5f262b913c7c7a": "79f572152098fb412c8502b8109b12b5",
".git/objects/f4/f8af9e59aa12f2ea76e9ca38fc953375db8fde": "9590f831fcf4f4737f8702445c522ac2",
".git/objects/f4/c181ca45e28a5ef2740f50d61efae12aa756cc": "ecb6fc013a2dcbd54ac1ff92802988a6",
".git/objects/f4/36a382de24d70c62c99661b75500cfb67e49fb": "e9e0670b073f8d3039f4d6906c2a0baf",
".git/objects/c9/760d5b8d865ef50f624410bff2d1c3b75ffc39": "dd11ecbe2647c40146a1759cb79d6c11",
".git/objects/39/8aa99fdc5a3996027f4970beabcedbc31bd261": "98c5ff4576f178adfb0d60a7b521ea8b",
".git/objects/39/883cfdfea26c3395a39f714eabc5201143c924": "d983f997153f848714c84511f73087e6",
".git/objects/39/936fc9f5e900067980160032245feae5924508": "38f6ba15c330704b0cada6deaa70b356",
".git/objects/bc/4162ce0f0f9f75a6a1e0603bc4a014d8de0609": "ce433dfc790469a4763760da4790a44f",
".git/objects/bc/a8289f8c52cb7ad7b628a9ded582090edc9901": "59ba6d470109e5e4be82149dd2851022",
".git/objects/7b/acd8ab699cb50cab3d6712a70772aa0036ef94": "021e0e4a99a7a09eb68b3247fae5d68a",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "a98737484609f1b2ad44296bbbf166f4",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/cb/f7251288dc85f30c32e6c93c568f9c57201399": "02db39029190da35addc9ca24f401ebf",
".git/objects/94/9ce054ccb210cb78df3e164341e4a27bb1dd96": "13082af5bfdfebe19c7804066ee33812",
".git/objects/94/7797c71560f5f27b07b8e16b3a508a48fb70a3": "df2b14cdbb425c1f4db31690323c0f7c",
".git/objects/94/b3c7629d464ff04eb417b66d5aef373d06b0d2": "e19379fa9891735b1ec51ec701c10714",
".git/objects/94/f13641a5609ec8073503370f5bbbc060b36665": "d1cbafadae278fadf41742b0f00f0e33",
".git/objects/0b/c07282cbb8eec5304bcf1b64bea92370729ea0": "51c75d74bed1eb66fb17bea0fe27e67d",
".git/objects/0b/3cd6ab061384dc847ef1af24d0178ab654596a": "656be48183a3f8ab265836f2c81ace94",
".git/objects/0b/cbb05d226db187a2d3326e896d1ccb439aa350": "df98fd4451f2b65e819a1e0ad803f2df",
".git/objects/d8/82a3d9d44d1f649f2bd76dff0ee3d25b193514": "a08bbc269a717cd668348df6a0f2fb47",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/ff/2d32a3127f7877f6b32393ff34b640bec50732": "fd08e279d27a1d75b8867a7b5ba27368",
".git/objects/ff/dd1b25c22e0598620ab10eacb8c8cc1a7f8b1b": "9812c8a628ee06c6c89e3f3dc2ef664e",
".git/objects/1f/481043a6a5754d86590581c737dffd71832deb": "19c6cedae8b567173bce7a115521d42f",
".git/objects/7d/9029b7b04510d4eace42e597ac181f23d35d67": "5224299036c3a09ae59b743b28ea9e04",
".git/objects/7d/b022fad54903a55b3bfaaac0649de0f6a45415": "ff3e1a9dd20da584f54d17e83dfaab08",
".git/objects/c5/6525f946101c25104a1d517e91e4ddc731c29e": "89a8ac87343c6f98c22f9da53c4b1d59",
".git/objects/c5/a363e9c72e305d64430e0b13e1e39d24950128": "fbb150ec3c36c304c6bc8bf86963e292",
".git/objects/db/e8ababca4668e57eb84996bf8933d3d22c11ef": "210029548ad28f308fc6afdd76977e88",
".git/objects/db/ad1ba7c0e9fa923414c4be2f684f7769bfe3fb": "3292f4ba972edb2206f71e34e49eb6ba",
".git/objects/db/4aeac0f4027f9cb947ff8a7ca10536d66d3030": "7dc4d98ee215e8d64bddf3047962b15c",
".git/objects/dc/c7a5536789a8fe6a54e5fdfc613043d1ab7eaf": "1a9f0612dbf8a5cc18bf6e8c38cb8136",
".git/objects/dc/214b2cf6a253194b323e256c55f9cbe5ad5562": "950d6f5016f62ddfc54d72a81e733e78",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "d2773f184380e8d62c9deb6e20abf44e",
".git/objects/c3/337ccbb0c62e5608380eea1d8618c5f0f36c8d": "9962b068c5780170edb4927fa5fc9219",
".git/objects/c3/018ccaebd077fea205ff9db55a051bc9b8d87d": "2c6fc620c25788b3f16a537dfe330a48",
".git/objects/bb/d158b2a680c2156f50c35e44636f7d155a1f78": "bdd3a56257bb0b64a90074eb0417838e",
".git/objects/bb/4527e34055a2d85eb34c922ad422d060fb1b04": "effe9b8f0059806576c0f9db9bfc2f69",
".git/objects/bb/bbba73a0008c6d3a4830def1cda15e6275b289": "8c579754aa5726cacc1efe463cb29fe6",
".git/objects/18/f0ff8fb995da5d48e49376ba780e5426a9a857": "c2b7a6105e6fc9a549efa8a82d21204a",
".git/objects/e0/6fa792c83a84ca5371361506edf8f481e8f2b9": "5a61a29c604895c235727c1ed7dd12ef",
".git/objects/37/f83a9e72a0b9df523197ad840694942b819a98": "6f433e04da70f14dcaf43f67d07f8906",
".git/objects/37/90edcbed32630c8288f04be6513681c7749dda": "367ead40e2a9602d25eb208e5886d0c2",
".git/objects/37/6bd2868388e25cd5ce65ed9b87c58cbfe3ba3f": "265703f00b1381ae6dfaafdaa1a7b8fe",
".git/objects/00/c03ebb172505c803bb2573a44ea917a81dd0ed": "5ee0a286789367705256177e544ea1bf",
".git/objects/00/08c74cc3e9ea5987e8ff6521bdcf12376c87ce": "89297858d56de3c24fc9d5e9e2c709fe",
".git/objects/00/fa4b346e8e50100d05bd73c1021090f8a96d3b": "2b5d5024ac08a8cdf1fbd4c0e79e34da",
".git/objects/00/6974712eaec2f944936589a7ab6e2e9b70b938": "4ed0bd06d55caefba912fb003c013766",
".git/objects/60/cd195872c6a7a6b98d873750f3afe4475df796": "48fd94d8e7379ce54aa4c51a68e8acb1",
".git/objects/21/174d5c5c7b622204f45a2f695135047977e71d": "7d7ae2eca626146b271190972345002f",
".git/objects/21/869cd5cbecb5522ab47b134ddf6590bac7ffd3": "ab90f621958e8bb982f6bab66ae054f6",
".git/objects/7f/879509f3ccd82417ad8fda6f408eccfaf2aa36": "8d73ea2e1fe07b01453e4bcfe863dc3b",
".git/objects/7f/f5c6bed60ff50e3c9d48f5955419fcdb76e2c6": "077bfcb1973f80bdd46480e225bcd32f",
".git/objects/4b/67411488ae73ac4c867dac424547584e997ab6": "b7ad21496ef0e85a74a1c4e121e36b03",
".git/objects/4b/263f83a1041a11f5123fe6637f9f378a913520": "0518256a64d6f3d61f8221a90808b603",
".git/objects/4b/49783207c1e6c4fd2bee045dd678d9212a452a": "dd950344e81f8d008ed169bdf203da01",
".git/objects/3c/1f0a8e39f760b0c91b031cb07e8e0b7c5567a2": "0fa27a9ff1ae8bc90c90e2202b89ee57",
".git/objects/2d/c725f187766df962a8a972b72a8ffc8097edea": "25ddd09ba22ef3abfc0a2252ee94ad5e",
".git/objects/2d/f879ed379637bb6882884f2bf51cfc1d9bd590": "6baa4ff2213282e60a7de5df697da00d",
".git/objects/2d/8455a6e248fa3523c3862f91cffe36f97ca29a": "6af2fd25591d090e8205bd3394dbce22",
".git/objects/2d/175b2536916d67692fccc25057d03bbf2f5de1": "ed2bed81231a285f3b68625d5ebc91ef",
".git/objects/7e/a8f577a7ecc425d8b728ee8747bb0f147f57a1": "b535e91e7e0b1e75da4544d11cf044ea",
".git/objects/7e/ca0ea61fb209cacf984a44009444a47b2b7a2d": "0458275ef186113c6b96bc9fd6db2a8b",
".git/objects/7e/511c814377cde3de8b17bd32021b20e0328e23": "5e885759cc09ecfd3069df6bce427f4e",
".git/objects/65/1e3ea8c928ef8d41a37ab3755624be7ed6c809": "b9a2d788c31d426228a2e256fb190a1d",
".git/objects/44/582b110e550d5556530110a9b372542e5bd71f": "e11e8c679467c720ca8c719511c35823",
".git/objects/1b/ce74484c1efb6bc00c07a816eaa369534572ff": "996e1b0b68160109ec953b02362ec6cc",
".git/objects/1b/dc00dd42b8f47956a763dc167a8498bfea0605": "b4bca55acbc21bda638a85446260365f",
".git/objects/1b/6f9e765a566b65aa63be130ae9469e675ad826": "200e5e849378521ec342be7bcfb6c09d",
".git/objects/49/af7c17a9a28853fa3cd72069f567f8ef5b4b3c": "850bcf0efc3dda5ce22f6c6c277e2fbe",
".git/objects/49/44150b55848a94c0633d1f8c5f4c2084000a50": "84fa5f88cde4e1072a99c92015d7bdf5",
".git/objects/49/5643ef3f7124c215037a475daaeb456698ea7e": "e7ca9ecc69a8bb6133b96a91e7c01f7a",
".git/objects/49/4db72fb25549d667c2c753e754c67f6e179a37": "dedf669175831af9f53f676a6279c177",
".git/objects/84/35db0d9986c5d6a791622d789e93ae248e0bcd": "6321c2df5b47764d638d714f565b5ae4",
".git/objects/f1/3e50e8034b14bba1711b3bc5423046862ee66f": "ba159f66105c8817d81259443d0731e1",
".git/objects/ed/bc86b5ffaa1b99bacfe2674a98123fe858a004": "06f44ec1aa2ba02f60a1db1975933b1c",
".git/objects/ed/a75185176420113f7ef472c8f57e5375341fc7": "02f31f32410b107eb00f13768daf8581",
".git/objects/55/a39d4ffab70b0a2a99446f7915438d1c2451b0": "876f032510b6c81ca0fbc84452d6f935",
".git/objects/55/04c806553171238a39c28146c77cedd900bfe8": "ab290bd8b4ac6a07893c4bc4479bb5f3",
".git/objects/54/9ec4ad4406b6ed93eadd62d6772d0f9061efcb": "bb3823d83dbae1602469836ddbd1b93e",
".git/objects/54/ea96c9caf67277159c52eb625e29aa0327331d": "64fd73057f8b4f0765d217403fc794da",
".git/objects/54/ba795c9b6bd0233d4f19434d1eaf271ae6f1b9": "18e117eb3ec05be74e1f747d74499847",
".git/objects/af/28a976fe4e592b18c40bc8e8d223f44c31e07e": "05e3d9db9f34499c07e02f0e79d4dea7",
".git/objects/af/2de6941b374e29e45d3e0f9cee0c5b26a24d15": "f8149e52de24a95e9c9895fa169e83fc",
".git/objects/04/2bb2a4fbefb777666db5202552b53cabaad2e8": "41cb16be57f261bf2c3250b55f97af69",
".git/objects/04/140f3396c45d0599e7c7c5d3dd5253d69607f8": "409af4374b951d12ab2791635908f9a6",
".git/objects/04/ce96abbc2f0ab3e8f44efdcf3f2c622f2d6982": "9e20a11933bbe1cb5253554fde501b03",
".git/objects/8e/8683c5cd19d47cdf6fcd6803613733511a8686": "ed8a037a66c17099b0cf3fb7496076e4",
".git/objects/8e/b015dc62bd27bae8066ec16fc297fc8bf53762": "c8cc5c0679f0209733ed6b25bfc7d6cc",
".git/objects/8e/3548521ddd4f29c369b6e668739d40684007e9": "1fc78848dfc6531ec3f6a568abf25a51",
".git/objects/2c/bf42f0c9c2beb253f07135f6cf1709174d83bf": "15d347973c6124395415c7a2f9b61b9a",
".git/objects/2c/7a931bfbfc272879cb68c9f793af65e4adaa16": "55af37ff90d67336a7faf3af2697414d",
".git/objects/2c/0955b038c9c157234ebd0bde52c7f60188f22f": "0b1503522b9275e5a53aa81615066f30",
".git/objects/2c/3b19b9881a714f6d0e2e3748804e1be787f12c": "4336d2b9381875067ddd368707ecb380",
".git/objects/29/12e533f1be4d410ac398f74df65a0a245cac67": "00eb6fdcafce8f79b05ff04eba4a5eb3",
".git/objects/19/f4d60d5f1a9ee9fc08a22761ab77717b01e18d": "c0a4bdc7caf53341df1ba1a6047ee5d3",
".git/objects/19/762f605b71cc7c9affff89a118eaa21dad8dd0": "16aa43860fb7704794a1bf44ef534322",
".git/objects/fd/68c59ef0228760fa5f3cf2f8191bc15968dc6d": "48629e34f57c1300babad98262255687",
".git/objects/df/b444ba886eb86be975abbbcf629c00c6aafaca": "55fa0f04a2b5c9d1adae12b8867db825",
".git/objects/df/3fa78536951c7a6a828e6dabb49997ca22be81": "8431b9126693249ba2e6785b1d9f13ce",
".git/objects/3d/0eba34c7a0c141bc93015138023b5d0f2fc151": "e611b0e289b56f0698397fd4a0f2b3da",
".git/objects/3d/8bd9943352f2e77537e53e853a565c16f7ee40": "02fa6d8f5de82f20f563f09a04c2e961",
".git/objects/3d/ff4af4075f7896796c9bf0e28efa2a1d8c8107": "7b5695558d2cd0953678252fc6cf0977",
".git/objects/5a/9400c663aebebf692f85141a34a1dfce038e57": "6bc47a5d1b227ac219f2180eec0e09b4",
".git/objects/a3/4454fd2fb48c581989297f38b9c9ca0167383e": "9b9ddedb7bc89fb5966e42826322313c",
".git/objects/d2/6fe66b5b9c6f04972b8f82ec91e51f6072065c": "af7bfc09d05df8aeaedca0aa0e6e32cd",
".git/objects/d2/79c34ae9b5fc68227e06164815f94c44e250f9": "309b6f448e328b3b671d137aa837faa3",
".git/objects/d2/4d9d93aa25af7073cf5d9daf778853b7f48ed8": "fbb6b583e113b634497e7af17aa563fd",
".git/objects/9b/3f632ba19c9e471d3fa66e9f560802ed2d87af": "2303b9e0c457e4ddb31624d0df3fd0ff",
".git/objects/9b/605283e2d44a245391423dff26418e97be5314": "6e125a4cab8706821d755a3dd1f12a87",
".git/objects/74/143387eab5cb0872654490311ddae0405c6aa9": "7a281fc24cf47937d07a5d51543c07a0",
".git/objects/74/f339a68e834efeaeb3aea37b8589dd1a494e18": "204b6a3134cac05b1d9bc07eafdbb26c",
".git/objects/01/8b3525dede4acc1ffefe5b5906cd9da0ff54aa": "ee922b6a5be31f671142034a861a1450",
".git/objects/75/1bf346bb6ce939ec1b326ce11fc86ac9f1b1c1": "a8f31ce87dd3ae8694c81bc487e58f3b",
".git/objects/48/fe234abffb43cbe047488e3444c4ca156177c0": "f8eaf662e125880b9c618a469815dbc2",
".git/objects/62/841c9e1cbe0badc743dc4a2315dc68ada502d3": "f1835bde0f78e665bd32a05124828055",
".git/objects/62/d90a863ad4767663b6885e6d64f8c297cfe36c": "a65f1f9fd0c72ba3648f7a74f664c61c",
".git/objects/62/72d6ce4824a2d4a926aad5c942a222e47914c2": "497c5b45b8289e01255fee00eb9c50e8",
".git/objects/f0/0e1bb4b4270982080f07d8dff241b748a59e2a": "83a5c8e6408f085442440da94f3a8cf8",
".git/objects/25/42adf59271d22f18b5a7fcfd08b18dfd58a8d3": "95465740321a43e07bb8f29d2ad7436a",
".git/objects/25/f0e30aba4c8059e10b6ac0b283b4566c8233bb": "7bfa137e5ca8efd73dfa4fbadabc2fc2",
".git/objects/6a/dcac9c2b6dd56c0f60b8d57824c151b1e11186": "0c3867c58b8da11d8b9a60d8ed614958",
".git/objects/c6/d71b62fa5637a445dc891b2e4f0e0755c48231": "84ca7d95c079e070ddc5971a1cdc3019",
".git/objects/96/3ee1918119ef19126c014f7a2739ec09f87c2f": "eb2aadd34491477368db8987ef81c0d7",
".git/objects/1a/1c142d8500838d3a63381574bbf398a6c55a76": "337fc9f5b3f9140bbe6413a270933ba4",
".git/objects/1a/2e7721fa3511dc0a61157651daee6a117fc2fa": "28518372e0e9647283d72a6b9cbd9c05",
".git/objects/8d/0717320931e24a2aaeb8f03505b09dbe50eace": "45a3a086dc14f9461b085b5417c3ec8f",
".git/objects/d1/3b1b8e7690b0d41a24ef2ec4803545d42ec2fa": "2e1d9163dd8ccc7145a600086d9b66b4",
".git/objects/d1/9b878fb776fc07680efd2827d05c58161f0470": "69e040637aca5101a22c1670d5c245fc",
".git/objects/d1/518d28879d8516d13a041855e80fd131add3c7": "14739431204be275d83a35298e21d8ad",
".git/objects/d1/ab6f96c16311370ee8f88498b11ed0be2b6b26": "fcadd76beb4e46130a74ecb0064dc790",
".git/objects/1c/b955b1d8dbdd7daa33a358eeb765cf79e81d70": "50cd1f14cc008bde3ec8d63b49152ef4",
".git/objects/1c/82d4d618d78967be826f9076eab24af8d3952d": "1e090940a84a7b1b5e2511a115f42c1f",
".git/objects/cd/d5cae5ed03d3e8f6e96f95b9c7bfcbe39f7c10": "ef3de700a96a58a3c5de692de9151cce",
".git/objects/cd/4df26026b9f73a815a6415e17e8e5baa418981": "d22738162690a74fbf2211ffffcb52f1",
".git/objects/e6/daccdc7640d56541b90b19f3093769229edf43": "9a2b37fc7922583efd5121214b20299c",
".git/objects/6f/e858385365916b88665385e1ccf4153d2c71e9": "e4dcb424c1a2555b61b4aaf1347e9fcc",
".git/objects/6f/4cb27ec7f58dd220803357da4210418d1807bc": "927d00b5abd7e43566bf76d7e1f57af3",
".git/objects/6f/743e0c1d65650081ecc50ea1bd1c3a34bd9f19": "43f22aff4560fdf5f9b084c99ae8463d",
".git/objects/58/a2386ceae3bf6071eea4a81cd1ced11ab86d3e": "be161d212e2a88a9bbcc43d0a6c81caa",
".git/objects/ee/e471a23d0cf3b2bccb0233a40b315a0af46115": "f288ec1d54f0108ce5fa8c9dcfd22b49",
".git/objects/ee/30ba6aa302d6ea69c992ca8e47dbf428bedce2": "167c24a50bed6e07b762108a2cb8d854",
".git/objects/30/8c19ce6e9ddc59c7305f94ead6f87572875946": "db8d105552f6146274c1d9048ac33128",
".git/objects/30/62c6e5e051bdb4ca023e05d4548ec37bd5346c": "206c5746628415d39a02064d02979a72",
".git/objects/30/bb0dfe0d3923d696d9739e79245f4c41fcec09": "9659f9472c979e731d41cd8ffbe238eb",
".git/objects/30/03a91a5809e33d87f830bfc10d46d5b92da2f1": "c2a4c84fa00d65367ec29fae46c6c1be",
".git/objects/23/836ab45bdd6eecfa23afb42d5764e30e04e209": "8b0d1897c40e9a2895b62e6af33a2301",
".git/objects/23/d618538c1c6ff7d3050acebc4d443e8912dc40": "8e250d43d3c030723c1f197dc2c870b9",
".git/objects/95/682ab5ba10aadc7f67d27278182f52558cc341": "7ff4f791568683b8b78751fe50080fee",
".git/objects/95/90404dea52bbfe2d32a6e165780a5b94913484": "d9c3c7b60bc38db312079726d12acc1c",
".git/objects/c4/95521ad06b658d20548e1fcfbbfd781fb4ff31": "a4521b06f723517ef4f21ab1a98921db",
".git/objects/c4/e74f9b9872470b08f081b2aa20e56f91e97cb0": "982a4d57f0bc986d2f5f638f984e63cf",
".git/objects/c4/5c9b4992944942bcabe38c1087ff5445dcdb97": "ddeaeb0015d505e21f0228d5bd96ab0f",
".git/objects/d5/268323861cc7b8f584f4078a1fe6692a718f4d": "287657990d5f64796b71f6c53986a004",
".git/objects/d5/9d2fe93b710f5558e418e4e5109e140b4544e3": "f6f68da6043276a72dfd7b3ea035465a",
".git/objects/d5/55bf8c4a9f2d44ac371fb824c4d2588ab9e856": "0815c0b59cd350203507380e0986531e",
".git/objects/d3/e86ce0a15b9b2f553a5a96430c46e3dd98e8f4": "d9d09f9cd8555319db525148aecd87b8",
".git/objects/9c/96fbc23d1da7a4088a099d61ca99f8c551d4e2": "050417a26b1d536fe4010bdf8daff12d",
".git/objects/aa/fcb057abe4d144c427ae6d32d1d778bc64dec4": "c082744d89cf0f58ccee8f4d667bccf1",
".git/objects/a2/2df6e175e2ffca29321b56821a712710adb820": "cd042ac2224d6f4d520bc88eefffcf34",
".git/objects/a2/59272d3a695c72a49465a10cace4cc85890421": "389b70238ee1e0dc2c8f4264517628bf",
".git/objects/de/fbe4a99d9085151fdbdf3606a8b53c6a22f095": "45a0294cde68a3a3a0f2e76e444392e9",
".git/objects/de/d3cb3c13d5d6dd959227c0d5d3c2d2b2b06787": "a88357ba39cf72e23f6b92337ccae9b5",
".git/objects/8b/616c7b312e08a7473647f86a1df15e45d70865": "805f2ede992d1b18a3c37eb90d8298da",
".git/objects/8b/48deea5e57d09048588b6b9f067ba81795a3b5": "58a0c1f776d88ccec58bed5f04483fb3",
".git/objects/8b/3d53588cdab22423057cb7804ca5b462ad2ff3": "6d1897c57896abe8b207b441f559d347",
".git/objects/3a/e0fab40f4d9ef20f746085afa33cb3a4f035a0": "2435ee32ed8e35f0f8511d66d911341d",
".git/objects/3a/e19dc098880139ff19eb4e262826b61dd32fcf": "6e599e4ee6e5740c20260a9ac417f6cb",
".git/objects/2e/5b2ceb656e5eee0ac2c9c090f0223f4ddeb0cd": "2cbcaace95ce8f99f71b7ed26d70093a",
".git/objects/2e/a4239b168b5b0835d050d16bbd719bd74fca52": "634f2870f667cbf1193b2febb20cd979",
".git/objects/59/8fe603af05518ec67e4fd8cf1d3c3ca11456f9": "af71ef9e578a15fa830f75933b892523",
".git/objects/80/271d24dd919174b09cb5617e4b808574c7e3c7": "7664dafca358d6c0dc8835b7f1432267",
".git/objects/e8/4dd608c37508a92364979fcd37202f1ced0435": "977d47928e2f71ab9aa2ba3fbd942aa2",
".git/objects/e8/32c7b3cd3c1febf2174cece5484b8bc044e45a": "5eeedca069abee6ad26fafda198be1d3",
".git/objects/4d/aad37f1f82ca13b99fae483ab92a59607b7898": "56db92a6f75e6c02ae7a467f8ba59904",
".git/objects/4d/6ae0b2dccd195a46f88004e0d8c3cc9eabefe6": "ade948886bbd683672ce2de3e774258b",
".git/objects/72/4a834f3c679ab66c8e9f83f59c3bedb3219acf": "63892c483748a5e17581ed62c9299c01",
".git/objects/24/ce4d8cd9c0d47e288afe03165895cafaf96c77": "2b862982fef74d45eeb8d118d8053906",
".git/objects/8c/753f93e6435efce2a174c45c5c4239743ff44b": "3dea0db60889ad1bb2fe49edc7626336",
".git/objects/dd/743cd1d32f5def034eec8edf9ce0d3448064ee": "f49bbeb28c803ddb5cce0ca86ecf755b",
".git/objects/dd/b6413da86e67af266858704191e32718dab279": "ff31356413a5c6e20d4a8c47c1500d8a",
".git/objects/dd/0b92887c4631ebd87db030d21b833d23979cdc": "8f6eb61555500a4d8519ab6bc6a2cfa4",
".git/objects/09/d915c4c496c0f116cd402ee0f2db8d5eee9a81": "cba5af84f85e2c1eebed5f108eaaa8f2",
".git/objects/13/00b0818198b5527d5b0fcffdd724a8875447c7": "3bb4fda5d030dfd2087e4f8add4eae4a",
".git/objects/e1/c5f103dea8d02ffe6e1731262383999ac6c758": "20f43cfc35067f4aa4350e3452abe3a1",
".git/objects/e1/7010d8254098d3c4b5337bcf9b733b4af8731a": "aa7dbd1e88cf7f2ed965b6d3fb25d79b",
".git/objects/f8/0b6f635e1f6116f09dbd618a93e6be7614b7e7": "fc17e8830f63ed8264cc48547a6c0a56",
".git/objects/17/874f6b669c4f5441d97e211994a71155120f54": "bde1f4fe8016699ae9de66c3326a6b34",
".git/objects/0f/9661feb9beb87d09bdba7915ceacbc24beff9a": "5f0de1b6d5c27b3617689d434b1ca721",
".git/objects/0f/2cb0cd305bcfebc458344d0aa478c82e66cf5f": "db42f854d0a26ac4b1a0bdcd598bd6d8",
".git/objects/c7/0eb6de96413e911bd29130d42d8e41a24efade": "caa5457ec7450adf82c54f3c6dc37f30",
".git/objects/2f/42ce48478aeed63a53faff0afc53e879b2bbf3": "a5632792e857a9cc45d2f3ad1a52aec8",
".git/objects/2f/858273a9dc5c534d0e0d1de46d691fae5f7371": "efddf9a1af3a170aaae34bfc66c5799b",
".git/objects/2f/fea14ccc8a5f111dba0ea821b1bc1af6f70a0d": "bc9cd4cd2397863f27a0e539a7cd4873",
".git/objects/5c/2699b21805840ed1f4ebc6bdccb2d3c79a86e4": "05c50162846ee81349effd9de4f6176a",
".git/objects/5c/b2264f39df90fd9faf9bab423c06c6b0c528b2": "1dd3cbd587d450c6104f7e00d2622687",
".git/objects/e4/91b0126ca89f6d176fc9289872bec3f5dcaea9": "ad7232427b0107ede5f20402864b3c34",
".git/objects/9d/1500c17c6a682de9ab33195b57b60b2eb30342": "a454d8005fa875bdbc3338262c179731",
".git/objects/9d/8e604fe230b53eaf35bac9a66db084bafb4edf": "d99c7ba16e77fb154b657661c639984c",
".git/objects/9d/14ed1d2de9f434cb12f1af72346c8d4b46a6a1": "66aa09a77f767d91ac6529a2d4653c53",
".git/objects/b4/65566a0becae223647ef2b7f6c525d3c42d6fb": "3407559c92aac8c52fa2f235f4460555",
".git/objects/b4/87850196f3c709934b7ee9fcdc1634833cb10e": "275fe88a5b9e6a92d5867898b2e8e330",
".git/objects/90/45f64070a4323da695d94ebae5170601839314": "cfe29af1e38d1feb0e09e94c9174f5a0",
".git/objects/90/6180f12fd63de800520bbd9c5875e927a3e846": "89e66f1e6f87250ef6804eeb64a4a67b",
".git/objects/ec/6a0b243b2dae556867319e532f1dd32ab46e17": "f63d39116d2887f2be0f95bf6fb00c85",
".git/objects/e2/bfa0657ef48eecf87605bc99bba036c350bde1": "2f886b543b2c49a9083ce4cfade6d1c1",
".git/objects/1e/6d1901ff592088839ca66086adfa82d89bdf06": "c25ab9dcc7049a2c208676028fad4420",
".git/objects/2b/3b3cf356d4ef1a8d8dcfecc8bd970cea718815": "af61420518bf7f8a9b3a2b082c88b068",
".git/objects/2b/493e4d6fc42be7ee1c3c0823bf6d38be1fb4b0": "f3e78e0a218500c06619cc37f7f89ecd",
".git/objects/77/4c7242751f17c568ef14c6a02811c77cbfd0fc": "2c43c05869b4d687ad2dc8af4882aa63",
".git/objects/97/218510ac75b94636d31f439af9cbc321c8b1c0": "27229e33ddf54056bafc9576834faee8",
".git/objects/97/a32f4607c4999b6edb39681fff21d2664898f7": "0468a97666544c12b234aa276d04e84c",
".git/objects/0c/cfee789d025a8e98a2a38552d71c2260c52b88": "230ae0b8983848d12b370dac53bfe651",
".git/objects/c1/9f420326bb613eb8adbd4cd8cfb8dffc07f51b": "9034a12ca35167f4dc3bfbd7f4f5bcb7",
".git/objects/c1/6fbe91c20e0557046452f42299eb6765c9dd5e": "40194906f155caa7dfba9d5cbf5ede62",
".git/objects/bf/6e482b3308f121c2a105c4c111b723baed8d83": "4a204812d0245d3d71b189e691f28954",
".git/objects/a6/730d34e24df845afda7870a9f728b9c11f2b61": "38ac54dcece440a9697bd587c7b98c08",
".git/objects/a6/6a011a8531e60fc8b1954d0dd4da35c3552c6b": "fc75105a8daa9090a97cc613edd14c98",
".git/objects/fe/213ba9617c3afda745829e4951ac266e17a4da": "f412039b7d48e95dcad7bced63cb76da",
".git/objects/56/84a7a1c09e8a95228dd99446d1ed4424fdbb35": "818230791dc50b3952de646a8ae1742f",
".git/objects/f9/57dd9b0ad512fd33ec8acd651877b493c973b9": "d2f4dc55002d85e62a295893d48463da",
".git/objects/52/759dd261f93099f9cd32e88634389285b8d757": "b792b94c678e3024238ca3d5f56f9fe3",
".git/objects/45/fffb4b5dcd454598018663940af2c5fd6f9d23": "da22ac456203e819f456277687d7716f",
".git/objects/50/fa44db4da145b035f9f8f98dc9aadace6416cf": "b87e1203f19e399b1877571189732e6d",
".git/objects/50/217adebf5f9e7831264300589cba9befe32db1": "15944b64e0da623f913dc90cac383f7d",
".git/objects/a9/387141ec06c418562018d18412bbaac8923aaa": "3c03c8619d1125a5309ba99365c6f939",
".git/objects/a7/a345d526326acad514ec304912a2a6ebf955b4": "ace6e8f7ff4d9f5dba9321abf7db9313",
".git/objects/06/067e055ed0afa36c7ef01ec487d1d33da438e7": "0a1343589873f43ff49573b1d330df5b",
".git/objects/06/af9e8a0d8f579da8978d22fee8c0645e5bd58a": "56f269a543878adb725f1bcfc04fe302",
".git/objects/2a/2251b4c531e105235192dbba8f9de40347570a": "b3217295921f842000de84aefbaed78a",
".git/objects/11/3bcd78fd73324d5580622cfe7506fabb3412a7": "9a5c5d9efafb73b4dbf09251a8733f25",
".git/objects/11/21b84b37db1257f2275b76a7a04810af5a10aa": "00010dcef7cac3b86ce01b5e4233450e",
".git/objects/05/622c19ccc8b9cf171ffc0de9ef731cc656c3c9": "53407d6b27193dad27ac34ca06bbabed",
".git/objects/05/3809a2be90244ebb205b16dfe859374a7631b0": "8519d961b56c53e46dc2b0b3cd09b434",
".git/objects/99/ea1750f62b0a8e3044b8a97f0d590928a91c40": "052f167e4097be9ec4a72a9474acc92e",
".git/objects/99/78026d733e5afbf45d1b1a9aa286cfee057c4b": "26ec4f3103b491c37eb4b881ec6c73e5",
".git/objects/99/c172ec78b4d66b196704d31da968240ea15cb6": "44169ef0c8db358d79e26b88a83d83f8",
".git/objects/79/4b7036f743b43e9beb698a96947997f327fa0e": "9109abf39e143bcc51dd8e93b172b7ad",
".git/objects/79/88e8eee1b748ce4c036ceeea728ef45c853966": "d8f78e41c0002d69775f420daef7d435",
".git/objects/4a/aaaad6833e4a16bd88f2381f4e7538ab5caa4c": "d828a06ccf224ac98e1d3a962f95cf54",
".git/objects/1d/692cfd2012bc87844b35e599f82e50d32904fb": "459d5ef6ef90ee7e3f17c18965ee4871",
".git/objects/14/af41ee10eea579fe974e2879ff14399683fb2b": "4b100c77058c51ade136f0893c21ebad",
".git/objects/89/fb1982d42f37618f4179039594e167c196f1ae": "a758849c6281ab85cbaddb6b84a5cf00",
".git/objects/89/e9601e1869435cf3137bb0ea2f84451cb1f9b7": "87991e79817eb1d7ff3bababfd6c1940",
".git/objects/ba/754152eb6f9ac6243f12549500cfc5b8098676": "59afdfc38ac0ef723e4cb6c4d820d230",
".git/objects/93/c70b52cf4969bd035fb40b381d4ff12e129fab": "71ff964a6ceedbf46337e345d5360371",
".git/objects/93/1282d8ce068401f6dd9464b1695aaa30bd389b": "5de7a39fb0a8f240b38182a2333f4215",
".git/objects/93/f19f0baa7cd847b8dd4db8b9adc7a0dc499eac": "2abd6d821017ec403b2c51812b43f78a",
".git/objects/c8/0b5e6e7af51b6d4bfe8de9b62d43a93230a078": "cc5dcb6ffe18f62d590bc6b525ac9185",
".git/objects/12/5358192cd4a88679ffafc399f878b96f8d577e": "e1a9ab8b09bddb231590de4c260eddd0",
".git/objects/4e/11d1daa5d13ca392bed6c09db18d8de0dd72b7": "58db89592693ae20eb896f4c591e0220",
".git/objects/78/006d699b288445c735adaf73180c86076c902d": "ce742c8f94c1c974f9397c940fb18d39",
".git/objects/b3/3f5e0819d99133e075b5c68ae90d7eeeedf021": "9cbda40abcd562a7d989b05d1252477f",
".git/objects/fb/e4f4878aaf68c98af6824c3b394bda775e31d6": "5d7c2d70233c4d6088ed5f99b0f28df4",
".git/objects/7c/18344e003fd0c3ca5bc6000bb503e7ab20afe2": "b3150c454fb38b74fe7784d1ac78792b",
".git/objects/7c/bbb38b39b2a4e3181c94acb28bdf486c0c79fb": "9c9f93d3137451cbbb1b112dd7ab190f",
".git/objects/ea/626ebff26c60e65015a25c9e1291b9237bea6d": "7f9da32c7e9cac2518c149d00880cea2",
".git/objects/ad/aae0534262a0442040c2132d64f02e9210a97a": "69f23985925a47def723270d19f80726",
".git/objects/7a/6bfa35fb8b388734e3e2982fcfe809edf4dc4b": "6e931e26aa0edda3e332f24192ca0405",
".git/objects/10/18c74f2c283baf105ac840e6c6b7576feb04f4": "0a2292c10dd5256da04fd1462e0a8f18",
".git/objects/82/8cd09f2ead05074ccfc66a1c0586f4794d454d": "5550903407b77455f2c6ddc3a185ac5a",
".git/objects/9a/bf02d2785f258f0cb9741faf83f30afb25c86f": "7a4e33c41c34cd852b31ecd72b3061b8",
".git/objects/fc/426f2a86d7c47927189ac0f57b8913eb84063c": "386c09c4af98de8136e27ba1ceb4bf46",
".git/objects/6d/023f564ea31586120bee76c779a5560c65912f": "1f571f541ac4ed1b9993218adac4240f",
".git/objects/08/e580c83b439a7a8bf2f8e276f676b50396e1fb": "d6c6e51c969ed027f33adaf5dbad0069",
".git/objects/6e/5b45d723d662d203a65b805d52580ddf11c6bb": "ab54e4d573b4ec40519803e364ce6b3e",
".git/objects/41/73edf4f37bc6371370031745067288f54b7499": "78a492fbe70a341fb8e892f0ba6fd14e",
".git/objects/41/f1d0f5ecfb3244c3bb8c83b430dd2bbcfaa1a8": "0b7752da0db0dda7e241bb5d9e18a949",
".git/objects/07/b97d49eebd3cda360df7a0108e0656c8eb6cad": "c8bee987e3738ede7ee726c49fdf66ef",
".git/COMMIT_EDITMSG": "edd19f53ea743b1e65ba777e2a14ddec",
".git/logs/HEAD": "f32359b95c2a3abdc29a301c11c33221",
".git/logs/refs/heads/gh-pages": "20c37f1b3306306528b05c1d9a48a269",
".git/logs/refs/remotes/origin/gh-pages": "0d2633eb7433567e71145e944ec4f30f",
".git/config": "ad493565678218b5ef4436c30152aec1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "5177b0f5232be6d92922d89fc68db20a",
"404.html": "9905440c15430646bd4d3923735bbfd7"};
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
