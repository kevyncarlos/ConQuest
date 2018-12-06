import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { storage_keys } from '../config/global';
import { HomeAppPage } from '../pages/home-app/home-app';
import { DatabaseProvider } from '../providers/database/database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      dbProvider.openOrCreateDb();
      this.setHomePage()
    });
  }

  private setHomePage() {
    this.rootPage = localStorage.getItem(storage_keys.terms) ? HomeAppPage : HomePage;
  }
}

