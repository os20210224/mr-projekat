import {Component, ViewChild} from '@angular/core';
import {addIcons} from "ionicons";
import {rocketOutline, podiumOutline, personCircleOutline} from "ionicons/icons";
import {
  IonTabBar,
  IonIcon,
  IonContent,
  IonHeader,
  IonTab,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar, IonRouterOutlet,
} from "@ionic/angular/standalone";
import {ThrowPageComponent} from "../throw-page/throw-page.component";
import {ScoresPageComponent} from "../scores-page/scores-page.component";
import {UserPageComponent} from "../user-page/user-page.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, ThrowPageComponent, ScoresPageComponent, UserPageComponent, IonRouterOutlet]
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
