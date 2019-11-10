import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }

}
