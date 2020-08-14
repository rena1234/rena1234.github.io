import style from 'Components/footer/Footer.scss'
const template = document.createElement('template');

template.innerHTML = `
  <div class="footer">
    <div class="footer__top">
      <div class="separator__tablet"></div>
      <div class="footer__sign-up-text">
        Have any questions ?
      </div>  
      <div class="footer__top__contact-options">
        <div>
          Email me at: renatoferreira249@gmail.com
        </div>
        <div>
          Connect to my Linkedin: renatoferreira249@gmail.com
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__left">
        <div>
          Made by myself
        </div>
        <div>
        </div>
      </div>
      <div class="footer__bottom__right">
          Renato Melo 2020
      </div>
    </div>
  </div>
`;

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  } 
}
