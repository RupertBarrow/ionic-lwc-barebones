import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import LWCCustom from '../../../../../../../../lwc/lwc-barebone/CustomElementConstructor demo/dist/app';
import LWCCustom from '../../../../../../lwc-component/dist/app';
customElements.define('lwc-component', LWCCustom.CustomElementConstructor);

@Component({
  selector: 'app-my2-lwc-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<lwc-component></lwc-component>',
})
export class My2LwcComponent {
  constructor() {
    console.log('######## ANGULAR LWC COMPONENT constructor');
  }
}
