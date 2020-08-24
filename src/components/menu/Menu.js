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
          class="menu__left__find hover-text"
          style="border-color: ${lightColor}"
          >
          <div
            style="color: ${primaryColor}">
            <slot name="point-icon"/>
          </div>
          Find a Store
        </div>
        <div class="bar__name--left">
          <span>Renato</span><span class="primary-color">Melo</span>
        </div>
      </div>
      <div class="bar__name--center">
        <span>Renato</span><span style="color: ${primaryColor}">Melo</span>
      </div>
      <div class="menu__right">
        <div class="menu__right__desktop-icon hover-text">
          <slot name="person-icon"/>
        </div>
        <div class="menu__right__desktop-icon hover-text"> 
          <slot name="heart-icon"/>
        </div>
        <div id ="testeid" class="hover-text">
          <slot name="shopping-icon"/>
        </div>
        <div class="search-container">
          <div class="search-container__search hover-text">
            <slot name="search-icon"/>
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
  } 
  
  set primaryColor(color) {
    this._primaryColor = color;
    this.updateTemplate();
    
  }
  set lightColor(color) {
    this._lightColor= color;
    this.updateTemplate();
    
  }
  set styleHoverElementFactory(styleElementFactory){
    this._styleHoverElement = styleElementFactory();
    this.updateTemplate();
  }

  updateTemplate() {
    template.innerHTML = getHtml(this._primaryColor, this._lightColor);
    this.shadowRoot.innerHTML = template.innerHTML;
    this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(this._styleHoverElement);
  }
}
