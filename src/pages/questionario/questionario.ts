import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storage_keys } from '../../config/global';
import { HomeAppPage } from '../home-app/home-app';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  public isDadosPessoais: boolean = false;
  public dadosPessoais: any = {
    nome: null as string,
    dtNasc: null as Date,
    sexo: null as string
  }

  public questoes: any[] = [
    {
      nome: 'Opção 1',
      value: false
    }, {
      nome: 'Opção 2',
      value: false
    }, {
      nome: 'Opção 3',
      value: false
    }, {
      nome: 'Opção 4',
      value: false
    }, {
      nome: 'Opção 5',
      value: false
    }, {
      nome: 'Opção 6',
      value: false
    }, {
      nome: 'Opção 7',
      value: false
    }, {
      nome: 'Opção 8',
      value: false
    }, {
      nome: 'Opção 9',
      value: false
    }, {
      nome: 'Opção 10',
      value: false
    }, {
      nome: 'Opção 11',
      value: false
    }, {
      nome: 'Opção 12',
      value: false
    }, {
      nome: 'Opção 13',
      value: false
    }, {
      nome: 'Opção 14',
      value: false
    }, {
      nome: 'Opção 15',
      value: false
    }, {
      nome: 'Opção 16',
      value: false
    }
  ]
  public enviar() {
    localStorage.setItem(storage_keys.terms, 'true');
    this.navCtrl.push(HomeAppPage);
  }
}
