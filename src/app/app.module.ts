import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfessoresPage } from '../pages/professores/professores';
import { TabsPage } from '../pages/tabs/tabs';
import { AreaDoUsuarioPage } from '../pages/area-do-usuario/area-do-usuario';
import { GrupoListaPage } from '../pages/grupo-lista/grupo-lista';
import { GrupoDetalhePage } from '../pages/grupo-detalhe/grupo-detalhe';
import { ChatPage } from '../pages/chat/chat';
import {EscolhaProfessorPage} from '../pages/escolha-professor/escolha-professor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfessoresPage,
    IntroPage,
    AreaDoUsuarioPage,
    GrupoListaPage,
    GrupoDetalhePage,
    ChatPage,
    EscolhaProfessorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfessoresPage,
    IntroPage,
    AreaDoUsuarioPage,
    GrupoListaPage,
    GrupoDetalhePage,
    ChatPage,
    EscolhaProfessorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
