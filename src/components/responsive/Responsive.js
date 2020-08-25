import style from 'Components/responsive/Responsive.scss'
const template = document.createElement('template');

template.innerHTML = `
  <div class="responsive">
    <div class="responsive__first-box">
    </div>
    <div class="responsive__second-box">
      <div class="responsive__second-box__text-container">
        <div class="title">
          Check this page responsivity
        </div>
        <div class="subtitle">
          This page has Desktop, Tablet and Phone designs. Change your resolution to see
        </div>
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
