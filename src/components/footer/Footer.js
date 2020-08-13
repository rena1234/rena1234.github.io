import style from 'Components/footer/Footer.scss'
const template = document.createElement('template');

template.innerHTML = `
  <div class="footer">
    <div class="footer__top">
      <div class="footer__top__social">
        <div class="footer__top__social__icons">
          <div>I</div>
          <div>F</div>
          <div>T</div>
        </div>
        <button class="footer__top__social_button">
          CONTACT US
        </button>
      </div>
      <div class="separator__tablet"></div>
      <div class="footer__sign-up-text">
        Sign up for our newsletter
      </div>  
      <div class="footer__top__form">
        <input type="text" placeholder="Enter your e-mail">
        <button class="highlight-button">
          Subsbcribe
        </button>
      </div>
      <div class="help">
        <div class="help__text">
          PRIVACY POLICY 
        </div>
        <div class="help__text">
          RETURNS AND EXCHANGES 
        </div>
        <div class="help__text">
          TRACK ORDERS 
        </div>
      </div>
      <div class="separator"></div>
      <div class="flex-on-tablet">
        <div class="footer__contact">
          CONTACT US
          <div>
            owner@example.com
          </div> 
        </div> 
        <div class="footer__support">
          <div>
            SUPPORT
          </div>
          <div class="footer__top__support__items">
            <div class="subtitle">
              GIA
            </div>
            <div class="subtitle">
              GIA
            </div>
            <div class="subtitle">
              GIA
            </div>
          </div>
        </div>
      </div>
      <div class="footer__payment">
        PAYMENT METHODS 
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__left">
        <div>
        </div>
        <div>
        </div>
      </div>
      <div class="footer__bottom__right">
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
