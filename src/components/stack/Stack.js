import style from 'Components/stack/Stack.scss'
const template = document.createElement('template');

const stack = [
  'php',
  'laravel',
  'Javascript',
  'Typescript',
  'Angular',
  'Webpack',
  'Sass',
  'Python',
  'Git',
]
template.innerHTML = `
  <div class="stack">
    <div class="stack__top">
      <div class="title primary-color">
       My Stack
      </div>
    </div>
    <div class="stack__list">
      <div class="separator"></div>
      <div class="stack__list__container">
        ${stack.reduce((str, t) => `${str}<span class="subtitle">${t}</span>`,'')}
      </div>
    </div>
  </div>
  `;

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

export default class Stack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  } 
}
