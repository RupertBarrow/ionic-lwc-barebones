import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import LWCCustom from '../../../../../../lwc/lwc-barebone/CustomElementConstructor demo/dist/app';
customElements.define('lwc-app', LWCCustom.CustomElementConstructor);

@Component({
  selector: 'app-my2-lwc-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<lwc-app></lwc-app>',
})
export class My2LwcComponent {
  constructor() {
    console.log('######## ANGULAR LWC COMPONENT constructor');
  }
}
