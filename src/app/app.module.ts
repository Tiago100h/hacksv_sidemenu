import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LojasPage } from '../pages/lojas/lojas';
import { LojaPage } from '../pages/loja/loja';
import { AlimentacaoPage } from '../pages/alimentacao/alimentacao';
import { LanchonetePage } from '../pages/lanchonete/lanchonete';
import { SlidesPage } from '../pages/slides/slides';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LojasPage,
    LojaPage,
    AlimentacaoPage,
    LanchonetePage,
    SlidesPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LojasPage,
    LojaPage,
    AlimentacaoPage,
    LanchonetePage,
    SlidesPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  
})

export class AppModule {}
