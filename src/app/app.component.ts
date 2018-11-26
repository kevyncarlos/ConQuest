import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { storage_keys } from '../config/global';
import { HomeAppPage } from '../pages/home-app/home-app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = localStorage.getItem(storage_keys.terms) ? HomeAppPage : HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

