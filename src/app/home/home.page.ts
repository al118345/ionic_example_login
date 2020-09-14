import { Component } from '@angular/core';
import {ComunicacionesService} from '../services/comunicaciones.service';
import {AuthoServiceService} from '../services/autho-service.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  registerCredentials = { email: '', password: '' };

  constructor(public alertController: AlertController , private auth: AuthoServiceService, private router: Router) {
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
          if (allowed) {
            this.router.navigateByUrl('/test');
          } else {
            this.showError("Access Denied");
          }
        },
        error => {
          this.showError(error);
        });
  }

  showLoading() {
  }

  async showError(text) {
    let alert = await this.alertController.create({
      header: 'Fail',
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }
}
