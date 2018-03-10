import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCandidatosPage } from '../pages/lista-candidatos/lista-candidatos';
import { CandidatoPage } from '../pages/candidato/candidato';
import { CandidatosPreSelecionadosPage } from '../pages/candidatos-pre-selecionados/candidatos-pre-selecionados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCandidatosPage,
    CandidatoPage,
    CandidatosPreSelecionadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCandidatosPage,
    CandidatoPage,
    CandidatosPreSelecionadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
