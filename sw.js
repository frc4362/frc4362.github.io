if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let f={};const a=e=>i(e,o),r={module:{uri:o},exports:f,require:a};s[o]=Promise.all(n.map((e=>r[e]||a(e)))).then((e=>(c(...e),f)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-g81Axz8E.js",revision:null},{url:"assets/index-L-BztczD.css",revision:null},{url:"index.html",revision:"509dab28683464ffb6af903c4cd552a5"},{url:"registerSW.js",revision:"f248b6240f91faed32a0aeffddc9d314"},{url:"icons/pwa-192x192.png",revision:"8307c4e6b2322a1c0e52c39c8fb8a549"},{url:"assets/config-analyst.json",revision:"0f1e58767204bd5abbc33acf265795ef"},{url:"assets/config-example.json",revision:"8df9287baf46808c085b32a246bacac1"},{url:"assets/config-matchcheck.json",revision:"a6d1bed019f6d6894b80b5dc720b799b"},{url:"assets/config-matches.json",revision:"d6eb4ce3e23fd50aaca831c6eb8b682e"},{url:"assets/config-pit-scout.json",revision:"2e923fa17df3860bdf4d9b1ea7e728ca"},{url:"assets/config-pitcheck.json",revision:"fc88445a4fa01d15eb8bc23375873325"},{url:"assets/configurations.txt",revision:"1ffcbfd77e1529e7ff60570cbaf6b4d8"},{url:"assets/demo.png",revision:"9054c01f1665aa58fea29cf8c6ee0f87"},{url:"assets/field.png",revision:"5ae51c9a7c47d574c96120c651d6e7bf"},{url:"assets/gemslogo.png",revision:"498b8054e39c788b4239b1e6cde64490"},{url:"assets/logo.png",revision:"73b6e660379b0ee2e6dc3a077ddebcd1"},{url:"icons/apple-touch-icon.png",revision:"7161f293d5c04db1afa0b71b6af7ef19"},{url:"icons/mask-icon.svg",revision:"fcb7663a6682083519f8672db8b115c6"},{url:"icons/pwa-512x512.png",revision:"a9267f3446fb838db215f06af22bc23e"},{url:"manifest.webmanifest",revision:"7fc8de14470e4450e5a5d30a9f901bcd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
