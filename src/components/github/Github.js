import style from 'Components/github/Github.scss'
const template = document.createElement('template');

template.innerHTML = `
  <div class="container">
    <div class="first-box">
      <div class="subtitle light-text">
        <a href="https://github.com/rena1234/rena1234.github.io">Click to check this page code</a>
      </div>
    </div>
    <div class="second-box">
      <span class="title primary-color">Take a look at my github</span>
    </div>
  </div>
`;

const url = 'https://api.github.com/users/rena1234';
fetch(url)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)});

const repoUrl = 'https://api.github.com/users/rena1234/repos';
fetch(repoUrl)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)});

const mediumUrl = 'https://api.medium.com/v1/users/renatoferreira249/publications';
fetch(mediumUrl)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)});

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

export default class Github extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  } 
}
