"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/MusicDistro-React/index.html","a7046602f5eeed94330798503de7ccd4"],["/MusicDistro-React/static/css/main.99a124b1.css","d705d158bebe93c0739bc56f7f8dbee3"],["/MusicDistro-React/static/js/main.227581e7.js","8bd51d17f368419fb545c97fe1c22f48"],["/MusicDistro-React/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/MusicDistro-React/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/MusicDistro-React/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/MusicDistro-React/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/MusicDistro-React/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/MusicDistro-React/static/media/mountain.35f95a6c.jpg","35f95a6cc20a9b5fb94a58aed7012394"],["/MusicDistro-React/static/media/open-sans-latin-300.10dbc03f.woff2","10dbc03f6171f566d4eb80643014ccbd"],["/MusicDistro-React/static/media/open-sans-latin-300.27ef0b06.svg","27ef0b062b2e221df16f3bbd97c2dca8"],["/MusicDistro-React/static/media/open-sans-latin-300.3c60d17b.eot","3c60d17baaa7a839101391e6543fafe8"],["/MusicDistro-React/static/media/open-sans-latin-300.80093af4.woff","80093af4e43c616635651b60abcacffb"],["/MusicDistro-React/static/media/open-sans-latin-300italic.42e878d9.woff","42e878d9dfe3b56f24743e371fe5ddba"],["/MusicDistro-React/static/media/open-sans-latin-300italic.955e54c0.eot","955e54c0e4249aa15b964d20b5558c59"],["/MusicDistro-React/static/media/open-sans-latin-300italic.c0a3320c.svg","c0a3320c5a9694ba4e43a880e3de5cf2"],["/MusicDistro-React/static/media/open-sans-latin-300italic.cc71ca88.woff2","cc71ca88a161a2b233631961ea798bee"],["/MusicDistro-React/static/media/open-sans-latin-400.652e01f5.eot","652e01f567c6d3a0e5024af43473fb57"],["/MusicDistro-React/static/media/open-sans-latin-400.7aab4c13.svg","7aab4c13671282c90669eb6a10357e41"],["/MusicDistro-React/static/media/open-sans-latin-400.9bd6fd3f.woff2","9bd6fd3f39a88e34c897f388e6a2c50f"],["/MusicDistro-React/static/media/open-sans-latin-400.e447d08f.woff","e447d08f4d164f3995e7c5090a735332"],["/MusicDistro-React/static/media/open-sans-latin-400italic.26081a90.woff","26081a90cd53f71b68d1c4aa2ac41320"],["/MusicDistro-React/static/media/open-sans-latin-400italic.b83f1d01.eot","b83f1d011649d834c6991c9133258da5"],["/MusicDistro-React/static/media/open-sans-latin-400italic.f157745e.woff2","f157745ea9ed6f4fdc5fad1137562ad4"],["/MusicDistro-React/static/media/open-sans-latin-400italic.fd2ba750.svg","fd2ba7503f70aafcdcc45211a481684d"],["/MusicDistro-React/static/media/open-sans-latin-600.98983d27.woff2","98983d27f1a1a9dbad0e91c1e6965800"],["/MusicDistro-React/static/media/open-sans-latin-600.bc53f23f.woff","bc53f23f7d5dd1a5934ef4b68d7e675d"],["/MusicDistro-React/static/media/open-sans-latin-600.e16f375b.svg","e16f375be3c2a73b58255a02f6d3a9ce"],["/MusicDistro-React/static/media/open-sans-latin-600.ec8b5713.eot","ec8b5713a6abb2cd33ec74a17c19dcec"],["/MusicDistro-React/static/media/open-sans-latin-600italic.1e111aad.woff2","1e111aadc438b7b757345d77cc5ac491"],["/MusicDistro-React/static/media/open-sans-latin-600italic.3d9980f9.eot","3d9980f9fb50821ddcea16d94a2cb378"],["/MusicDistro-React/static/media/open-sans-latin-600italic.5eb91803.svg","5eb91803ad12758ca65445a23db09778"],["/MusicDistro-React/static/media/open-sans-latin-600italic.80dbc33f.woff","80dbc33fd1806f83a9d7cf8acf7971c4"],["/MusicDistro-React/static/media/open-sans-latin-700.0ac670c8.woff2","0ac670c8d196545bda6a70fb7432e929"],["/MusicDistro-React/static/media/open-sans-latin-700.15aa9eb5.woff","15aa9eb56fc3628ba270a5e1edf45284"],["/MusicDistro-React/static/media/open-sans-latin-700.2e00b263.svg","2e00b2635b51ba336b4b67a5d0bc03c7"],["/MusicDistro-React/static/media/open-sans-latin-700.b796ab1e.eot","b796ab1e0f5e3af743ea819ea7e3222e"],["/MusicDistro-React/static/media/open-sans-latin-700italic.80300f16.woff2","80300f16880e83016ced900461ef2097"],["/MusicDistro-React/static/media/open-sans-latin-700italic.8139fb48.eot","8139fb487665fa52cae62ba1cac8b840"],["/MusicDistro-React/static/media/open-sans-latin-700italic.a97a3aae.woff","a97a3aae80356b0497b7d24aa9bdfa27"],["/MusicDistro-React/static/media/open-sans-latin-700italic.f445cf25.svg","f445cf25b8e059587318c7ee9014154b"],["/MusicDistro-React/static/media/open-sans-latin-800.4557e5db.woff2","4557e5db902605ded6656dc311e9f506"],["/MusicDistro-React/static/media/open-sans-latin-800.9060b7b0.eot","9060b7b0d64a84f54e06ae0ed97387bb"],["/MusicDistro-React/static/media/open-sans-latin-800.926d4d12.svg","926d4d1229e98081302daa52332d62f6"],["/MusicDistro-React/static/media/open-sans-latin-800.ff13574d.woff","ff13574d6c313d2b2a39d578f517e100"],["/MusicDistro-React/static/media/open-sans-latin-800italic.30de4609.woff2","30de4609e89e6267bed91fc5a1a4963f"],["/MusicDistro-React/static/media/open-sans-latin-800italic.883ba118.eot","883ba1182db256c0bec8e4d46ff801f5"],["/MusicDistro-React/static/media/open-sans-latin-800italic.ca67d5b1.svg","ca67d5b14355e769f10fd8d0f652b821"],["/MusicDistro-React/static/media/open-sans-latin-800italic.df5a5a9e.woff","df5a5a9eaa798b8653448825dfff7f43"],["/MusicDistro-React/static/media/oswald-latin-200.56ca0d45.woff2","56ca0d451af26dacec3a156fe4f650ea"],["/MusicDistro-React/static/media/oswald-latin-200.b58fdebd.eot","b58fdebdb4cee8bc7895c99437899608"],["/MusicDistro-React/static/media/oswald-latin-200.bddbca11.svg","bddbca11ec8e8a7c8065ef606e3b9d0c"],["/MusicDistro-React/static/media/oswald-latin-200.ea2126ce.woff","ea2126ce7736ff3d937663ca62ba4179"],["/MusicDistro-React/static/media/oswald-latin-300.4e5545bf.svg","4e5545bf93b0501f8c4a898c46031465"],["/MusicDistro-React/static/media/oswald-latin-300.6f230579.woff","6f230579880d547bb70c7aab423daab4"],["/MusicDistro-React/static/media/oswald-latin-300.93d2c783.eot","93d2c783a419a3f539a3034c4c66d9ef"],["/MusicDistro-React/static/media/oswald-latin-300.d287e604.woff2","d287e604182b18f7adb55daa1643dc83"],["/MusicDistro-React/static/media/oswald-latin-400.3179ea14.svg","3179ea14e9b44b2e4f8539d24936165a"],["/MusicDistro-React/static/media/oswald-latin-400.716f52ee.eot","716f52ee6036a255a3b6caf0ae39ea51"],["/MusicDistro-React/static/media/oswald-latin-400.83f530ac.woff","83f530ac777dc45df0da937d841a6b0b"],["/MusicDistro-React/static/media/oswald-latin-400.adcef7da.woff2","adcef7da535697d48d012b2ffcaf5d02"],["/MusicDistro-React/static/media/oswald-latin-500.06c9398a.woff","06c9398afea7f4bdc38a65494d96f48f"],["/MusicDistro-React/static/media/oswald-latin-500.0b880fc1.eot","0b880fc1cb9df6a74ff00f7ae96e7b67"],["/MusicDistro-React/static/media/oswald-latin-500.85b04fdf.svg","85b04fdf343d3c35e57e376ce5a7a65b"],["/MusicDistro-React/static/media/oswald-latin-500.9d1c4c6c.woff2","9d1c4c6c8410464ec5d08f18f6c176cd"],["/MusicDistro-React/static/media/oswald-latin-600.12d8d7b6.eot","12d8d7b647eb6b07c436fcc6c3c523f5"],["/MusicDistro-React/static/media/oswald-latin-600.304aa861.svg","304aa86129e394d0665776b8385294e0"],["/MusicDistro-React/static/media/oswald-latin-600.5db2da87.woff","5db2da873ef90a29e33516002391c5f7"],["/MusicDistro-React/static/media/oswald-latin-600.dd11f991.woff2","dd11f9917919e2154687a9c32e94bbfd"],["/MusicDistro-React/static/media/oswald-latin-700.13c8036c.woff2","13c8036c84a6c66d61dd16aed19e1997"],["/MusicDistro-React/static/media/oswald-latin-700.464dd4f3.woff","464dd4f39937c6a139fd59b81bc221fb"],["/MusicDistro-React/static/media/oswald-latin-700.8c8a36e9.svg","8c8a36e946beb9a5f862747f8658aa67"],["/MusicDistro-React/static/media/oswald-latin-700.91ef23bd.eot","91ef23bd5efdd1df3df1a61f218799d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,t,c){var i=new URL(a);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),e=urlsToCacheKeys.has(t));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL("/MusicDistro-React/index.html",self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});