if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const u=e=>n(e,r),c={module:{uri:r},exports:s,require:u};i[r]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(l(...e),s)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pokedex"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pokedex/css/app.fc46a839.css",revision:null},{url:"/pokedex/img/arrow-down.d6b8a9d0.svg",revision:null},{url:"/pokedex/img/arrow-left.f08b9ecc.svg",revision:null},{url:"/pokedex/img/arrow-right.933c7632.svg",revision:null},{url:"/pokedex/img/arrow-up.ba9ad542.svg",revision:null},{url:"/pokedex/img/bug-icon.c8847363.png",revision:null},{url:"/pokedex/img/dark-icon.345b8be7.png",revision:null},{url:"/pokedex/img/dragon-icon.a867d367.png",revision:null},{url:"/pokedex/img/electric-icon.74b5991c.png",revision:null},{url:"/pokedex/img/fairy-icon.b5831429.png",revision:null},{url:"/pokedex/img/fight-icon.f82067bc.png",revision:null},{url:"/pokedex/img/fire-icon.019ab6d0.png",revision:null},{url:"/pokedex/img/flying-icon.0aef4f7a.png",revision:null},{url:"/pokedex/img/ghost-icon.fa0c24c8.png",revision:null},{url:"/pokedex/img/grass-icon.573d444f.png",revision:null},{url:"/pokedex/img/ground-icon.013a075e.png",revision:null},{url:"/pokedex/img/ice-icon.61dca0b7.png",revision:null},{url:"/pokedex/img/normal-icon.046964af.png",revision:null},{url:"/pokedex/img/poison-icon.629c5283.png",revision:null},{url:"/pokedex/img/psychic-icon.eeaced31.png",revision:null},{url:"/pokedex/img/rock-icon.18f00ee4.png",revision:null},{url:"/pokedex/img/steel-icon.ef89efdc.png",revision:null},{url:"/pokedex/img/unknown-icon.a43dc136.png",revision:null},{url:"/pokedex/img/water-icon.86eb36fe.png",revision:null},{url:"/pokedex/index.html",revision:"78632b8cb2183f74896c388cf276463f"},{url:"/pokedex/js/app.8c7d7e85.js",revision:null},{url:"/pokedex/js/chunk-vendors.49343c07.js",revision:null},{url:"/pokedex/manifest.json",revision:"c6db0a64228772c78eafe99538e1ab39"},{url:"/pokedex/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
