import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import {BackgroundMode} from '@ionic-native/background-mode';

import { HomePage } from '../pages/home/home';
import { HomeAppPage } from '../pages/home-app/home-app';
// import { DatabaseProvider } from '../providers/database/database';
// import { UserModelProvider } from '../providers/user-model/user-model';
// import { UserTaskModelProvider } from '../providers/user-task-model/user-task-model';
import { Data } from '../config/data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen
    // dbProvider: DatabaseProvider, 
    // private backgroundMode: BackgroundMode,
    // private userProvider: UserModelProvider,
    // private userTaskProvider: UserTaskModelProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // dbProvider.openOrCreateDb();
      this.setHomePage()

      // this.backMode();
    });
  }

  private setHomePage() {
    let userFlag: boolean;
    // this.userProvider.getAll()
    //   .then((user) => userFlag = user.Any())

    userFlag = Data.Users.length > 0 ? true : false;
    
    this.rootPage = userFlag ? HomeAppPage : HomePage;
  }

  // private backMode(){
  //   this.backgroundMode.enable();
  //   this.backgroundMode.on('activate').subscribe(() => {
  //     let data = new Date();
  //     let dataRef = new Date(data.getFullYear(), data.getMonth(), data.getDate(), 7, 0, 0, 0);
  //     if(data == dataRef){
        
  //     }
  //   });
  // }
}

