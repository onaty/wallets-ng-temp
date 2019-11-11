import { Component } from '@angular/core';
import { NavController, NavParams, App, Platform } from 'ionic-angular';
import { SigninPage } from '../../../+verify/pages/signin/signin';


@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    public platform: Platform) {
  }
  logout() {

    this.app.getRootNav().setRoot(SigninPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }

}
