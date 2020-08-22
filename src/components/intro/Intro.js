import style from 'Components/intro/Intro.scss'

const template = document.createElement('template');

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

const expanderClick = () => console.log('it works');
const teste = () => expanderClick();

const images = [
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  },
  {
    url: 'assets/photo5023836475086710854.jpg' 
  }
]

const getimagesHtml = (images) => {
  const selectedIndex = 1;
  let offset = ((100 * selectedIndex)) * -1;
  let html = '';

  for(const [index, item] of images.entries()){
    if( index !== selectedIndex ) {
      html += 
      `
        <div 
          style="left: ${offset}vw;
          background: url(${item.url});background-size: cover;
          "
          class="image unselected">
        </div>
      `
      offset += 100;
    } else {

      html += 
      `
        <div 
          style="left: ${offset}vw;
          background: url(${item.url});background-size: cover;
          "
          class="image selected">
        </div>
      `
      offset += 100;
    }
  }
  return html;
}

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
          ${getimagesHtml(images)}
          <div class="image-container__text">This Page is under construction</div>
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


const moveNext = (items, wrapper) => {
  const firstItem = wrapper.querySelector('.image');
  const firstItemClone = firstItem.cloneNode(true);
  wrapper.removeChild(firstItem);
  const itemVw = (items.length - 1) * 100;
  firstItemClone.style['left'] = `${itemVw}vw`;
  wrapper.appendChild(firstItemClone);
  const newItems = wrapper.querySelectorAll('.image');
  for(const [index, item] of newItems.entries()){
    const stringPosition = item.style['left'];
    const itemVw = parseInt(stringPosition.slice(0,stringPosition.length));
    item.style['left'] = `${itemVw - 100}vw`;
  }

  for(const [index, item] of newItems.entries()){
    if(item.classList.contains('selected')){
      item.classList.remove('selected');
      item.classList.add('unselected');
      newItems[index + 1].classList.add('selected');
      const stringPosition = newItems[index + 1].style['left'];
      const itemVw = parseInt(stringPosition.slice(0,stringPosition.length - 2));
      newItems[index + 1].style['left'] = `${itemVw}vw`;
      newItems[index + 1].classList.remove('unselected');
      return true;
    }
  }
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
    const wrapper = this.shadowRoot.querySelector('.image-container');
    const images = this.shadowRoot.querySelectorAll('.image');
    const interval = setInterval(() => moveNext(images, wrapper), 4000);
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
