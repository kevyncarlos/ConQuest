import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuestionarioPageModule } from './questionario/questionario.module';
import { HomeAppPageModule } from './home-app/home-app.module';

@NgModule({
    imports: [
        QuestionarioPageModule,
        HomeAppPageModule
    ],
    exports: [
        QuestionarioPageModule,
        HomeAppPageModule
    ],
    providers: [
        HttpClient
    ],
})
export class PagesModule { }
