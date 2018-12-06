import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { SQLite } from '@ionic-native/sqlite'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
// import { DatabaseProvider } from '../providers/database/database';
// import { UserModelProvider } from '../providers/user-model/user-model';
// import { CategoryModelProvider } from '../providers/category-model/category-model';
// import { UserCategoryModelProvider } from '../providers/user-category-model/user-category-model';
// import { AnswerModelProvider } from '../providers/answer-model/answer-model';
// import { TaskModelProvider } from '../providers/task-model/task-model';
// import { UserTaskModelProvider } from '../providers/user-task-model/user-task-model';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    // SQLite,
    // DatabaseProvider,
    // UserModelProvider,
    // CategoryModelProvider,
    // UserCategoryModelProvider,
    // AnswerModelProvider,
    // TaskModelProvider,
    // UserTaskModelProvider
  ]
})
export class AppModule {}
