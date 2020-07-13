!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i=document.createElement("template"),o=document.createElement("style");o.type="text/css",o.appendChild(document.createTextNode('@font-face{font-family:\'Roboto\';src:require("fonts/roboto-v20-latin-regular.woff2") format("woff2"),require("fonts/roboto-v20-latin-regular.woff") format("woff");font-weight:600;font-style:normal}.font-thin{font-family:\'Roboto\';color:blue}\n')),i.innerHTML='\n  <div class="intro-container">\n    <div> \n      <h2 class="font-thin">HELLO</h2>\n    </div>\n    <div style="display: flex;">\n      <slot name="dev-name"/>\n    </div>\n    <div><slot name="title"></div>\n  </div>\n  ';class s extends HTMLElement{constructor(){super();const t=`\n      .font-thin{\n        font-family: 'Roboto';\n        color: green;\n      }\n      .intro-container{\n        background:${this.getAttribute("background")}\n      }\n    `;console.log(this.getAttribute("background"));const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(t)),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(e)}}window.customElements.define("dev-intro",s);fetch("https://api.github.com/users/rena1234").then(t=>t.json()).then(t=>{console.log(t)});fetch("https://api.stackexchange.com/2.2/users/undefined?&site=stackoverflow").then(t=>t.json()).then(t=>{console.log({soreq:t})});const d=document.createElement("template");d.innerHTML='\n  <div> \n    LINK \n  </div>\n  <div style="display: flex;">\n    <slot name="link-icon"/>\n  </div>\n  ';class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0))}}window.customElements.define("dev-link",a);const l=document.createElement("template"),r=[{month:"april",startDay:19,endDay:19,place:"The shops at Chestnut Hill",address:"Bloomingdale's Chestnut Hill"},{month:"june",startDay:20,endDay:23,place:"Stuart Kingston Retalier",address:"3704 Kennet Pike Suite 450 Greenvile. DE 19807"}],c=document.createElement("style");c.type="text/css",c.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.events{width:100%}@media (min-width: 768px){.events{display:flex}}.events .events__top{display:flex;flex-direction:column;align-items:center;padding:6% 5% 0% 5%}@media (min-width: 768px){.events .events__top{width:50%;align-items:flex-start}}.events__list{padding:6% 6% 15% 6%}@media (min-width: 768px){.events__list{width:50%}}.events__list .events__list__month{padding-top:5%;text-transform:uppercase}.events__list .events__list__month,.events__list .title,.events__list .subtitle,.events__list .description-text{padding-bottom:4%;padding-right:25%}.separator{width:100%;margin:auto}\n"));class p extends HTMLElement{constructor(){super(),this.events=r,this.attachShadow({mode:"open"}),this.updateTemplate(),this.shadowRoot.appendChild(c)}updateTemplate(){l.innerHTML=(t=>`\n    <div class="events">\n      <div class="events__top">\n        <div class="events__event-text subtitle light-text">\n         EVENTS\n        </div>\n        <div class="title primary-color">\n          Meet us at: \n        </div>\n      </div>\n      <div class="events__list">\n        <div class="separator"></div>\n        ${t.reduce((t,e)=>`\n        ${t}\n        <div class="events__list__month description-text">\n          ${e.month}\n        </div>\n        <div class="title primary-color">\n          ${((t,e)=>{const n=t=>1===t?"1st":2===t?"2nd":3===t?"3rd":t+"th";return e>t?`${t}-${n(e)}`:""+n(t)})(e.startDay,e.endDay)}\n        </div>\n        <div class="subtitle">\n          ${e.place}\n        </div>\n        <div class="light-text description-text">\n          ${e.address}\n        </div>\n        <div class="separator"></div>\n      `,"")}\n      </div>\n    </div>\n  `)(r),this.shadowRoot.innerHTML=l.innerHTML}}window.customElements.define("stack-techs",p)}]);