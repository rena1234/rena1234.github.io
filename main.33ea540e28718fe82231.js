!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const n=document.createElement("template"),o=document.createElement("style");o.type="text/css",o.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.number{width:2em;height:2em;display:flex;justify-content:center;align-items:center;border-radius:50%}.number.first{border:1px solid}.discover{display:flex}.discover .left-bar{color:#7f7f7f;display:none;flex-direction:column;align-items:center;padding-top:10vh}@media (min-width: 768px){.discover .left-bar{width:6%;display:flex}}@media (min-width: 1024px){.discover .left-bar{width:4.5%;display:flex}}.discover .left-bar .left-bar__text{writing-mode:vertical-rl;transform:rotate(180deg)}.discover .left-bar .number{margin:5% 0%}.discover .left-bar .left-bar__line{height:15vh;width:1px;margin:40% 0%;background:#7f7f7f}.discover .left-bar .left-bar__bottom{margin-top:10vh;height:10vh;width:100%;background:#F9EFE4}.discover .image-container{width:100%;height:45vh;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:flex-end}@media (min-width: 768px){.discover .image-container{width:94%;height:auto}}@media (min-width: 1024px){.discover .image-container{width:97%;height:auto}}.discover .image-container .image{width:100vw;height:100%;transition:all 1s;position:absolute;background-repeat:no-repeat}.discover .image-container .contain-image{background-size:contain;background-position:center bottom}.discover .image-container .cover-image{background-size:cover}.discover .image-container .image-container__text-bottom{font-family:'serif';font-weight:bold;padding:1%;border-radius:5px;font-size:10vw;position:absolute;bottom:10%;margin-left:3%;margin-right:3%}@media (min-width: 768px){.discover .image-container .image-container__text-bottom{font-size:4.5vw}}.discover .image-container .image-container__text-top{font-family:'serif';font-weight:bold;padding:1%;border-radius:5px;font-size:10vw;position:absolute;top:5%;margin-left:3%;margin-right:3%}@media (min-width: 768px){.discover .image-container .image-container__text-top{font-size:4.5vw}}.discover .image-container .center-text{display:flex;justify-content:center;align-items:center;font-size:10vw;text-align:center}@media (min-width: 768px){.discover .image-container .center-text{font-size:4.5vw}}.discover .image-container .center-text div{width:60%}.bottom-bar{display:flex;color:#7f7f7f;justify-content:center}@media (min-width: 768px){.bottom-bar{display:none}}.bottom-bar .bottom-bar__numbers{padding:2% 0%;display:flex;justify-content:space-around}.hover-text{cursor:pointer}\n"));n.innerHTML=`\n  <div class="discover">\n    <div class="left-bar">\n      <div \n        data-index="0"\n        class="number first hover-text"\n        >\n        <button>\n          1\n        </button>\n      </div>\n      <div \n        data-index="1"\n        class="number hover-text">\n        <button>\n          2\n        </button>\n      </div>\n      <div \n        data-index="2"\n        class="number hover-text">\n        <button>\n          3\n        </button>\n      </div>\n      <div \n        class="left-bar__line">\n      </div>  \n      <div class="left-bar__text">\n        DISCOVER MORE\n      </div>\n      <div class="left-bar__bottom">\n      </div>\n    </div>\n    <div class="image-container">\n      ${(t=>{let e=-100,i="";for(const[n,o]of t.entries())1!==n?(i+=`\n        <div \n          style="left: ${e}vw;\n          background-image: url(${o.url});\n          "\n          class="${o.imageClasses} unselected">\n          ${o.innerHtml}\n        </div>\n      `,e+=100):(i+=`\n        <div \n          style="left: ${e}vw;\n          background-image: url(${o.url});\n          "\n          class="${o.imageClasses} selected">\n          ${o.innerHtml}\n        </div>\n      `,e+=100);return i})([{url:"assets/developer-4027337_1280.png",imageClasses:"image contain-image",innerHtml:'<div class="image-container__text-bottom primary-color light-background">Experience with remote work</div>'},{url:"assets/photo5023836475086710854.jpg",imageClasses:"image",innerHtml:'<div class="image-container__text-bottom primary-color dark-background">I\'m a Web Developer</div>'},{imageClasses:"image light-background center-text",innerHtml:'<span class="title primary-color">2 and a half years experience</span>'}])}\n    </div>\n  </div>\n  <div class="bottom-bar">\n    <div class="bottom-bar__numbers">\n      <div \n        data-index="0"\n        class="number first hover-text">\n        <button>\n          1\n        </button>\n      </div>\n      <div \n        data-index="1"\n        class="number hover-text">\n        <button>\n          2\n        </button>\n      </div>\n      <div \n        data-index="2"\n        class="number hover-text">\n        <button>\n          3\n        </button>\n      </div>\n    </div>\n  </div>\n`;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0)),this.shadowRoot.appendChild(o),this.initNumberButtons();const t=this.shadowRoot.querySelector(".image-container"),e=this.shadowRoot.querySelectorAll(".image");setInterval(()=>((t,e)=>{const i=e.querySelector(".image"),n=i.cloneNode(!0);e.removeChild(i);const o=100*(t.length-1);n.style.left=o+"vw",e.appendChild(n);const s=e.querySelectorAll(".image");for(const[t,e]of s.entries()){const t=e.style.left,i=parseInt(t.slice(0,t.length));e.style.left=i-100+"vw"}for(const[t,e]of s.entries())if(e.classList.contains("selected")){e.classList.remove("selected"),e.classList.add("unselected"),s[t+1].classList.add("selected");const i=s[t+1].style.left,n=parseInt(i.slice(0,i.length-2));return s[t+1].style.left=n+"vw",s[t+1].classList.remove("unselected"),!0}})(e,t),4e3)}initNumberButtons(){const t=[document.querySelector("stack-section"),document.querySelector("experience-section"),document.querySelector("github-section")];this.shadowRoot.querySelectorAll(".number").forEach(e=>{e.addEventListener("click",()=>{t[e.dataset.index].scrollIntoView({behavior:"smooth"})})})}}const r=document.createElement("template");r.innerHTML='\n  <div> \n    LINK \n  </div>\n  <div style="display: flex;">\n    <slot name="link-icon"/>\n  </div>\n  ';class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(r.content.cloneNode(!0))}}window.customElements.define("dev-link",a);const d=document.createElement("template"),l=[{company:"Lemobs",startYear:2018,endYear:2019,position:"Web Developer",stack:"Laravel, PHP, Angular, Typescript, Javascript, CSS, HTML"},{company:"Sinn",startYear:2019,endYear:2020,position:"Web Developer",stack:"Angular, Typescript, Javascript, SCSS"}],c=document.createElement("style");c.type="text/css",c.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.experience{width:100%}@media (min-width: 768px){.experience{display:flex}}.experience .experience__top{display:flex;flex-direction:column;align-items:center;padding:6% 5% 0% 5%}@media (min-width: 768px){.experience .experience__top{width:50%;align-items:flex-start}}.experience .experience__list{padding:6% 6% 15% 6%}@media (min-width: 768px){.experience .experience__list{width:50%}}.experience .experience__list .separator{width:100%;margin:auto}.experience .experience__list .experience__list__date{padding-top:5%;text-transform:uppercase}.experience .experience__list .experience__list__date,.experience .experience__list .title,.experience .experience__list .subtitle,.experience .experience__list .description-text{padding-bottom:4%;padding-right:25%}\n"));class p extends HTMLElement{constructor(){super(),this.events=l,this.attachShadow({mode:"open"}),this.updateTemplate(),this.shadowRoot.appendChild(c)}updateTemplate(){d.innerHTML=(t=>`\n    <div class="experience">\n      <div class="experience__top">\n        <div class="subtitle light-text">\n         EXPERIENCE\n        </div>\n        <div class="title primary-color">\n          I've worked at: \n        </div>\n      </div>\n      <div class="experience__list">\n        <div class="separator"></div>\n        ${t.reduce((t,e)=>`\n        ${t}\n        <div class="experience__list__date description-text">\n          ${e.startYear}-${e.endYear}\n        </div>\n        <div class="title primary-color">\n          ${e.company}\n        </div>\n        <div class="subtitle">\n          ${e.position}\n        </div>\n        <div class="light-text description-text">\n          ${e.stack}\n        </div>\n        <div class="separator"></div>\n      `,"")}\n      </div>\n    </div>\n  `)(l),this.shadowRoot.innerHTML=d.innerHTML}}const m=document.createElement("template");m.innerHTML=`\n  <div class="stack">\n    <div class="stack__top">\n      <div class="title primary-color">\n       My Stack\n      </div>\n    </div>\n    <div class="stack__list">\n      <div class="separator"></div>\n      <div class="stack__list__container">\n        ${["php","laravel","Javascript","Typescript","Angular","Webpack","Sass","Python","Git"].reduce((t,e)=>`${t}<span class="subtitle">${e}</span>`,"")}\n      </div>\n    </div>\n  </div>\n  `;const h=document.createElement("style");h.type="text/css",h.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.stack{width:100%;background:#F9EFE4}@media (min-width: 768px){.stack{display:flex}}.stack .stack__top{display:flex;flex-direction:column;align-items:center;padding:6% 5% 0% 5%}@media (min-width: 768px){.stack .stack__top{width:50%;align-items:flex-start}}.stack .stack__list{padding:6% 6% 15% 6%}@media (min-width: 768px){.stack .stack__list{width:50%}}.stack .stack__list .events__list__month{padding-top:5%;text-transform:uppercase}.stack .stack__list .events__list__month,.stack .stack__list .title,.stack .stack__list .subtitle,.stack .stack__list .description-text{padding:4%}.stack .stack__list .stack__list__container{display:flex;flex-wrap:wrap;width:100%}.stack .stack__list .separator{width:100%;margin:auto}\n"));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(m.content.cloneNode(!0)),this.shadowRoot.appendChild(h)}}const b=document.createElement("template");b.innerHTML='\n    <div class="menu__top">\n      <div class="menu__left">\n        <div\n          data-section="footer-section"\n          class="menu__left__find hover-text link-button tooltip"\n          >\n          <button>\n            <div>\n              <slot name="person-icon"/>\n            </div>\n          </button>\n          contact me \n          <span class="tooltip-text">contact me</span>\n        </div>\n        <div class="bar__name--left">\n          <span>Renato</span><span class="primary-color">Melo</span>\n        </div>\n      </div>\n      <div class="bar__name--center">\n        <span>Renato</span><span class="primary-color">Melo</span>\n      </div>\n      <div class="menu__right">\n        <div \n          data-section="responsive-section"\n          class="menu__right__desktop-icon hover-text link-button tooltip"> \n          <span class="tooltip-text">responsive design</span>\n          <button>\n            <slot name="aspect-icon"/>\n          </button>\n        </div>\n        <div \n          data-section="experience-section"\n          class="hover-text link-button tooltip">\n          <span class="tooltip-text">my experience</span>\n          <button>\n            <slot name="shopping-icon"/>\n          </button>\n        </div>\n        <div \n          data-section="stack-section"\n          class="hover-text link-button tooltip">\n          <span class="tooltip-text">my stack</span>\n          <button>\n            <slot name="integration-icon"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  ';const v=document.createElement("style");v.type="text/css",v.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.menu__top{display:flex;justify-content:space-between;padding:10px 10px 10px 10px;font-family:Roboto;font-weight:bold;background:#45A1FF;color:white}@media (min-width: 768px){.menu__top{padding:10px 10px 3px 10px}}.menu__top .menu__left{display:flex;align-items:center;width:20%}@media (min-width: 1024px){.menu__top .menu__left{height:40px}}.menu__top .menu__left__find{display:none}@media (min-width: 1024px){.menu__top .menu__left__find{display:flex;align-items:center;border:1px solid}}@media (min-width: 768px){.menu__top .menu__left__find{display:flex;align-items:center;border:1px solid;padding:5px 10px;border-radius:20px}}@media (min-width: 768px){.menu__top .menu__left__bars{display:none}}@media (min-width: 1024px){.menu__top .menu__left__bars{display:none}}.menu__top .menu__right{display:flex;width:20%;justify-content:space-around;align-items:center}@media (min-width: 1024px){.menu__top .menu__right{height:40px}}.menu__top .menu__right .menu__right__desktop-icon{display:none}@media (min-width: 1024px){.menu__top .menu__right .menu__right__desktop-icon{display:block}}@media (min-width: 1024px){.menu__top .menu__right .search-container{padding:0 10% 0 10%}}@media (min-width: 1024px){.menu__top .menu__right .search-container .search-container__search{padding:1vh;background:coral;border-radius:50%}}.menu__top .bar__name--left{font-size:1.25em}@media (min-width: 768px){.menu__top .bar__name--left{display:none}}@media (min-width: 1024px){.menu__top .bar__name--left{display:none}}.menu__top .bar__name--center{display:none;font-size:4vh}@media (min-width: 768px){.menu__top .bar__name--center{display:block}}.menu-links{font-size:0.8em;display:none;justify-content:space-around;padding:0%  10% 1% 10%;border-bottom:1px solid gray}@media (min-width: 1024px){.menu-links{display:flex}}@media (min-width: 768px){.menu-links{display:flex}}.hover-text{cursor:pointer}\n"));class f extends HTMLElement{constructor(){super(),this._primaryColor="black",this._lightColor="black",this._styleHoverElement=document.createElement("style"),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(b.content.cloneNode(!0)),this.shadowRoot.appendChild(v),this.initButtons()}initButtons(){this.shadowRoot.querySelectorAll(".link-button").forEach(t=>{t.addEventListener("click",()=>{document.querySelector(t.dataset.section).scrollIntoView({behavior:"smooth"})})})}}const x=document.createElement("template");x.innerHTML='\n  <div class="footer">\n    <div class="footer__top">\n      <div class="separator__tablet"></div>\n      <div class="footer__title">\n        Have any questions ?\n      </div>  \n      <div class="footer__top__contact-options">\n        <div>\n          Email me at: renatoferreira249@gmail.com\n        </div>\n        <div>\n          \n          Linkedin: <a href="https://www.linkedin.com/in/renato-melo-026703191">www.linkedin.com/in/renato-melo-026703191</a>\n        </div>\n      </div>\n    </div>\n    <div class="footer__bottom">\n      <div class="footer__bottom__left">\n        <div>\n          Made by myself\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class="footer__bottom__right">\n          Renato Melo 2020\n      </div>\n    </div>\n  </div>\n';const _=document.createElement("style");_.type="text/css",_.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator,.footer .separator__tablet{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}::placeholder{color:white}.footer .separator,.footer .separator__tablet{width:92vw;margin-bottom:2%}.footer{color:white;background:#333333;width:100%}.footer .separator,.footer .separator__tablet{background:#8c8c8c}.footer .separator__tablet{margin:2% 0%;display:none}@media (min-width: 768px){.footer .separator__tablet{display:block}}.footer .footer__top{width:92%;padding:5% 4% 0% 4%}.footer .footer__top .footer__title{padding:3% 0%;font-size:6vw;font-weight:bold;font-family:Serif;text-align:center;color:#DBB07D}@media (min-width: 768px){.footer .footer__top .footer__title{font-size:3vw;text-align:center}}.footer .footer__top .footer__top__contact-options{display:flex;flex-direction:column;align-items:center;color:#8c8c8c;padding-bottom:3%;font-family:Roboto}.footer .footer__bottom{padding:2% 0%;background:#5A5A5A;display:flex;flex-direction:column;align-items:center;font-family:Roboto}@media (min-width: 768px){.footer .footer__bottom{flex-direction:row;justify-content:space-between}}.footer .footer__bottom .footer__bottom__left{display:flex;flex-direction:column;align-items:center}@media (min-width: 768px){.footer .footer__bottom .footer__bottom__left{align-items:flex-start;margin-left:5vw}}@media (min-width: 1024px){.footer .footer__bottom .footer__bottom__left{flex-direction:row}.footer .footer__bottom .footer__bottom__left div{padding-right:1vw}}@media (min-width: 768px){.footer .footer__bottom .footer__bottom__right{align-items:flex-start;margin-right:5vw}}a{color:white}\n"));class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(x.content.cloneNode(!0)),this.shadowRoot.appendChild(_)}}const w=document.createElement("template");w.innerHTML='\n  <div class="github">\n    <div class="github__first-box">\n      <div class="subtitle light-text">\n        <a href="https://github.com/rena1234/rena1234.github.io">Click to check this page code</a>\n      </div>\n    </div>\n    <div class="github__second-box">\n      <span class="title primary-color">Take a look at my github</span>\n    </div>\n  </div>\n';const y=document.createElement("style");y.type="text/css",y.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.github{background:#333333;padding:3vh 0;text-align:center;width:100%}@media (min-width: 768px){.github{display:flex}}.github .github__first-box{display:flex;flex-direction:column;justify-content:center}.github .github__first-box a{color:white}@media (min-width: 768px){.github .github__first-box{width:40%}}@media (min-width: 768px){.github .github__second-box{width:60%}}\n"));class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0)),this.shadowRoot.appendChild(y)}}const z=document.createElement("template");z.innerHTML='\n  <div class="responsive">\n    <div class="responsive__first-box">\n    </div>\n    <div class="responsive__second-box">\n      <div class="responsive__second-box__text-container">\n        <div class="title">\n          Check this page responsivity\n        </div>\n        <div class="subtitle">\n          This page has Desktop, Tablet and Phone designs. Change your resolution to see\n        </div>\n      </div>\n    </div>\n  </div>\n';const E=document.createElement("style");E.type="text/css",E.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.light-background{background:#F9EFE4}.dark-background{background:#333333}.tooltip-text{visibility:hidden;z-index:1;position:absolute;top:50px;padding:0.5%;background:#333333;transition:0.2s;border-radius:5px;color:white !important}.tooltip:hover .tooltip-text{visibility:visible}button{background:none;border:none;color:inherit;padding:0;cursor:pointer}.responsive{width:100%;background-color:#F2FCFE}@media (min-width: 768px){.responsive{display:flex}}.responsive .responsive__first-box{color:#e5e5e5;background-image:url(assets/responsive-2044921_1280.jpg);background-repeat:no-repeat;background-size:contain;background-position:center center;text-align:center;padding:10vh}@media (min-width: 768px){.responsive .responsive__first-box{width:60%}}.responsive .responsive__second-box{color:#595959;background:#9FCCE3;text-align:center;padding:10vh;height:auto;display:flex;flex-direction:column;justify-content:center}@media (min-width: 768px){.responsive .responsive__second-box{width:40%}}\n"));class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(z.content.cloneNode(!0)),this.shadowRoot.appendChild(E)}}window.customElements.define("dev-intro",s),window.customElements.define("stack-section",u),window.customElements.define("experience-section",p),window.customElements.define("top-menu",f),window.customElements.define("footer-section",g),window.customElements.define("github-section",k),window.customElements.define("responsive-section",D)}]);