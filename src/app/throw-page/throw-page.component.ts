import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-throw-page',
  templateUrl: './throw-page.component.html',
  styleUrls: ['./throw-page.component.scss'],
  imports: [
    IonContent,
    IonButton
  ]
})
export class ThrowPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
