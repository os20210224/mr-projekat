import {Component} from '@angular/core';
import {addIcons} from "ionicons";
import {rocketOutline, podiumOutline, personCircleOutline} from "ionicons/icons";
import {
  IonTabBar,
  IonIcon,
  IonTabButton,
  IonTabs,
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs]
})
export class TabsComponent  {
  constructor() {
    addIcons({
      rocketOutline,
      podiumOutline,
      personCircleOutline
    })
  }
}
