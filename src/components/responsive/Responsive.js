import style from 'Components/responsive/Responsive.scss'
const template = document.createElement('template');

template.innerHTML = `
  <div class="container">
    <div class="first-box">
      <span class="title">
        Check this page responsivity
      </span>
    </div>
    <div class="second-box">
      <div class="second-box__text-container">
        <span class="subtitle">
          This page has Desktop, Tablet and Phone designs. Change your resolution to see
        </span>
      </div>
    </div>
  </div>
`;

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

export default class Responsive extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  } 
}
