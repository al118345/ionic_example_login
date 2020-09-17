import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {AuthoServiceService} from '../../services/autho-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthoServiceService, private alertCtrl: AlertController, private loadingCtrl:
      LoadingController, private router: Router ) { }


  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
          if (allowed) {
            this.router.navigateByUrl('/home');
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
    let alert = await this.alertCtrl.create({
      header: 'Fail',
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }

}
