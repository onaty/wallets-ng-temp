import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  amount = 4802030.00;
  hiddenAmount = '***.**';
  hideTextButton = 'Hide Balance';
  showTextButton = 'show Balance';
  hideAmountButton = true;
  currency = "₦";
  transactions = [
    {
      icon: "custom-transfer",
      details: "Transfer to Elegboja Seun",
      amount: 13000,
      date: "Feb 18"
    },
    {
      icon: "custom-request",
      details: "Recieved from Elegboja Seun",
      amount: 3650,
      date: "Feb 18"
    },
    {
      icon: "custom-airtime",
      details: "MTN Airtime",
      amount: 500,
      date: "Feb 18"
    },
    {
      icon: "custom-transfer",
      details: "Transfer to Elegboja Seun",
      amount: 13000,
      date: "Feb 18"
    },
    {
      icon: "custom-request",
      details: "Recieved from Elegboja Seun",
      amount: 3650,
      date: "Feb 18"
    },
    {
      icon: "custom-airtime",
      details: "MTN Airtime",
      amount: 500,
      date: "Feb 18"
    },
  ];
  constructor(public navCtrl: NavController) {

  }

  hideButton() {
    this.hideAmountButton = !this.hideAmountButton;
    if (this.hideAmountButton == true) {
      this.hideTextButton = "Hide Balance"
    }
    if (this.hideAmountButton == false) {
      this.hideTextButton = "Show Balance"
    }
  }
}
