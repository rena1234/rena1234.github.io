!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);const i=document.createElement("template"),n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.number{width:2em;height:2em;display:flex;justify-content:center;align-items:center;border-radius:50%}.number.first{border:1px solid}.discover{display:flex}.discover .left-bar{display:none;flex-direction:column;align-items:center;padding-top:10vh}@media (min-width: 768px){.discover .left-bar{width:6%;display:flex}}@media (min-width: 1024px){.discover .left-bar{width:4.5%;display:flex}}.discover .left-bar .left-bar__text{writing-mode:vertical-rl;transform:rotate(180deg)}.discover .left-bar .number{margin:5% 0%}.discover .left-bar .left-bar__line{height:15vh;width:1px;margin:40% 0%}.discover .left-bar .left-bar__bottom{margin-top:10vh;height:10vh;width:100%;background:#F9EFE4}.discover .image-container{width:100%;height:45vh;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:flex-end}@media (min-width: 768px){.discover .image-container{width:94%;height:auto}}@media (min-width: 1024px){.discover .image-container{width:97%;height:auto}}.discover .image-container .image{width:100vw;height:100%;transition:all 1s;position:absolute}.discover .image-container .image-container__text{font-family:'serif';font-weight:bold;font-size:10vw;position:absolute;z-index:1;color:white;margin-bottom:10px}@media (min-width: 768px){.discover .image-container .image-container__text{font-size:4.5vw}}.discover .image-container .image-container__text,.discover .image-container .image-container__expander{margin-left:3%}.discover .image-container .image-container__expander{margin-bottom:4%}.bottom-bar{display:flex;justify-content:center}@media (min-width: 768px){.bottom-bar{display:none}}.bottom-bar .bottom-bar__numbers{padding:2% 0%;display:flex;justify-content:space-around}.hover-text{cursor:pointer}\n"));const s=()=>console.log("it works"),r=[{url:"assets/photo5023836475086710854.jpg"},{url:"assets/2020-08-22-174057_1366x768_scrot.png"},{url:"assets/photo5023836475086710854.jpg"},{url:"assets/2020-08-22-174057_1366x768_scrot.png"},{url:"assets/photo5023836475086710854.jpg"},{url:"assets/2020-08-22-174057_1366x768_scrot.png"},{url:"assets/photo5023836475086710854.jpg"},{url:"assets/photo5023836475086710854.jpg"}],d=t=>`\n      <div class="discover">\n        <div class="left-bar light-text">\n          <div \n            data-index="0"\n            class="number first hover-text"\n            >\n            1\n          </div>\n          <div \n            data-index="1"\n            class="number hover-text">\n            2\n          </div>\n          <div \n            data-index="2"\n            class="number hover-text">\n            3\n          </div>\n          <div \n            class="left-bar__line"\n            style="background: ${t}">\n          </div>  \n          <div class="left-bar__text">\n            DISCOVER MORE\n          </div>\n          <div class="left-bar__bottom">\n          </div>\n        </div>\n        <div class="image-container">\n          ${(t=>{let e=-100,o="";for(const[i,n]of t.entries())1!==i?(o+=`\n        <div \n          style="left: ${e}vw;\n          background: url(${n.url});background-size: cover;\n          "\n          class="image unselected">\n        </div>\n      `,e+=100):(o+=`\n        <div \n          style="left: ${e}vw;\n          background: url(${n.url});background-size: cover;\n          "\n          class="image selected">\n        </div>\n      `,e+=100);return o})(r)}\n          <div class="image-container__text">This Page is under construction</div>\n          <div class="image-container__expander">\n            <expander-element>\n              <div slot="text">\n                EXPLORE\n              </div>\n            </expander-element>\n          </div>\n        </div>\n      </div>\n      <div class="bottom-bar">\n        <div class="bottom-bar__numbers">\n          <div \n            data-index="0"\n            class="number first hover-text"\n            style="border-color: ${t}">\n            1\n          </div>\n          <div \n            data-index="1"\n            class="number hover-text">\n            2\n          </div>\n          <div \n            data-index="2"\n            class="number hover-text">\n            3\n          </div>\n        </div>\n      </div>\n    `;class a extends HTMLElement{constructor(){super(),this._styleHoverElement=document.createElement("style"),this._primaryColor="black",i.innerHTML=d(this._primaryColor),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(n),this.initExpander(),this.initNumberButtons();const t=this.shadowRoot.querySelector(".image-container"),e=this.shadowRoot.querySelectorAll(".image");setInterval(()=>((t,e)=>{const o=e.querySelector(".image"),i=o.cloneNode(!0);e.removeChild(o);const n=100*(t.length-1);i.style.left=n+"vw",e.appendChild(i);const s=e.querySelectorAll(".image");for(const[t,e]of s.entries()){const t=e.style.left,o=parseInt(t.slice(0,t.length));e.style.left=o-100+"vw"}for(const[t,e]of s.entries())if(e.classList.contains("selected")){e.classList.remove("selected"),e.classList.add("unselected"),s[t+1].classList.add("selected");const o=s[t+1].style.left,i=parseInt(o.slice(0,o.length-2));return s[t+1].style.left=i+"vw",s[t+1].classList.remove("unselected"),!0}})(e,t),4e3)}initNumberButtons(){const t=[document.querySelector("stack-section"),document.querySelector("experience-section"),document.querySelector("github-section")];this.shadowRoot.querySelectorAll(".number").forEach(e=>{e.addEventListener("click",()=>{t[e.dataset.index].scrollIntoView({behavior:"smooth"})})})}set primaryColor(t){this._primaryColor=t,this.updateTemplate(),this.initExpander()}set styleHoverElementFactory(t){this._styleHoverElement=t(),this.updateTemplate()}initExpander(){const t=this.shadowRoot.querySelector("expander-element");t.onClick=s,t.borderColor=this._primaryColor,t.color="white"}updateTemplate(){i.innerHTML=d(this._primaryColor),this.shadowRoot.innerHTML=i.innerHTML,this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(this._styleHoverElement),this.initExpander()}}const l=document.createElement("template");l.innerHTML='\n  <div> \n    LINK \n  </div>\n  <div style="display: flex;">\n    <slot name="link-icon"/>\n  </div>\n  ';class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0))}}window.customElements.define("dev-link",c);const p=document.createElement("template"),m=[{company:"Lemobs",startYear:2018,endYear:2019,position:"Web Developer",stack:"Laravel, PHP, Angular, Typescript, Javascript, CSS, HTML"},{company:"Sinn",startYear:2019,endYear:2020,position:"Web Developer",stack:"Angular, Typescript, Javascript, SCSS"}],_=document.createElement("style");_.type="text/css",_.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.events{width:100%}@media (min-width: 768px){.events{display:flex}}.events .events__top{display:flex;flex-direction:column;align-items:center;padding:6% 5% 0% 5%}@media (min-width: 768px){.events .events__top{width:50%;align-items:flex-start}}.events__list{padding:6% 6% 15% 6%}@media (min-width: 768px){.events__list{width:50%}}.events__list .events__list__month{padding-top:5%;text-transform:uppercase}.events__list .events__list__month,.events__list .title,.events__list .subtitle,.events__list .description-text{padding-bottom:4%;padding-right:25%}.separator{width:100%;margin:auto}\n"));class h extends HTMLElement{constructor(){super(),this.events=m,this.attachShadow({mode:"open"}),this.updateTemplate(),this.shadowRoot.appendChild(_)}updateTemplate(){p.innerHTML=(t=>`\n    <div class="events">\n      <div class="events__top">\n        <div class="events__event-text subtitle light-text">\n         EXPERIENCE\n        </div>\n        <div class="title primary-color">\n          I've worked at: \n        </div>\n      </div>\n      <div class="events__list">\n        <div class="separator"></div>\n        ${t.reduce((t,e)=>`\n        ${t}\n        <div class="events__list__month description-text">\n          ${e.startYear}-${e.endYear}\n        </div>\n        <div class="title primary-color">\n          ${e.company}\n        </div>\n        <div class="subtitle">\n          ${e.position}\n        </div>\n        <div class="light-text description-text">\n          ${e.stack}\n        </div>\n        <div class="separator"></div>\n      `,"")}\n      </div>\n    </div>\n  `)(m),this.shadowRoot.innerHTML=p.innerHTML}}const f=document.createElement("template");f.innerHTML=`\n  <div class="events">\n    <div class="events__top">\n      <div class="title primary-color">\n       My Stack\n      </div>\n    </div>\n    <div class="events__list">\n      <div class="separator"></div>\n      <div class="stack-container">\n        ${["php","laravel","Javascript","Typescript","Angular","Webpack","Sass","Python","Git"].reduce((t,e)=>`${t}<span class="subtitle">${e}</span>`,"")}\n      </div>\n    </div>\n  </div>\n  `;const v=document.createElement("style");v.type="text/css",v.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.events{width:100%;background:#F9EFE4}@media (min-width: 768px){.events{display:flex}}.events .events__top{display:flex;flex-direction:column;align-items:center;padding:6% 5% 0% 5%}@media (min-width: 768px){.events .events__top{width:50%;align-items:flex-start}}.events__list{padding:6% 6% 15% 6%}@media (min-width: 768px){.events__list{width:50%}}.events__list .events__list__month{padding-top:5%;text-transform:uppercase}.events__list .events__list__month,.events__list .title,.events__list .subtitle,.events__list .description-text{padding:4%}.separator{width:100%;margin:auto}.stack-container{display:flex;flex-wrap:wrap;width:100%}\n"));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(f.content.cloneNode(!0)),this.shadowRoot.appendChild(v)}}const x=document.createElement("template"),w=(t,e)=>`\n    <div class="menu__top">\n      <div class="menu__left">\n        <div class="menu__left__bars">\n          <slot name="menu-icon"/>\n        </div>\n        <div\n          class="menu__left__find hover-text"\n          style="border-color: ${e}"\n          >\n          <div\n            style="color: ${t}">\n            <slot name="point-icon"/>\n          </div>\n          Find a Store\n        </div>\n        <div class="bar__name--left">\n          <span>Renato</span><span class="primary-color">Melo</span>\n        </div>\n      </div>\n      <div class="bar__name--center">\n        <span>Renato</span><span style="color: ${t}">Melo</span>\n      </div>\n      <div class="menu__right">\n        <div class="menu__right__desktop-icon hover-text">\n          <slot name="person-icon"/>\n        </div>\n        <div class="menu__right__desktop-icon hover-text"> \n          <slot name="heart-icon"/>\n        </div>\n        <div id ="testeid" class="hover-text">\n          <slot name="shopping-icon"/>\n        </div>\n        <div class="search-container">\n          <div class="search-container__search hover-text">\n            <slot name="search-icon"/>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,b=document.createElement("style");b.type="text/css",b.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.menu__top{display:flex;justify-content:space-between;padding:10px 10px 10px 10px;font-family:Roboto;font-weight:bold;background:#45A1FF;color:white}@media (min-width: 768px){.menu__top{padding:10px 10px 3px 10px}}.menu__top .menu__left{display:flex;align-items:center;width:20%}@media (min-width: 1024px){.menu__top .menu__left{height:40px}}.menu__top .menu__left__find{display:none}@media (min-width: 1024px){.menu__top .menu__left__find{display:flex;align-items:center;border:1px solid}}@media (min-width: 768px){.menu__top .menu__left__find{display:flex;align-items:center;border:1px solid;padding:5px 10px;border-radius:20px}}@media (min-width: 768px){.menu__top .menu__left__bars{display:none}}@media (min-width: 1024px){.menu__top .menu__left__bars{display:none}}.menu__top .menu__right{display:flex;width:20%;justify-content:space-around;align-items:center}@media (min-width: 1024px){.menu__top .menu__right{height:40px}}.menu__top .menu__right .menu__right__desktop-icon{display:none}@media (min-width: 1024px){.menu__top .menu__right .menu__right__desktop-icon{display:block}}@media (min-width: 1024px){.menu__top .menu__right .search-container{padding:0 10% 0 10%}}@media (min-width: 1024px){.menu__top .menu__right .search-container .search-container__search{padding:1vh;background:#F2F2F2;border-radius:50%}}.menu__top .bar__name--left{font-size:1.25em}@media (min-width: 768px){.menu__top .bar__name--left{display:none}}@media (min-width: 1024px){.menu__top .bar__name--left{display:none}}.menu__top .bar__name--center{display:none;font-size:5vh}@media (min-width: 1024px){.menu__top .bar__name--center{display:block;padding-top:40px}}@media (min-width: 768px){.menu__top .bar__name--center{display:block}}.menu-links{font-size:0.8em;display:none;justify-content:space-around;padding:0%  10% 1% 10%;border-bottom:1px solid gray}@media (min-width: 1024px){.menu-links{display:flex}}@media (min-width: 768px){.menu-links{display:flex}}.hover-text{cursor:pointer}\n"));class g extends HTMLElement{constructor(){super(),this._primaryColor="black",this._lightColor="black",this._styleHoverElement=document.createElement("style"),x.innerHTML=w(this._primaryColor),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(x.content.cloneNode(!0)),this.shadowRoot.appendChild(b)}set primaryColor(t){this._primaryColor=t,this.updateTemplate()}set lightColor(t){this._lightColor=t,this.updateTemplate()}set styleHoverElementFactory(t){this._styleHoverElement=t(),this.updateTemplate()}updateTemplate(){x.innerHTML=w(this._primaryColor,this._lightColor),this.shadowRoot.innerHTML=x.innerHTML,this.shadowRoot.appendChild(b),this.shadowRoot.appendChild(this._styleHoverElement)}}const y=document.createElement("template");y.innerHTML='\n  <div class="footer">\n    <div class="footer__top">\n      <div class="separator__tablet"></div>\n      <div class="footer__sign-up-text">\n        Have any questions ?\n      </div>  \n      <div class="footer__top__contact-options">\n        <div>\n          Email me at: renatoferreira249@gmail.com\n        </div>\n        <div>\n          Connect to my Linkedin: renatoferreira249@gmail.com\n        </div>\n      </div>\n    </div>\n    <div class="footer__bottom">\n      <div class="footer__bottom__left">\n        <div>\n          Made by myself\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class="footer__bottom__right">\n          Renato Melo 2020\n      </div>\n    </div>\n  </div>\n';const z=document.createElement("style");z.type="text/css",z.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text,.footer .help .help__text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text,.footer .help .help__text{font-size:5vw}@media (min-width: 768px){.description-text,.footer .help .help__text{font-size:2vw}}@media (min-width: 1024px){.description-text,.footer .help .help__text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator,.footer .separator__tablet{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}::placeholder{color:white}.footer .footer__top .footer__top__social .footer__top__social_button,.footer .footer__top .footer__top__form input,.footer .footer__top .footer__top__form .highlight-button,.footer .separator,.footer .separator__tablet{width:92vw;margin-bottom:2%}.footer .footer__top .footer__top__social .footer__top__social_button,.footer .footer__top .footer__top__form input,.footer .footer__top .footer__top__form .highlight-button{padding:4vw 0vw}@media (min-width: 768px){.footer .footer__top .footer__top__social .footer__top__social_button,.footer .footer__top .footer__top__form input,.footer .footer__top .footer__top__form .highlight-button{width:40%;padding:2vw 0vw}}@media (min-width: 768px){.flex-on-tablet{display:flex;justify-content:space-between}}.footer{color:white;background:#333333;width:100%}.footer .separator,.footer .separator__tablet{background:#8c8c8c}.footer .separator__tablet{margin:2% 0%;display:none}@media (min-width: 768px){.footer .separator__tablet{display:block}}.footer .footer__top{width:92%;padding:5% 4% 0% 4%}@media (min-width: 768px){.footer .footer__top .footer__top__social{display:flex;justify-content:space-between}}.footer .footer__top .footer__top__social .footer__top__social__icons{display:flex;justify-content:center}@media (min-width: 768px){.footer .footer__top .footer__top__social .footer__top__social__icons{width:40%}}.footer .footer__top .footer__top__social .footer__top__social__icons div{padding:0vw 6vw 6vw 6vw}@media (min-width: 768px){.footer .footer__top .footer__top__social .footer__top__social__icons div{width:40%;padding:0vw 6vw}}.footer .footer__top .footer__top__social .footer__top__social_button{background:transparent;border:1px solid #8c8c8c;color:white}.footer .footer__top .footer__sign-up-text{padding:3% 0%;font-size:6vw;font-weight:bold;font-family:Serif;color:#DBB07D}@media (min-width: 768px){.footer .footer__top .footer__sign-up-text{font-size:3vw;text-align:center}}.footer .footer__top .footer__top__contact-options{display:flex;flex-direction:column;align-items:center;color:#8c8c8c;padding-bottom:3%}@media (min-width: 768px){.footer .footer__top .footer__top__form{display:flex;width:100%;justify-content:center}}.footer .footer__top .footer__top__form input{background:transparent;border:1px solid #DBB07D;color:white;padding-left:4vw}@media (min-width: 768px){.footer .footer__top .footer__top__form input{width:60%}}.footer .footer__top .footer__top__form .highlight-button{background:#DBB07D;border:none}@media (min-width: 768px){.footer .footer__top .footer__top__form .highlight-button{width:30%}}.footer .help{width:92%;padding:0% 4% 7% 4%}@media (min-width: 768px){.footer .help{display:flex;justify-content:space-around}}.footer .help .help__text{padding:5% 0%}.footer .footer__contact{padding-top:5%;font-weight:bold}.footer .footer__support{padding-top:5%;font-weight:bold}@media (min-width: 768px){.footer .footer__support{width:60%}}.footer .footer__support .footer__top__support__items{display:flex;justify-content:space-between}.footer .footer__payment{padding:5% 0%;font-weight:bold}.footer .footer__bottom{padding:2% 0%;background:#5A5A5A;display:flex;flex-direction:column;align-items:center}@media (min-width: 768px){.footer .footer__bottom{flex-direction:row;justify-content:space-between}}.footer .footer__bottom .footer__bottom__left{display:flex;flex-direction:column;align-items:center}@media (min-width: 768px){.footer .footer__bottom .footer__bottom__left{align-items:flex-start;margin-left:5vw}}@media (min-width: 1024px){.footer .footer__bottom .footer__bottom__left{flex-direction:row}.footer .footer__bottom .footer__bottom__left div{padding-right:1vw}}@media (min-width: 768px){.footer .footer__bottom .footer__bottom__right{align-items:flex-start;margin-right:5vw}}\n"));class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(y.content.cloneNode(!0)),this.shadowRoot.appendChild(z)}}const E=document.createElement("template");E.innerHTML='\n  <div class="container">\n    <div class="first-box">\n      <div class="subtitle light-text">\n        <a href="https://github.com/rena1234/rena1234.github.io">Click to check this page code</a>\n      </div>\n    </div>\n    <div class="second-box">\n      <span class="title primary-color">Take a look at my github</span>\n    </div>\n  </div>\n';const C=document.createElement("style");C.type="text/css",C.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.container{background:#333333;padding:3vh 0;text-align:center;width:100%}@media (min-width: 768px){.container{display:flex}}.first-box{display:flex;flex-direction:column;justify-content:center}.first-box a{color:white}@media (min-width: 768px){.first-box{width:40%}}.second-box{text-align:left}@media (min-width: 768px){.second-box{width:60%}}\n"));class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(E.content.cloneNode(!0)),this.shadowRoot.appendChild(C)}}const B=document.createElement("template");B.innerHTML='\n  <div class="container">\n    <div class="first-box">\n      <span class="title">\n        Check this page responsivity\n      </span>\n    </div>\n    <div class="second-box">\n      <div class="second-box__text-container">\n        <span class="subtitle">\n          This page has Desktop, Tablet and Phone designs. Change your resolution to see\n        </span>\n      </div>\n    </div>\n  </div>\n';const T=document.createElement("style");T.type="text/css",T.appendChild(document.createTextNode(".primary-color{color:#DBB07D}.light-text{color:#8c8c8c}.title{font-size:10vw;font-family:Serif;font-weight:bold}@media (min-width: 768px){.title{font-size:5vw}}@media (min-width: 1024px){.title{font-size:4.5vw}}.description-text{font-size:5vw}@media (min-width: 768px){.description-text{font-size:2vw}}@media (min-width: 1024px){.description-text{font-size:1.3vw}}.subtitle{font-size:7vw;font-family:Roboto;font-weight:bold}@media (min-width: 768px){.subtitle{font-size:2.5vw}}@media (min-width: 1024px){.subtitle{font-size:1.5vw}}.separator{height:1px;background:#F2F2F2}.hover-text:hover{color:#DBB07D;border-color:#DBB07D;transition:0.3s}.container{width:100%}@media (min-width: 768px){.container{display:flex}}.first-box{color:#e5e5e5;background:coral;text-align:center;padding:10vh}@media (min-width: 768px){.first-box{width:60%}}.second-box{color:#e5e5e5;background:#45A1FF;text-align:center;padding:5vh;height:40vh;display:flex;flex-direction:column;justify-content:center}@media (min-width: 768px){.second-box{width:40%}}\n"));class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(B.content.cloneNode(!0)),this.shadowRoot.appendChild(T)}}window.customElements.define("dev-intro",a),window.customElements.define("stack-section",u),window.customElements.define("experience-section",h),window.customElements.define("top-menu",g),window.customElements.define("footer-section",k),window.customElements.define("github-section",D),window.customElements.define("responsive-section",R)}]);