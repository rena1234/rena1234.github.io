import style from 'Components/menu/Menu.scss';
const template = document.createElement('template');

/*
        <div class="menu__left__bars">
          <slot name="menu-icon"/>
        </div>
        */
template.innerHTML = `
    <div class="menu__top">
      <div class="menu__left">
        <div
          data-section="footer-section"
          class="menu__left__find hover-text link-button tooltip"
          >
          <button>
            <div>
              <slot name="person-icon"/>
            </div>
          </button>
          contact me 
          <span class="tooltip-text">contact me</span>
        </div>
        <div class="bar__name--left">
          <span>Renato</span><span class="primary-color">Melo</span>
        </div>
      </div>
      <div class="bar__name--center">
        <span>Renato</span><span class="primary-color">Melo</span>
      </div>
      <div class="menu__right">
        <div 
          data-section="responsive-section"
          class="menu__right__desktop-icon hover-text link-button tooltip"> 
          <span class="tooltip-text">responsive design</span>
          <button>
            <slot name="aspect-icon"/>
          </button>
        </div>
        <div 
          data-section="experience-section"
          class="hover-text link-button tooltip">
          <span class="tooltip-text">my experience</span>
          <button>
            <slot name="shopping-icon"/>
          </button>
        </div>
        <div 
          data-section="stack-section"
          class="hover-text link-button tooltip">
          <span class="tooltip-text">my stack</span>
          <button>
            <slot name="integration-icon"/>
          </button>
        </div>
      </div>
    </div>
  `;

/*
        <div 
          data-section="stack-section"
          class="search-container link-button tooltip">
          <div class="search-container__search hover-text">
            <slot name="integration-icon"/>
          </div>
          <span class="tooltip-text">my stack</span>
        </div>
        */

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));


export default class Menu extends HTMLElement {
  constructor() {
    super();
    this._primaryColor = 'black';
    this._lightColor= 'black';
    this._styleHoverElement = document.createElement('style');
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
    this.initButtons();
  } 
  
  initButtons() {
    const linkButtons = this.shadowRoot.querySelectorAll('.link-button');
    linkButtons.forEach( btn => {
      btn.addEventListener('click', () => {
        const section = document.querySelector(btn.dataset.section);
        section.scrollIntoView({behavior: 'smooth'});
      });
    });
  }

}
