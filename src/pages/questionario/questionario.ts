import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeAppPage } from '../home-app/home-app';
import { UserModelProvider } from '../../providers/user-model/user-model';
import { User } from '../../models/user';
import { Category } from '../../models/category';
import { CategoryModelProvider } from '../../providers/category-model/category-model';
import { UserCategoryModelProvider } from '../../providers/user-category-model/user-category-model';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserModelProvider,
    private categoryProvider: CategoryModelProvider,
    private userCategoryProvider: UserCategoryModelProvider,
    private alertCtrl: AlertController
  ) { }

  public isDadosPessoais: boolean = false;
  public dadosPessoais: User;
  public categories: Category[];
  public questoes: Questao[];

  ionViewDidLoad(){
    this.categoryProvider.getAll()
    .then(cats => this.categories = cats.ToArray());

    this.categories.forEach(element => {
      this.questoes.push({
        id: element.id,
        nome: element.description,
        value: false
      })
    });
  }

  public enviar() {
    let flag: boolean;

    this.userProvider.create(this.dadosPessoais)
      .then((user) => flag = true);

    this.questoes.forEach(element => {
      if(element.value){
        this.userCategoryProvider.create({
          id: 0,
          user_id: this.dadosPessoais.id,
          category_id: element.id
        });
      }
    });

    if(flag){
      this.navCtrl.push(HomeAppPage);
    }else{
      this.alertCtrl.create({
        title: "Erro",
        message: "Falha ao registrar dados do questionário! Por favor reinicie o aplicativo ConQuest."
      }).present();
    }
  }
}

class Questao {
  id: number;
  nome: string;
  value: boolean;
}