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
"flutter_bootstrap.js": "e35d3aa3df5991788a53557ea739d0e3",
"index.html": "ecc43efceded8f24e105a209b7299e4f",
"/": "ecc43efceded8f24e105a209b7299e4f",
"main.dart.js": "e5ee42b377089aa9cad22d11a336a4f1",
"version.json": "899bd5ce14dd7a11fe6f5cde654341cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "bbda0652d81dedd78519e48f2da311a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "9cca748a22e8f6dd848f036adfc21973",
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
".git/refs/heads/gh-pages": "c6055376bae2e931cad8efd89cba3a86",
".git/refs/remotes/origin/gh-pages": "c6055376bae2e931cad8efd89cba3a86",
".git/objects/a4/66249979ac71a0a085cd338ef9f767c816ff61": "ec3fb2f739c8e82893c33b0799591ab4",
".git/objects/a4/fa06c44add8be49d041ac4614da88d13adf9e0": "b561954867c28e54f71882d16039991a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/03/4943cabc755912cccda789d7127dd584cb5162": "a64eb16ad71548728633e07b4573c175",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "faab227f1a05ff78769b7b0e892e8c67",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "2609fc8dd28ceabd6807a51679e580d7",
".git/objects/ca/6a1767bccd47ccde0b0c704a600e3cb80933e5": "5a117f6f4b3d0ce12f517bd6f26896ce",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/57/5978d01f5e89cfff31ea6d49b26e1d3cf8d8d6": "7e43c081059026eb0b8defb94683c9f7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/d9/e535f53a469775643976bd54f81a05d3c528d9": "c7388ccf27bf17029a5ee5e6efcc10f4",
".git/objects/d9/7db2cf2b64f88bd3a0824e58a1c9f806d2276a": "84f15b51ac2db4fa1c110cc675cf9b7f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/5f/1363758b014a570734cdc30a951ef48a70e840": "6fad31299466d8eafaa7779d6fe3fd03",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/a8/ae25b88d02b152c983da5be505a6148c5f608f": "9b3c501593f427ebf6f4817adba62742",
".git/objects/f6/c1e6c7779ab63082e9e3715e5490f48a9800be": "50708e24c982734ccd18589b9ed1194a",
".git/objects/f6/3bfe733bae4090ce3913e9cc8af1b0ac295c89": "b3cbeff7118d7c7533b7e6c7d3ca2254",
".git/objects/f6/b0271948b787aed78f4a4945c100e27870dbf0": "4c0e55da9c453c3bdbef3a968d639fed",
".git/objects/f6/4a1779371dd17c9300768951d4aa569e2f02a5": "811d51bd435d68074e47ff34eafafc2d",
".git/objects/5d/8fb67fa41557cb0daf7ea61684795acfb130ff": "a4c04109639de5cf85bf00fcd9975fd4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/88/57133afbf626ab88e7d5b7226886c3100986de": "c2cf4985abdd8a3ef28f17fccc8719d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/d6/2760ff67e274cc1512c58ad56e8dd2ccdcac44": "380fd7cefa665c04e7130a31a702c253",
".git/objects/02/5b6bd04537b049b1ec66041cb25b3cc79bd866": "7667c2cda47cdcd33ecbf740c6929b5a",
".git/objects/15/96300ff0791e041207ee0ff5d5718c88beed4f": "0a2c5ca8d8a78625cb9802a32e319740",
".git/objects/38/01d143fb06d45bda642a48c00df7b4b061b3a5": "52551fd05263dd09fbfdd7d9f7efdc17",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/84c9805c67e2e7d5994300d140e015f9332fb9": "8b83fd4257eea4c6ec99595c3e3ddfbf",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/f5/da0456d14125508a5ac3f97970482caa179594": "95e12a875d91c230c3c2d5e6860a2214",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b1/9f061b03a7c1ebd491995d16d7b5afa9ac7a58": "5d87fe44bab147355b023f45a6571714",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/53/d538bb930bf23d6049e495bb53351d9a65ee75": "8fd6b3f4b5b26e90bfd0c2ed9128bb74",
".git/objects/22/e2a18061891b96e3648e1a147543274d353bb7": "3c01f6ac77f132dcdb835e13ba0eae23",
".git/objects/22/7351dea07b8bcf2bb5273ccc95c5b46c2580e3": "04c81fb3bbfab95ef79e3dbe37e4d142",
".git/objects/98/313ad73254900c118530f149cd532159b229a6": "3964bf048398062cb6e280031962713d",
".git/objects/71/86dcacd46f6261574f34085a5f262b913c7c7a": "79f572152098fb412c8502b8109b12b5",
".git/objects/f4/f8af9e59aa12f2ea76e9ca38fc953375db8fde": "9590f831fcf4f4737f8702445c522ac2",
".git/objects/f4/c181ca45e28a5ef2740f50d61efae12aa756cc": "ecb6fc013a2dcbd54ac1ff92802988a6",
".git/objects/c9/760d5b8d865ef50f624410bff2d1c3b75ffc39": "dd11ecbe2647c40146a1759cb79d6c11",
".git/objects/39/8aa99fdc5a3996027f4970beabcedbc31bd261": "98c5ff4576f178adfb0d60a7b521ea8b",
".git/objects/bc/4162ce0f0f9f75a6a1e0603bc4a014d8de0609": "ce433dfc790469a4763760da4790a44f",
".git/objects/7b/acd8ab699cb50cab3d6712a70772aa0036ef94": "021e0e4a99a7a09eb68b3247fae5d68a",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/cb/f7251288dc85f30c32e6c93c568f9c57201399": "02db39029190da35addc9ca24f401ebf",
".git/objects/94/9ce054ccb210cb78df3e164341e4a27bb1dd96": "13082af5bfdfebe19c7804066ee33812",
".git/objects/94/7797c71560f5f27b07b8e16b3a508a48fb70a3": "df2b14cdbb425c1f4db31690323c0f7c",
".git/objects/94/b3c7629d464ff04eb417b66d5aef373d06b0d2": "e19379fa9891735b1ec51ec701c10714",
".git/objects/0b/c07282cbb8eec5304bcf1b64bea92370729ea0": "51c75d74bed1eb66fb17bea0fe27e67d",
".git/objects/d8/82a3d9d44d1f649f2bd76dff0ee3d25b193514": "a08bbc269a717cd668348df6a0f2fb47",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/ff/2d32a3127f7877f6b32393ff34b640bec50732": "fd08e279d27a1d75b8867a7b5ba27368",
".git/objects/1f/481043a6a5754d86590581c737dffd71832deb": "19c6cedae8b567173bce7a115521d42f",
".git/objects/7d/9029b7b04510d4eace42e597ac181f23d35d67": "5224299036c3a09ae59b743b28ea9e04",
".git/objects/c5/6525f946101c25104a1d517e91e4ddc731c29e": "89a8ac87343c6f98c22f9da53c4b1d59",
".git/objects/db/e8ababca4668e57eb84996bf8933d3d22c11ef": "210029548ad28f308fc6afdd76977e88",
".git/objects/db/ad1ba7c0e9fa923414c4be2f684f7769bfe3fb": "3292f4ba972edb2206f71e34e49eb6ba",
".git/objects/dc/c7a5536789a8fe6a54e5fdfc613043d1ab7eaf": "1a9f0612dbf8a5cc18bf6e8c38cb8136",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "d2773f184380e8d62c9deb6e20abf44e",
".git/objects/bb/d158b2a680c2156f50c35e44636f7d155a1f78": "bdd3a56257bb0b64a90074eb0417838e",
".git/objects/bb/4527e34055a2d85eb34c922ad422d060fb1b04": "effe9b8f0059806576c0f9db9bfc2f69",
".git/objects/18/f0ff8fb995da5d48e49376ba780e5426a9a857": "c2b7a6105e6fc9a549efa8a82d21204a",
".git/objects/e0/6fa792c83a84ca5371361506edf8f481e8f2b9": "5a61a29c604895c235727c1ed7dd12ef",
".git/objects/37/f83a9e72a0b9df523197ad840694942b819a98": "6f433e04da70f14dcaf43f67d07f8906",
".git/objects/00/c03ebb172505c803bb2573a44ea917a81dd0ed": "5ee0a286789367705256177e544ea1bf",
".git/objects/60/cd195872c6a7a6b98d873750f3afe4475df796": "48fd94d8e7379ce54aa4c51a68e8acb1",
".git/objects/21/174d5c5c7b622204f45a2f695135047977e71d": "7d7ae2eca626146b271190972345002f",
".git/objects/21/869cd5cbecb5522ab47b134ddf6590bac7ffd3": "ab90f621958e8bb982f6bab66ae054f6",
".git/objects/7f/879509f3ccd82417ad8fda6f408eccfaf2aa36": "8d73ea2e1fe07b01453e4bcfe863dc3b",
".git/objects/7f/f5c6bed60ff50e3c9d48f5955419fcdb76e2c6": "077bfcb1973f80bdd46480e225bcd32f",
".git/objects/4b/67411488ae73ac4c867dac424547584e997ab6": "b7ad21496ef0e85a74a1c4e121e36b03",
".git/objects/4b/263f83a1041a11f5123fe6637f9f378a913520": "0518256a64d6f3d61f8221a90808b603",
".git/objects/3c/1f0a8e39f760b0c91b031cb07e8e0b7c5567a2": "0fa27a9ff1ae8bc90c90e2202b89ee57",
".git/objects/2d/c725f187766df962a8a972b72a8ffc8097edea": "25ddd09ba22ef3abfc0a2252ee94ad5e",
".git/objects/2d/f879ed379637bb6882884f2bf51cfc1d9bd590": "6baa4ff2213282e60a7de5df697da00d",
".git/objects/2d/8455a6e248fa3523c3862f91cffe36f97ca29a": "6af2fd25591d090e8205bd3394dbce22",
".git/objects/7e/a8f577a7ecc425d8b728ee8747bb0f147f57a1": "b535e91e7e0b1e75da4544d11cf044ea",
".git/objects/65/1e3ea8c928ef8d41a37ab3755624be7ed6c809": "b9a2d788c31d426228a2e256fb190a1d",
".git/objects/44/582b110e550d5556530110a9b372542e5bd71f": "e11e8c679467c720ca8c719511c35823",
".git/objects/1b/ce74484c1efb6bc00c07a816eaa369534572ff": "996e1b0b68160109ec953b02362ec6cc",
".git/objects/49/af7c17a9a28853fa3cd72069f567f8ef5b4b3c": "850bcf0efc3dda5ce22f6c6c277e2fbe",
".git/objects/84/35db0d9986c5d6a791622d789e93ae248e0bcd": "6321c2df5b47764d638d714f565b5ae4",
".git/objects/f1/3e50e8034b14bba1711b3bc5423046862ee66f": "ba159f66105c8817d81259443d0731e1",
".git/objects/ed/bc86b5ffaa1b99bacfe2674a98123fe858a004": "06f44ec1aa2ba02f60a1db1975933b1c",
".git/objects/ed/a75185176420113f7ef472c8f57e5375341fc7": "02f31f32410b107eb00f13768daf8581",
".git/objects/55/a39d4ffab70b0a2a99446f7915438d1c2451b0": "876f032510b6c81ca0fbc84452d6f935",
".git/objects/54/9ec4ad4406b6ed93eadd62d6772d0f9061efcb": "bb3823d83dbae1602469836ddbd1b93e",
".git/objects/af/28a976fe4e592b18c40bc8e8d223f44c31e07e": "05e3d9db9f34499c07e02f0e79d4dea7",
".git/objects/04/2bb2a4fbefb777666db5202552b53cabaad2e8": "41cb16be57f261bf2c3250b55f97af69",
".git/objects/8e/8683c5cd19d47cdf6fcd6803613733511a8686": "ed8a037a66c17099b0cf3fb7496076e4",
".git/objects/2c/bf42f0c9c2beb253f07135f6cf1709174d83bf": "15d347973c6124395415c7a2f9b61b9a",
".git/objects/2c/7a931bfbfc272879cb68c9f793af65e4adaa16": "55af37ff90d67336a7faf3af2697414d",
".git/objects/29/12e533f1be4d410ac398f74df65a0a245cac67": "00eb6fdcafce8f79b05ff04eba4a5eb3",
".git/objects/19/f4d60d5f1a9ee9fc08a22761ab77717b01e18d": "c0a4bdc7caf53341df1ba1a6047ee5d3",
".git/objects/fd/68c59ef0228760fa5f3cf2f8191bc15968dc6d": "48629e34f57c1300babad98262255687",
".git/objects/df/b444ba886eb86be975abbbcf629c00c6aafaca": "55fa0f04a2b5c9d1adae12b8867db825",
".git/objects/3d/0eba34c7a0c141bc93015138023b5d0f2fc151": "e611b0e289b56f0698397fd4a0f2b3da",
".git/objects/5a/9400c663aebebf692f85141a34a1dfce038e57": "6bc47a5d1b227ac219f2180eec0e09b4",
".git/objects/a3/4454fd2fb48c581989297f38b9c9ca0167383e": "9b9ddedb7bc89fb5966e42826322313c",
".git/objects/d2/6fe66b5b9c6f04972b8f82ec91e51f6072065c": "af7bfc09d05df8aeaedca0aa0e6e32cd",
".git/objects/9b/3f632ba19c9e471d3fa66e9f560802ed2d87af": "2303b9e0c457e4ddb31624d0df3fd0ff",
".git/objects/74/143387eab5cb0872654490311ddae0405c6aa9": "7a281fc24cf47937d07a5d51543c07a0",
".git/objects/01/8b3525dede4acc1ffefe5b5906cd9da0ff54aa": "ee922b6a5be31f671142034a861a1450",
".git/objects/75/1bf346bb6ce939ec1b326ce11fc86ac9f1b1c1": "a8f31ce87dd3ae8694c81bc487e58f3b",
".git/objects/48/fe234abffb43cbe047488e3444c4ca156177c0": "f8eaf662e125880b9c618a469815dbc2",
".git/objects/62/841c9e1cbe0badc743dc4a2315dc68ada502d3": "f1835bde0f78e665bd32a05124828055",
".git/objects/f0/0e1bb4b4270982080f07d8dff241b748a59e2a": "83a5c8e6408f085442440da94f3a8cf8",
".git/objects/25/42adf59271d22f18b5a7fcfd08b18dfd58a8d3": "95465740321a43e07bb8f29d2ad7436a",
".git/objects/6a/dcac9c2b6dd56c0f60b8d57824c151b1e11186": "0c3867c58b8da11d8b9a60d8ed614958",
".git/objects/c6/d71b62fa5637a445dc891b2e4f0e0755c48231": "84ca7d95c079e070ddc5971a1cdc3019",
".git/objects/96/3ee1918119ef19126c014f7a2739ec09f87c2f": "eb2aadd34491477368db8987ef81c0d7",
".git/objects/1a/1c142d8500838d3a63381574bbf398a6c55a76": "337fc9f5b3f9140bbe6413a270933ba4",
".git/objects/8d/0717320931e24a2aaeb8f03505b09dbe50eace": "45a3a086dc14f9461b085b5417c3ec8f",
".git/objects/d1/3b1b8e7690b0d41a24ef2ec4803545d42ec2fa": "2e1d9163dd8ccc7145a600086d9b66b4",
".git/objects/1c/b955b1d8dbdd7daa33a358eeb765cf79e81d70": "50cd1f14cc008bde3ec8d63b49152ef4",
".git/objects/cd/d5cae5ed03d3e8f6e96f95b9c7bfcbe39f7c10": "ef3de700a96a58a3c5de692de9151cce",
".git/COMMIT_EDITMSG": "edd19f53ea743b1e65ba777e2a14ddec",
".git/logs/HEAD": "7a031669a63e61053d308720f3243049",
".git/logs/refs/heads/gh-pages": "cfc0870d52af1515e321f1899af269b8",
".git/logs/refs/remotes/origin/gh-pages": "b19ebf9b82dbd5b7abfbc53ae5ac0103",
".git/config": "ad493565678218b5ef4436c30152aec1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "399a32f81529634b6a21126d1ea6eeae",
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
