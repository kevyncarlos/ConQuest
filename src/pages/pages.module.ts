import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuestionarioPageModule } from './questionario/questionario.module';
import { HomeAppPageModule } from './home-app/home-app.module';
import { ComponentsModule } from '../components/components.module';
import { DesafioPageModule } from './desafio/desafio.module';
import { AtividadePageModule } from './atividade/atividade.module';

@NgModule({
    imports: [
        ComponentsModule,
        QuestionarioPageModule,
        HomeAppPageModule,
        DesafioPageModule,
        AtividadePageModule
    ],
    exports: [
        ComponentsModule,
        QuestionarioPageModule,
        HomeAppPageModule,
        DesafioPageModule,
        AtividadePageModule
    ],
    providers: [
        HttpClient
    ],
})
export class PagesModule { }
