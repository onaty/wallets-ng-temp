
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import { SigninPage } from './pages/signin/signin';



@NgModule({
    declarations: [
      SigninPage
    ],
    imports: [
      IonicModule,
    ],
    bootstrap:[IonicApp],
    entryComponents: [
      SigninPage
    ],
    providers: [
  
    ]
  })
  
  export class VerifyModule {}
  