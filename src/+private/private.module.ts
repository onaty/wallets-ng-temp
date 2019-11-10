
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TransactionsPage } from './pages/transactions/transactions';
import { HomePage } from './pages/home/home';
import { CardsPage } from './pages/cards/cards';
import { TabsPage } from './pages/tabs/tabs';
import { OthersPage } from './pages/others/others';


@NgModule({
    declarations: [
        TransactionsPage,
        HomePage,
        CardsPage,
        TabsPage,
        OthersPage
    ],
    imports: [
        IonicModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TransactionsPage,
        HomePage,
        CardsPage,
        TabsPage,
        OthersPage
    ],
    providers: [

    ]
})

export class PrivateModule { }
