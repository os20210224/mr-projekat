import { Component } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})

export class UserPageComponent {

  username: String = "username placeholder";

  constructor() { }

}
