(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var i=t(537),a=t.n(i),o=t(645),r=t.n(o),c=t(667),s=t.n(c),l=new URL(t(548),t.b),A=new URL(t(741),t.b),d=new URL(t(979),t.b),m=r()(a()),p=s()(l),g=s()(A),f=s()(d);m.push([n.id,"@font-face {\n  font-family: StratosSkyeng;\n  src: url("+p+') format("woff"),\n    url('+g+') format("woff2");\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  font-variant: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vh;\n  height: 100vh;\n  background: #e5e5e5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 32px;\n  margin-right: 23px;\n}\n\n.content {\n  background: #c2f5ff;\n  border-radius: 12px;\n  width: 480px;\n  height: 459px;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.level-title {\n  font-family: StratosSkyeng, serif;\n  width: 208px;\n  font-style: normal;\n  text-align: center;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n  color: #004980;\n  margin: 0;\n}\n\n.level-number {\n  background: white;\n  width: 97px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  color: #0080c1;\n  text-align: center;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.level-div {\n  display: flex;\n  gap: 24px;\n  flex-direction: row;\n  margin-top: 48px;\n  margin-bottom: 57px;\n}\n\n.level-button,\n.game-button-start {\n  background: #7ac100;\n  width: 246px;\n  height: 50px;\n  border-radius: 12px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  border: none;\n  align-items: center;\n  text-align: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  color: #fff;\n}\n\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 6rem);\n  grid-template-rows: repeat(4, 8rem);\n  grid-gap: 2rem;\n  perspective: 800px;\n}\n\n.card-face,\n.card-back {\n  height: 133px;\n  width: 95px;\n  position: absolute;\n}\n\n.card {\n  position: relative;\n  transform-style: preserve-3d;\n  transition: all 2s ease;\n}\n\n.card-flip {\n  transform: rotateY(180deg) scaleX(-1);\n}\n\n.card-back {\n  background-image: url('+f+");\n  backface-visibility: hidden;\n}\n\n.game-box-info {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 480px;\n  margin-bottom: 41px;\n  margin-right: 40px;\n  margin-top: 21px;\n}\n\n.timer-box {\n  display: flex;\n  flex-direction: column;\n  width: 155px;\n}\n\n.timer-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  font-family: StratosSkyeng, serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  color: white;\n}\n\n.timer-numb {\n  font-family: StratosSkyeng, serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  display: flex;\n  color: white;\n}\n\n.timer-min-numb,\n.timer-sec-numb,\n.timer-min-name,\n.timer-sec-name {\n  margin: 0;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B;2DACwE;EACxE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,2CAA2C;EAC3C,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,cAAc;EACd,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,yDAAqC;EACrC,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,YAAY;AACd;;AAEA;;;;EAIE,SAAS;AACX",sourcesContent:['@font-face {\n  font-family: StratosSkyeng;\n  src: url("./fonts/Webfonts/stratosskyengweb-regular.woff") format("woff"),\n    url("./fonts/WEbfonts/stratosskyengweb-regular.woff2") format("woff2");\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  font-variant: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vh;\n  height: 100vh;\n  background: #e5e5e5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 32px;\n  margin-right: 23px;\n}\n\n.content {\n  background: #c2f5ff;\n  border-radius: 12px;\n  width: 480px;\n  height: 459px;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.level-title {\n  font-family: StratosSkyeng, serif;\n  width: 208px;\n  font-style: normal;\n  text-align: center;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n  color: #004980;\n  margin: 0;\n}\n\n.level-number {\n  background: white;\n  width: 97px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  color: #0080c1;\n  text-align: center;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.level-div {\n  display: flex;\n  gap: 24px;\n  flex-direction: row;\n  margin-top: 48px;\n  margin-bottom: 57px;\n}\n\n.level-button,\n.game-button-start {\n  background: #7ac100;\n  width: 246px;\n  height: 50px;\n  border-radius: 12px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  border: none;\n  align-items: center;\n  text-align: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  color: #fff;\n}\n\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 6rem);\n  grid-template-rows: repeat(4, 8rem);\n  grid-gap: 2rem;\n  perspective: 800px;\n}\n\n.card-face,\n.card-back {\n  height: 133px;\n  width: 95px;\n  position: absolute;\n}\n\n.card {\n  position: relative;\n  transform-style: preserve-3d;\n  transition: all 2s ease;\n}\n\n.card-flip {\n  transform: rotateY(180deg) scaleX(-1);\n}\n\n.card-back {\n  background-image: url("img/back.png");\n  backface-visibility: hidden;\n}\n\n.game-box-info {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 480px;\n  margin-bottom: 41px;\n  margin-right: 40px;\n  margin-top: 21px;\n}\n\n.timer-box {\n  display: flex;\n  flex-direction: column;\n  width: 155px;\n}\n\n.timer-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  font-family: StratosSkyeng, serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  color: white;\n}\n\n.timer-numb {\n  font-family: StratosSkyeng, serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  display: flex;\n  color: white;\n}\n\n.timer-min-numb,\n.timer-sec-numb,\n.timer-min-name,\n.timer-sec-name {\n  margin: 0;\n}\n'],sourceRoot:""}]);const u=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var l=0;l<n.length;l++){var A=[].concat(n[l]);i&&r[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),e.push(A))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],c=0;c<n.length;c++){var s=n[c],l=i.base?s[0]+i.base:s[0],A=o[l]||0,d="".concat(l," ").concat(A);o[l]=A+1;var m=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var g=a(p,i);i.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}r.push(d)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var c=t(o[r]);e[c].references--}for(var s=i(n,a),l=0;l<o.length;l++){var A=t(o[l]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},741:(n,e,t)=>{n.exports=t.p+"ce93393e831d32412096.woff2"},548:(n,e,t)=>{n.exports=t.p+"d7d99bd522cf2d77ce4a.woff"},979:(n,e,t)=>{n.exports=t.p+"6ec366b661d730d7a51f.png"}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),a=t.n(i),o=t(569),r=t.n(o),c=t(565),s=t.n(c),l=t(216),A=t.n(l),d=t(589),m=t.n(d),p=t(426),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=r().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=A(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;const f=document.querySelector(".container");window.application={status:{},screens:{},timers:[],levels:{},renderScreen:function(n){window.application.screens[n]?(f.innerHTML=" ",window.application.screens[n]()):console.log("Такого экрана не существует")},renderBlock:function(n,e){window.application.blocks[n]?window.application.blocks[n](e):console.log("Такого блока не существует")}},window.application.screens.levels=function(){null!==f&&(f.textContent="");const n=document.createElement("div");n.classList.add("content");const e=document.createElement("h1");e.textContent="Выбери сложность",e.classList.add("level-title");const t=document.createElement("div");t.classList.add("level-div");const i=document.createElement("div");i.textContent="1",i.classList.add("level-number");const a=document.createElement("div");a.textContent="2",a.classList.add("level-number");const o=document.createElement("div");o.textContent="3",o.classList.add("level-number");const r=document.createElement("button");r.textContent="Старт",r.classList.add("level-button"),f.appendChild(n),n.appendChild(e),n.appendChild(t),t.appendChild(i),t.appendChild(a),t.appendChild(o),n.appendChild(r),function(){const n=document.querySelectorAll(".level-number");n.forEach((n=>{n.addEventListener("click",(function(n){const e=n.target;window.application.levels=e.textContent,console.log(window.application.levels)}))})),console.log(n)}(),r.addEventListener("click",(function(n){n.preventDefault(),C()}))},window.application.renderScreen("levels");const u=[{img:"./img/1.png",name:"1"},{img:"./img/2.png",name:"2"},{img:"./img/3.png",name:"3"},{img:"./img/4.png",name:"4"},{img:"./img/5.png",name:"5"},{img:"./img/6.png",name:"6"},{img:"./img/7.png",name:"7"},{img:"./img/8.png",name:"8"},{img:"./img/9.png",name:"9"},{img:"./img/10.png",name:"10"},{img:"./img/11.png",name:"11"},{img:"./img/12.png",name:"12"}];function C(){const n=document.createElement("div");n.classList.add("game-box-info");const e=document.createElement("div");e.classList.add("timer-box");const t=document.createElement("div");t.classList.add("timer-name");const i=document.createElement("p");i.classList.add("timer-min-name"),i.textContent="min";const a=document.createElement("p");a.classList.add("timer-sec-name"),a.textContent="sec";const o=document.createElement("div");o.classList.add("timer-numb");const r=document.createElement("p");r.classList.add("timer-min-numb"),r.textContent="00.";const c=document.createElement("p");c.classList.add("timer-sec-numb"),c.textContent="00";const s=document.createElement("button");s.classList.add("game-button-start"),s.textContent="Начать заново";const l=document.createElement("div");l.classList.add("cards-container"),f.appendChild(n),f.appendChild(l),n.appendChild(e),n.appendChild(s),e.appendChild(t),t.appendChild(i),t.appendChild(a),e.appendChild(o),o.appendChild(r),o.appendChild(c);const A=[{img:"./img/1.png",name:"1"},{img:"./img/2.png",name:"2"},{img:"./img/3.png",name:"3"},{img:"./img/4.png",name:"4"},{img:"./img/5.png",name:"5"},{img:"./img/6.png",name:"6"},{img:"./img/7.png",name:"7"},{img:"./img/8.png",name:"8"},{img:"./img/9.png",name:"9"},{img:"./img/10.png",name:"10"},{img:"./img/11.png",name:"11"},{img:"./img/12.png",name:"12"}],d=()=>A.concat(A);console.log(d),function(){const n=d();return n.sort((()=>Math.random()-.5)),n}().forEach((n=>{const e=document.createElement("div"),t=document.createElement("img"),i=document.createElement("div");e.classList.add("card"),t.classList.add("card-face"),i.classList.add("card-back"),l.appendChild(e),e.appendChild(t),e.appendChild(i),t.src=n.img,e.addEventListener("click",(()=>{e.classList.add("card-flip")}))}));let m=0,p=0;window.application.timers.push(setTimeout((function(){setInterval((()=>{p++,c.textContent=String(p),p<10&&(c.textContent="0"+p),60===p&&(p=0,m++,r.textContent=m+".",m<10&&(r.textContent="0"+m+"."))}),1e3)}),4e3))}window.application.screens.game=function(){const n=document.createElement("div");n.classList.add("game-box-info");const e=document.createElement("div");e.classList.add("timer-box");const t=document.createElement("div");t.classList.add("timer-name");const i=document.createElement("p");i.classList.add("timer-min-name"),i.textContent="min";const a=document.createElement("p");a.classList.add("timer-sec-name"),a.textContent="sec";const o=document.createElement("div");o.classList.add("timer-numb");const r=document.createElement("p");r.classList.add("timer-min-numb"),r.textContent="00.";const c=document.createElement("p");c.classList.add("timer-sec-numb"),c.textContent="00";const s=document.createElement("button");s.classList.add("game-button-start"),s.textContent="Начать заново";const l=document.createElement("div");l.classList.add("cards-container"),f.appendChild(n),f.appendChild(l),n.appendChild(e),n.appendChild(s),e.appendChild(t),t.appendChild(i),t.appendChild(a),e.appendChild(o),o.appendChild(r),o.appendChild(c);const A=()=>u.concat(u);console.log(A),function(){const n=A();return n.sort((()=>Math.random()-.5)),n}().forEach((n=>{const e=document.createElement("div"),t=document.createElement("img");e.classList.add("card"),t.classList.add("card-face"),l.appendChild(e),e.appendChild(t),t.src=n.img}));let d=0,m=0;window.application.timers.push(setTimeout((function(){setInterval((()=>{m++,c.textContent=String(m),m<10&&(c.textContent="0"+m),60===m&&(m=0,d++,r.textContent=d+".",d<10&&(r.textContent="0"+d+"."))}),1e3)}),4e3))},window.application.screens.game=C})()})();