import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAppPage } from './home-app';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeAppPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomeAppPage),
  ],
})
export class HomeAppPageModule {}
