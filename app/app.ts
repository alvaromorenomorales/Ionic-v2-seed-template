'use strict';

import 'es6-shim';
import {App, Platform, Loading, IonicApp} from 'ionic-angular';
import {bootstrap } from '@angular/platform-browser-dynamic';
import {provide, OnInit, bind} from '@angular/core';
import {Http} from '@angular/http';
import {StatusBar} from 'ionic-native';
import {
  TranslateService, TranslateLoader, TranslateStaticLoader, TranslatePipe
} from 'ng2-translate/ng2-translate';   

import {StorageService} from './services/storage.service';

import {config} from './app.config';
import {HomePage} from './pages/home/home';
import {UserPage} from './pages/user/user';

@App({
  templateUrl: 'build/app.html',
  config: {
    mode: 'md'
  },
  providers: [
    provide(TranslateLoader, {
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'build/public/i18n', '.json'), deps: [Http] 
    }),
    TranslateService, StorageService],
  pipes: [TranslatePipe]
})

export class MyApp implements OnInit {

  public appConfig: any = config;
  public rootPage: any = HomePage;
  
  appPages;
  homePage: HomePage;
  userPage: UserPage;

  constructor( public app: IonicApp, platform: Platform,
    public translate: TranslateService, public storage: StorageService) {
      
    platform.ready().then(() => {
      // StatusBar.styleDefault();
    });
    this.app = app;
    this.storage = storage;
  }

  ngOnInit() {
    //Initial config for i18n
    let userLang = navigator.language.split('-')[0];
    userLang = (this.appConfig.languages.list.indexOf(userLang)>-1)? userLang: this.appConfig.languages.default;
    this.translate.setDefaultLang(this.appConfig.languages.default);
    this.translate.use(userLang);
    
    this.appPages = [
      { title: 'home', component: HomePage, icon: 'home' },
      { title: 'profile', component: UserPage, index: 1, icon: 'person' }
    ];
  }
  
  openPage(page) {
    this.rootPage = page.component;
  }


}