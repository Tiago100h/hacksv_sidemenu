import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LojasPage } from '../pages/lojas/lojas';
import { LojaPage } from '../pages/loja/loja';
import { AlimentacaoPage } from '../pages/alimentacao/alimentacao';
import { LanchonetePage } from '../pages/lanchonete/lanchonete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LojasPage,
    LojaPage,
    AlimentacaoPage,
    LanchonetePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LojasPage,
    LojaPage,
    AlimentacaoPage,
    LanchonetePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  
})

export class AppModule {}
