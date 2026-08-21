import { Component } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class ScoresPageComponent {

  constructor() { }

}
