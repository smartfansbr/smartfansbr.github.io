'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "f3c2093831013a3284b87fe752107dee",
"index.html": "ccc4b98cab1b6d4aef6e5f67d28d307d",
"/": "ccc4b98cab1b6d4aef6e5f67d28d307d",
"manifest.json": "4d2f65a5736124df1c6a31249097a7a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "8859668d4b7e8f5683a9bab565131a60",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/shaders/ink_sparkle.frag": "1342709bb1a8d53f3ce83b99051bd5c6",
"assets/assets/fonts/octin-stencil-rg.otf": "90a2f0c7b1ffffd95ef5b80966e7ad05",
"assets/assets/images/imagem.png": "be11e2b296e4a6bcfc2c745a011b474d",
"assets/assets/images/avatar_transp3.png": "ec61ff680fb6cf69656c3350e033e748",
"assets/assets/images/ic_avancar.png": "d5c76ef0f91a1fe6e9204924baf19a5d",
"assets/assets/images/cabecalhoMobileTela3.png": "ed0ac15e17806ce3ff9b2df52e15c36c",
"assets/assets/images/places/piscina.png": "9e4e0be706b071774047fd71a848f66d",
"assets/assets/images/places/judo.png": "5fb1887a2f061da303f93762e8586488",
"assets/assets/images/places/patrimonio.png": "e92661ae3b82a1052c1be462f89ba833",
"assets/assets/images/places/campo.png": "d3748a40a948fc20c2dcfcce275fa7e3",
"assets/assets/images/places/parquinho.png": "29c2f1a99e02310c4932e37b5ee80e72",
"assets/assets/images/places/ninho.png": "e1e964f59f9f7a5653c77ef32504e99c",
"assets/assets/images/places/remo.png": "5a1cf11061416c7db562844c81dfd3cb",
"assets/assets/images/places/beachtenis.png": "9e5b2560069a9590d4779f6f231e2f22",
"assets/assets/images/places/museu.png": "f24579d52895fc820b2eff5878d8c32f",
"assets/assets/images/places/maracana.png": "02db8b7109d5e7cc1fce4178400bd502",
"assets/assets/images/places/ctbase.png": "07dff47df27ff8fe1c7bc3a2d817cad3",
"assets/assets/images/places/capela.png": "3a351b7991d5989555b3e01c2636a700",
"assets/assets/images/places/gavea.png": "0f991a96292d846f18812cd0489cd881",
"assets/assets/images/places/tenis.png": "ce16fbb5c70c379aed2d7e28177896eb",
"assets/assets/images/places/basquete.png": "da527c554e720111ea5078d53ef211d2",
"assets/assets/images/places/ginastica.png": "613cd173e89d34514b0d8983bc34947c",
"assets/assets/images/avatar2.png": "b5310eef41a2d96a60e200b002067df8",
"assets/assets/images/avatar9.png": "db9cf5cd494e08fa556d56b0fb9e62b9",
"assets/assets/images/ic_minus.png": "720d47a290dd657af4af6cdf1953afa1",
"assets/assets/images/piscina.png": "9e4e0be706b071774047fd71a848f66d",
"assets/assets/images/judo.png": "5fb1887a2f061da303f93762e8586488",
"assets/assets/images/patrimonio.png": "e92661ae3b82a1052c1be462f89ba833",
"assets/assets/images/foto_maracana.png": "508c1d495efe8554febf4e21d4e118c9",
"assets/assets/images/avatar3.png": "ada5db6dd7e526b31142e386acd22547",
"assets/assets/images/imagem3.png": "5e2e253bed7bc426defd5ee50106429e",
"assets/assets/images/avatar/avatar2.png": "b5310eef41a2d96a60e200b002067df8",
"assets/assets/images/avatar/avatar9.png": "db9cf5cd494e08fa556d56b0fb9e62b9",
"assets/assets/images/avatar/avatar3.png": "ada5db6dd7e526b31142e386acd22547",
"assets/assets/images/avatar/player_selection_desktop.dart": "638f3914e681d5f21959472d8ea65899",
"assets/assets/images/avatar/avatar6.png": "4c7bcb6435c8dad35468fb22cf415e2e",
"assets/assets/images/avatar/avatar5.png": "950376de4a11b3dfd66ad47aafc363cd",
"assets/assets/images/avatar/avatar7.png": "bd17e14622df00714a37a8488fb38a7a",
"assets/assets/images/avatar/avatar8.png": "64685bd9404ca2f5fc77115ba1e7680a",
"assets/assets/images/avatar/avatar1.png": "12d598856aaa91594c34326f6e0ddb52",
"assets/assets/images/avatar/avatar4.png": "28922774cba380f7d4cf1125ee302740",
"assets/assets/images/rodape.png": "623825586ce8b5f3b2b7e6ec92b7d6ec",
"assets/assets/images/ic_avancar_mobile.png": "f44bd30af5e5ef35bc00040075890dc4",
"assets/assets/images/campo.png": "d3748a40a948fc20c2dcfcce275fa7e3",
"assets/assets/images/parquinho.png": "29c2f1a99e02310c4932e37b5ee80e72",
"assets/assets/images/alameda.png": "98fec8025da991c4b62b68dc1b71e190",
"assets/assets/images/backgroundTela3.png": "6099f97bd39b3c60bf48fe3f3bc28b05",
"assets/assets/images/pause_button.png": "a8dfc4bacfa989c113bb68e5bc95d21a",
"assets/assets/images/ic_voltar.png": "486ce5b272545d3a9e49054679483d3f",
"assets/assets/images/foto_gavea.png": "b00c3e87b1364776f3d03e8060bf19d7",
"assets/assets/images/backgroundMobile.png": "df6b6b801a1fb27a9c5288f901eaf68b",
"assets/assets/images/avatar6.png": "4c7bcb6435c8dad35468fb22cf415e2e",
"assets/assets/images/avatar_transp4.png": "7994621c677f640603e4d9b07f1f32ad",
"assets/assets/images/ic_plus.png": "299a7018ce142eec84806e83194c2f6c",
"assets/assets/images/academia.png": "067d91c6f08a58b292264aa005c5c7fa",
"assets/assets/images/ninho.png": "e1e964f59f9f7a5653c77ef32504e99c",
"assets/assets/images/avatar_transp5.png": "ea19f966821395349b6271216fc38cb1",
"assets/assets/images/remo.png": "5a1cf11061416c7db562844c81dfd3cb",
"assets/assets/images/avatar.png": "9b17e328958b22287ce3cacd3f845b48",
"assets/assets/images/avatar_transp2.png": "fb51cfcdff77cc3373d902422aca88e5",
"assets/assets/images/background.png": "571e8416f211bc135aeb7cb6299dbfcc",
"assets/assets/images/banners/sport2.png": "35a5a1186dd792c581775fddce40ee62",
"assets/assets/images/banners/ambev1mobile.png": "ba119ab698c5091cd8c232a1c02b826c",
"assets/assets/images/banners/epson1.png": "ffa4c4d6c461973397998a45dbe5c5c3",
"assets/assets/images/banners/brb1.png": "f3374b7109168d45722435cf3fa12e72",
"assets/assets/images/banners/estacio5.png": "fb58db8961e2579a36d9c542c552ae6c",
"assets/assets/images/banners/moss1.png": "9e2c677e4d15f11869496ee599d30fe1",
"assets/assets/images/banners/estacio3.png": "a4f336355a0496d7ee9b841aac450c3f",
"assets/assets/images/banners/trem4.png": "0ed947856d04b4f4a5175a65855e970a",
"assets/assets/images/banners/epson3.png": "d8fd2abd96dfac86cd21a4988fb53c5a",
"assets/assets/images/banners/ambev3.png": "60da7758391c8939f9e0ccd872c76dfa",
"assets/assets/images/banners/havan1.png": "583c4c526b2c48eb782907bef5424afe",
"assets/assets/images/banners/estacio1.png": "5dd6a320dfd8908938320b902f3eb009",
"assets/assets/images/banners/ambev4.png": "a8817b1e94da74cdab482e6a9af7c772",
"assets/assets/images/banners/estacio6.png": "41e7ed9315a47ab1e4dc64eb037c85e0",
"assets/assets/images/banners/havan2.png": "b2772ab3d8c001180be1cdf3f7e285fe",
"assets/assets/images/banners/trem5.png": "1c53e09a4538b66680f539dc4dbf66f1",
"assets/assets/images/banners/ambev5.png": "530a33e2a55772c02b4e097cdb1f2919",
"assets/assets/images/banners/trem2mobile.png": "a557ee83c708ab7aa3d4e964e4d6a140",
"assets/assets/images/banners/sport1.png": "1a07d32b997aa5f1b94b31613dbd6b22",
"assets/assets/images/banners/tim2.png": "4fe9cdc346267e551ffb2a6c8d652d6c",
"assets/assets/images/banners/estacio1mobile.png": "645879df732234ccb2fe91be5c3ca21f",
"assets/assets/images/banners/ambev6.png": "73fcebc889389842c4d2743cb2cb699c",
"assets/assets/images/banners/epson2mobile.png": "0268ebb87e90ec2a43bf8299efdbbced",
"assets/assets/images/banners/estacio4.png": "70edbd2a25f45ea27f103d6c1e14a967",
"assets/assets/images/banners/brb2.png": "9c8277d8a5cf125ad9b09009255bdc6d",
"assets/assets/images/banners/trem3.png": "d3ecbc6e37b0d530cdc90ce278b22e9d",
"assets/assets/images/banners/tim1.png": "895aa6e841feb06558afce6588560070",
"assets/assets/images/banners/ambev1.png": "ef9af90958528d8f8ea7ba409ee26664",
"assets/assets/images/banners/ambev2.png": "b103a0e32b50d5edf4fe4f71dfbdca6a",
"assets/assets/images/banners/mercado-livre1.png": "1b0c6d29e81136626a198e697b8eee22",
"assets/assets/images/banners/epson5.png": "718b053af8d6358e715d544036bd4143",
"assets/assets/images/banners/trem2.png": "a4ebdfc1a7bef23395f42f91f33e1701",
"assets/assets/images/banners/total1.png": "88910b62c44eddbba701d58ccbdeb053",
"assets/assets/images/banners/trem1.png": "9d93aa8ba0efb5994d79fa2379de1705",
"assets/assets/images/banners/trem1mobile.png": "301fe653cb1a7bfde8f276fced8536ba",
"assets/assets/images/banners/ambev2mobile.png": "1e5e5516901a50422659d5b6f6f2caeb",
"assets/assets/images/banners/epson1mobile.png": "161204d76b64369685963e832526c2e7",
"assets/assets/images/banners/estacio2mobile.png": "e047629c1bf6996cb559f9bf4f8b2d67",
"assets/assets/images/banners/trem6.png": "bda4e57aef9d3e70daa835f5cd397ba0",
"assets/assets/images/banners/estacio2.png": "dea1c42abe895e74c893c6cbc7910843",
"assets/assets/images/banners/epson2.png": "c226582f21a5ea652c5f1881acdebcf1",
"assets/assets/images/banners/mercado-livre2.png": "0700c56e381b22bac00b3b7fbee25d24",
"assets/assets/images/banners/epson6.png": "096bf9da2db6f9376dc2648cd8310c9b",
"assets/assets/images/banners/moss2.png": "aa5159131b548a0e5b48a0886d307189",
"assets/assets/images/banners/total2.png": "77e8d5a6e27632ea4434081414f250cb",
"assets/assets/images/banners/epson4.png": "d312963b15d5fe7a81d231d022e375b5",
"assets/assets/images/beachtenis.png": "9e5b2560069a9590d4779f6f231e2f22",
"assets/assets/images/maraca1.jpg": "0a5dc6a16ecb7b839d7af08960064c18",
"assets/assets/images/ic_fechar.png": "11167d4ccc94879fafb4facdc0473669",
"assets/assets/images/avatar_transp9.png": "a2afa7e74457336147d0d45790a296de",
"assets/assets/images/cabecalhoMobileTela2.png": "472492275d579af390b1cb367dcb9525",
"assets/assets/images/avatar5.png": "950376de4a11b3dfd66ad47aafc363cd",
"assets/assets/images/museu.png": "f24579d52895fc820b2eff5878d8c32f",
"assets/assets/images/ic_setas.png": "ca67eb82959d479c3b29fc3c7b72932e",
"assets/assets/images/maracana.png": "02db8b7109d5e7cc1fce4178400bd502",
"assets/assets/images/foto_ninho.png": "af5a46fa52fd66e9c20256faa4a679da",
"assets/assets/images/avatar_transp8.png": "c00cd5bb29d04e497361c36ea41552e2",
"assets/assets/images/avatar7.png": "bd17e14622df00714a37a8488fb38a7a",
"assets/assets/images/play_button.png": "8394f2eb913f2d123070dae3b4b7eafb",
"assets/assets/images/avatar_transp1.png": "93bd6ccdb9e6715f6070e52fe39be0f3",
"assets/assets/images/avatar8.png": "64685bd9404ca2f5fc77115ba1e7680a",
"assets/assets/images/ctbase.png": "07dff47df27ff8fe1c7bc3a2d817cad3",
"assets/assets/images/capela.png": "3a351b7991d5989555b3e01c2636a700",
"assets/assets/images/avatar_transp6.png": "e08e3db433935b4d6c308c93f9d551b3",
"assets/assets/images/gavea.png": "0f991a96292d846f18812cd0489cd881",
"assets/assets/images/tenis.png": "ce16fbb5c70c379aed2d7e28177896eb",
"assets/assets/images/avatar1.png": "12d598856aaa91594c34326f6e0ddb52",
"assets/assets/images/museu1.jpg": "228ce37693d37c65e8a24fea53d333e7",
"assets/assets/images/basquete.png": "da527c554e720111ea5078d53ef211d2",
"assets/assets/images/ic_expand.png": "acf21214a2a5387861c47b712331a502",
"assets/assets/images/imagem2.png": "578917c6d9f0629a9da9ffee9c7b2385",
"assets/assets/images/cabecalhoMobile.png": "b214753d35c2aae4f0923a6441d26d53",
"assets/assets/images/ginastica.png": "613cd173e89d34514b0d8983bc34947c",
"assets/assets/images/foto_museu.png": "ee08c6fc54558ac0be238dcd6fcd1bf6",
"assets/assets/images/ninho1.jpeg": "da5c8488072148e313813fa00dd3d727",
"assets/assets/images/player/player7.png": "67673044719a4a0af02ba6ee5f9ebc4c",
"assets/assets/images/player/player8.png": "c00cd5bb29d04e497361c36ea41552e2",
"assets/assets/images/player/player5.png": "ea19f966821395349b6271216fc38cb1",
"assets/assets/images/player/player6.png": "e08e3db433935b4d6c308c93f9d551b3",
"assets/assets/images/player/player2.png": "fb51cfcdff77cc3373d902422aca88e5",
"assets/assets/images/player/player9.png": "a2afa7e74457336147d0d45790a296de",
"assets/assets/images/player/player4.png": "7994621c677f640603e4d9b07f1f32ad",
"assets/assets/images/player/player3.png": "ec61ff680fb6cf69656c3350e033e748",
"assets/assets/images/player/player1.png": "93bd6ccdb9e6715f6070e52fe39be0f3",
"assets/assets/images/avatar_transp7.png": "67673044719a4a0af02ba6ee5f9ebc4c",
"assets/assets/images/avatar4.png": "28922774cba380f7d4cf1125ee302740",
"assets/NOTICES": "ded9240623ce6cc0b0baafc4a5665398",
"assets/AssetManifest.json": "57f21ed7bacb88b94ae7af49c05659d8",
"assets/jsonList/player.json": "3a2f4a35fb257d51800a7b7c6a2e90cc",
"assets/jsonList/map.json": "99056c86c0a1aeb397b4fff7c7351599",
"main.dart.js": "0f4856b6f0a41f42f66ccc356fb1d969",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
