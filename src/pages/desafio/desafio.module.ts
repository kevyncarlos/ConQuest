import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesafioPage } from './desafio';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DesafioPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DesafioPage),
  ],
})
export class DesafioPageModule {}
