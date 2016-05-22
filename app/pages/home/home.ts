'use strict';

import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {Page} from 'ionic-angular';
import {OnInit} from '@angular/core';

import {StorageService} from '../../services/storage.service';
import {UserPage} from '../user/user';

@Page({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe]
})

export class HomePage implements OnInit{

  constructor(public translate: TranslateService, public storage: StorageService) {
    this.translate.get("salute")
      .subscribe(
      (data) => {
        console.log(`${data} from home.ts`);
      },
      (error) => {
        console.log(error);
      });      
  }
  
  ngOnInit() {
    console.log("init home.ts");
  }

}