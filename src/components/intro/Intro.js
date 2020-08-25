import style from 'Components/intro/Intro.scss'

const template = document.createElement('template');

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

const images = [
  {
    url: 'assets/developer-4027337_1280.png',
    imageClasses: 'image contain-image',
    innerHtml: '<div class="image-container__text-bottom primary-color light-background">Experience with remote work</div>'
  },
  {
    url: 'assets/photo5023836475086710854.jpg',
    imageClasses: 'image',
    innerHtml: '<div class="image-container__text-bottom primary-color dark-background">I\'m a Web Developer</div>'
  },
  {
    //url: 'assets/photo5023836475086710854.jpg',
    imageClasses: 'image light-background center-text',
    innerHtml: '<span class="title primary-color">2 and a half years experience</span>'
  },
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
          background-image: url(${item.url});
          "
          class="${item.imageClasses} unselected">
          ${item.innerHtml}
        </div>
      `
      offset += 100;
    } else {

      html += 
      `
        <div 
          style="left: ${offset}vw;
          background-image: url(${item.url});
          "
          class="${item.imageClasses} selected">
          ${item.innerHtml}
        </div>
      `
      offset += 100;
    }
  }
  return html;
}


template.innerHTML = `
  <div class="discover">
    <div class="left-bar">
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
        class="left-bar__line">
      </div>  
      <div class="left-bar__text">
        DISCOVER MORE
      </div>
      <div class="left-bar__bottom">
      </div>
    </div>
    <div class="image-container">
      ${getimagesHtml(images)}
    </div>
  </div>
  <div class="bottom-bar">
    <div class="bottom-bar__numbers">
      <div 
        data-index="0"
        class="number first hover-text">
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
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
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
}
