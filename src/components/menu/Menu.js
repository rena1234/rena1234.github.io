import style from 'Components/menu/Menu.scss';
const template = document.createElement('template');

const getHtml= (primaryColor, lightColor) => {
  return `
    <div class="menu__top">
      <div class="menu__left">
        <div class="menu__left__bars">
          <slot name="menu-icon"/>
        </div>
        <div
          data-section="footer-section"
          class="menu__left__find hover-text link-button"
          style="border-color: ${lightColor}"
          >
          <div
            style="color: ${primaryColor}">
            <slot name="person-icon"/>
          </div>
          contact me 
        </div>
        <div class="bar__name--left">
          <span>Renato</span><span class="primary-color">Melo</span>
        </div>
      </div>
      <div class="bar__name--center">
        <span>Renato</span><span style="color: ${primaryColor}">Melo</span>
      </div>
      <div class="menu__right">
        <div 
          data-section="responsive-section"
          class="menu__right__desktop-icon hover-text link-button"> 
          <slot name="aspect-icon"/>
        </div>
        <div 
          data-section="experience-section"
          class="hover-text link-button">
          <slot name="shopping-icon"/>
        </div>
        <div 
          data-section="stack-section"
          class="search-container link-button">
          <div class="search-container__search hover-text">
            <slot name="integration-icon"/>
          </div>
        </div>
      </div>
    </div>
  `;
}

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));


export default class Menu extends HTMLElement {
  constructor() {
    super();
    this._primaryColor = 'black';
    this._lightColor= 'black';
    this._styleHoverElement = document.createElement('style');
    template.innerHTML = getHtml(this._primaryColor); 
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
    this.initButtons();
  } 
  
  initButtons() {
    /*
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
    */
    const linkButtons = this.shadowRoot.querySelectorAll('.link-button');
    linkButtons.forEach( btn => {
      btn.addEventListener('click', () => {
        const section = document.querySelector(btn.dataset.section);
        section.scrollIntoView({behavior: 'smooth'});
      });
    });
  }

}
