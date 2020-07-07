const template = document.createElement('template');
template.innerHTML = `
  <div> 
    LINK 
  </div>
  <div style="display: flex;">
    <slot name="link-icon"/>
  </div>
  `;
export default class Link extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
      this.shadowRoot
        .appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('dev-link', Link)
