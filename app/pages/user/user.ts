'use strict';

import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {Loading, NavController, Page} from 'ionic-angular';
import {provide, OnInit, bind} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {User} from '../../models/user';

@Page({
  templateUrl: 'build/pages/user/user.html',
  providers: [User],
  pipes: [TranslatePipe]
})

export class UserPage {
  
  loading: Loading;
  navCtrl: NavController;
  storage: StorageService;

  constructor(public translate: TranslateService, navCtrl: NavController, storage: StorageService,
    public user: User) {
    this.navCtrl = navCtrl;
    this.user = user;
    this.storage = storage;
    this.storage.createTable( user.TABLE_NAME, user.SCHEMA );
  }

  setLang(lang:string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.storage.set("appLang", lang);
    //this.storage.doQuery(`insert into ${this.user.TABLE_NAME}(lang) values("${lang}")`);
  }

}