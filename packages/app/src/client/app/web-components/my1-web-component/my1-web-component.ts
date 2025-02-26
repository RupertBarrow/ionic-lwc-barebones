import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import './native-web-component';

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
