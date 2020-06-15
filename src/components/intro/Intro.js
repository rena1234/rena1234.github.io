const template = document.createElement('template');
import style from 'Components/intro/Intro.scss';

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

template.innerHTML = `
  <div class="intro-container">
    <div> 
      <h2 class="font-thin">HELLO</h2>
    </div>
    <div style="display: flex;">
      <slot name="dev-name"/>
    </div>
    <div><slot name="title"></div>
  </div>
  `;
export default class Intro extends HTMLElement {
  constructor() {
    super();
    const fontsStyle = `
      .font-thin{
        font-family: 'Roboto';
        color: green;
      }
      .intro-container{
        background:${this.getAttribute('background')}
      }
    `;
    console.log(this.getAttribute('background'));
    const styleJsElement = document.createElement('style');
    styleJsElement.type = "text/css";
    styleJsElement.appendChild(document.createTextNode(fontsStyle));

    this.attachShadow({ mode: 'open' });
    this.shadowRoot
      .appendChild(template.content.cloneNode(true));
    //this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(styleJsElement);
  }
}

window.customElements.define('dev-intro', Intro)

const url = 'https://api.github.com/users/rena1234';
fetch(url)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)});

const sourl = `https://api.stackexchange.com/2.2/users/${process.env.SO_ID}?&site=stackoverflow`
fetch(sourl)
  .then(data=>{return data.json()})
  .then(res=>{console.log({soreq: res})});

