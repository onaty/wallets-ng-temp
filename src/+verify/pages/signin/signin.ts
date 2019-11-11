import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../../+private/pages/tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  login() {
this.navCtrl.setRoot(TabsPage)
  }

}
