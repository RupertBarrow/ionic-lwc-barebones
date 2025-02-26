import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';

import { My1WebComponent } from './web-components/my1-web-component/my1-web-component';
import { My2LwcComponent } from './web-components/my2-lwc-component/my2-lwc-component';
// import { My3LwcAppComponent } from './web-components/my3-lwc-app/my3-lwc-app';

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [My1WebComponent, My2LwcComponent, /* My3LwcAppComponent, */ IonApp],
})
export class AppComponent {
  constructor() {
    console.log('######## ANGULAR AppComponent constructor');
  }
}
