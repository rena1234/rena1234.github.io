!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.createElement("template"),r=document.createElement("style");r.type="text/css",r.appendChild(document.createTextNode('@font-face{font-family:\'Roboto\';src:require("fonts/roboto-v20-latin-regular.woff2") format("woff2"),require("fonts/roboto-v20-latin-regular.woff") format("woff");font-weight:600;font-style:normal}.font-thin{font-family:\'Roboto\';color:blue}\n')),o.innerHTML='\n  <div class="intro-container">\n    <div> \n      <h2 class="font-thin">HELLO</h2>\n    </div>\n    <div style="display: flex;">\n      <slot name="dev-name"/>\n    </div>\n    <div><slot name="title"></div>\n  </div>\n  ';class i extends HTMLElement{constructor(){super();const e=`\n      .font-thin{\n        font-family: 'Roboto';\n        color: green;\n      }\n      .intro-container{\n        background:${this.getAttribute("background")}\n      }\n    `;console.log(this.getAttribute("background"));const t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(e)),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}}window.customElements.define("dev-intro",i);fetch("https://api.github.com/users/rena1234").then(e=>e.json()).then(e=>{console.log(e)});fetch("https://api.stackexchange.com/2.2/users/undefined?&site=stackoverflow").then(e=>e.json()).then(e=>{console.log({soreq:e})});const l=document.createElement("template");l.innerHTML='\n  <div> \n    LINK \n  </div>\n  <div style="display: flex;">\n    <slot name="link-icon"/>\n  </div>\n  ';class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0))}}window.customElements.define("dev-link",c)}]);