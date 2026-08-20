import { CommonModule, DecimalPipe  } from '@angular/common';
import {
  Component,
  OnDestroy,
} from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-throw-page',
  templateUrl: './throw-page.component.html',
  styleUrls: ['./throw-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    IonButton,
    IonContent,
    IonHeader,
    IonText,
    IonTitle,
    IonToolbar,
  ],
})
export class ThrowPageComponent {
  sensorData: any = null;

  async testSensors() {
    await Motion.addListener('accel', event => {
      this.sensorData = {
        accelerometer: {
          x: event.acceleration?.x,
          y: event.acceleration?.y,
          z: event.acceleration?.z,
        },
        gravity: {
          x: event.accelerationIncludingGravity?.x,
          y: event.accelerationIncludingGravity?.y,
          z: event.accelerationIncludingGravity?.z,
        },
        gyroscope: {
          alpha: event.rotationRate?.alpha,
          beta: event.rotationRate?.beta,
          gamma: event.rotationRate?.gamma,
        },
      };
    });
  }
}
