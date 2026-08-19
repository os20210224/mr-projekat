import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  imports: [
    IonContent
  ]
})
export class UserPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
