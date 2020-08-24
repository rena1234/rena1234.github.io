import style from 'Components/experience/Experience.scss'
const template = document.createElement('template');

const getHtml = (events) => {

  const eventsHtml = events.reduce( (html, e) => {
      return `
        ${html}
        <div class="experience__list__date description-text">
          ${e.startYear}-${e.endYear}
        </div>
        <div class="title primary-color">
          ${e.company}
        </div>
        <div class="subtitle">
          ${e.position}
        </div>
        <div class="light-text description-text">
          ${e.stack}
        </div>
        <div class="separator"></div>
      `; 
    }
  ,''); 
  return `
    <div class="experience">
      <div class="experience__top">
        <div class="subtitle light-text">
         EXPERIENCE
        </div>
        <div class="title primary-color">
          I've worked at: 
        </div>
      </div>
      <div class="experience__list">
        <div class="separator"></div>
        ${eventsHtml}
      </div>
    </div>
  `;
}

const events = [
  {
    company: 'Lemobs',
    startYear: 2018,
    endYear: 2019,
    position: 'Web Developer',
    stack: 'Laravel, PHP, Angular, Typescript, Javascript, CSS, HTML',
  },
  {
    company: 'Sinn',
    startYear: 2019,
    endYear: 2020,
    position: 'Web Developer',
    stack: 'Angular, Typescript, Javascript, SCSS',
  },
];

const styleElement = document.createElement('style');
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));

export default class Experience extends HTMLElement {
  constructor() {
    super();
    this.events = events; 
    this.attachShadow({mode: 'open'});
    this.updateTemplate();
    this.shadowRoot.appendChild(styleElement);
  }
  
  updateTemplate() {
    template.innerHTML = getHtml(events);
    this.shadowRoot.innerHTML = template.innerHTML;
  }
}
