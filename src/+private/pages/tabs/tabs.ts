import { OthersPage } from './../others/others';
import { CardsPage } from './../cards/cards';
import { TransactionsPage } from './../transactions/transactions';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransactionsPage;
  tab3Root = CardsPage;
  tab4Root = OthersPage;

  constructor() {

  }
}
