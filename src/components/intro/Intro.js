import style from 'Components/intro/Intro.scss'

const template = document.createElement('template');

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

const expanderClick = () => console.log('it works');
const teste = () => expanderClick();

const getHtml = (primaryColor) => {
    return `
      <div class="discover">
        <div class="left-bar light-text">
          <div 
            data-index="0"
            class="number first hover-text"
            >
            1
          </div>
          <div 
            data-index="1"
            class="number hover-text">
            2
          </div>
          <div 
            data-index="2"
            class="number hover-text">
            3
          </div>
          <div 
            class="left-bar__line"
            style="background: ${primaryColor}">
          </div>  
          <div class="left-bar__text">
            DISCOVER MORE
          </div>
          <div class="left-bar__bottom">
          </div>
        </div>
        <div class="image-container">
          <div class="image-container__text">I'm a Web Developer</div>
          <div class="image-container__expander">
            <expander-element>
              <div slot="text">
                EXPLORE
              </div>
            </expander-element>
          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="bottom-bar__numbers">
          <div 
            data-index="0"
            class="number first hover-text"
            style="border-color: ${primaryColor}">
            1
          </div>
          <div 
            data-index="1"
            class="number hover-text">
            2
          </div>
          <div 
            data-index="2"
            class="number hover-text">
            3
          </div>
        </div>
      </div>
    `;
}

export default class Intro extends HTMLElement {
  constructor() {
    super();
    this._styleHoverElement = document.createElement('style');
    this._primaryColor = 'black';
    template.innerHTML = getHtml(this._primaryColor);
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
    this.initExpander();
    this.initNumberButtons();
  } 

  initNumberButtons() {
    const scrollElements = [
      document.querySelector('stack-section'),
      document.querySelector('experience-section'),
      document.querySelector('github-section'),
    ];
    const numberButtons = this.shadowRoot.querySelectorAll('.number');
    numberButtons.forEach( btn => {
      btn.addEventListener('click', () => {
        scrollElements[btn.dataset.index].scrollIntoView({behavior: 'smooth'});
      });
    });
  }
  
  set primaryColor(color){
    this._primaryColor = color;
    this.updateTemplate();
    this.initExpander();
  }

  set styleHoverElementFactory(styleElementFactory){
    this._styleHoverElement = styleElementFactory();
    this.updateTemplate();
  }

  initExpander() {
    const expander = this.shadowRoot.querySelector('expander-element');
    expander.onClick = teste;
    expander.borderColor = this._primaryColor;  
    expander.color = 'white';  
  }

  updateTemplate(){
    template.innerHTML = getHtml(this._primaryColor);
    this.shadowRoot.innerHTML = template.innerHTML;
    this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(this._styleHoverElement);
    this.initExpander();
  }
}
