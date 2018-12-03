import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtividadePage } from './atividade';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AtividadePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AtividadePage),
  ],
})
export class AtividadePageModule {}
