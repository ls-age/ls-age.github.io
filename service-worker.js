!function(){"use strict";const e=["client/chunk.202b6f46.js","client/chunk.22073a47.js","client/chunk.a55e5a4e.js","client/chunk.d3000334.js","client/chunk.e9d3c040.js","client/chunk.1e50370a.js","client/client.44e72ad1.js"].concat(["/service-worker-index.html","css/base.css","css/base.css.map","images/icons/icon-1024w.png","images/icons/icon-512w.png","images/icons/icon-android-192.png","images/icons/icon-apple-114.png","images/icons/icon-apple-120.png","images/icons/icon-apple-144.png","images/icons/icon-apple-152.png","images/icons/icon-apple-180.png","images/icons/icon-apple-57.png","images/icons/icon-apple-60.png","images/icons/icon-apple-72.png","images/icons/icon-apple-76.png","images/icons/icon-favicon-16.png","images/icons/icon-favicon-32.png","images/icons/icon-favicon-96.png","images/icons/icon-ms-144.png","images/icons/mask.svg","images/logo-white.png","images/logo-white.svg","images/me.png","images/me@2x.png","images/me@3x.png","manifest.json"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1687847736012").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1687847736012"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1687847736012").then(async n=>{try{const s=await fetch(e.request);return n.put(e.request,s.clone()),s}catch(s){const i=await n.match(e.request);if(i)return i;throw s}}))))})}();
