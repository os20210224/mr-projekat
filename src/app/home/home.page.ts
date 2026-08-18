import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton, IonIcon, IonButton
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {personCircleOutline, podiumOutline, rocketOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon, IonButton],
})
export class HomePage {
  constructor() {
    addIcons({
      rocketOutline,
      podiumOutline,
      personCircleOutline
    })
  }
}
