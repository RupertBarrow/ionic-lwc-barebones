import { Component } from '@angular/core';

import { IonHeader, IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-my-angular-component',
  standalone: true,
  templateUrl: './my-angular-component.html',
  imports: [IonHeader, IonContent, IonPage, IonTitle, IonToolbar],
})
export class MyAngularComponent {
  constructor() {
    console.log('######## ANGULAR WEB COMPONENT constructor');
  }
}
