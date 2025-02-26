import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
class NativeWebComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>NATIVE WEBCOMPONENT Un test!</h1>`;
  }
}
customElements.define('native-web-component', NativeWebComponent);

@Component({
  selector: 'app-my1-web-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<native-web-component></native-web-component>`,
})
export class My1WebComponent {
  constructor() {
    console.log('######## ANGULAR WEB COMPONENT constructor');
  }
}
