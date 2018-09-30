import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }

  itemTapped() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }
}