import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtividadePage } from '../../pages/atividade/atividade';
import { DesafioPage } from '../../pages/desafio/desafio';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  @Input() content: any;
  public pagesDesafio: Array<{title: string, id: number}>;
  public pagesAtividade: Array<{title: string, id: number}>;

  constructor(
    private navCtrl: NavController
  ) {
    this.pagesDesafio = [
      {
        title: "Desafio 1",
        id: 1
      },
      {
        title: "Desafio 2",
        id: 1
      },
      {
        title: "Desafio 3",
        id: 1
      }
    ]
    this.pagesAtividade = [
      {
        title: "Atividade 1",
        id: 1
      },
      {
        title: "Atividade 2",
        id: 1
      },
      {
        title: "Atividade 3",
        id: 1
      }
    ]
  }

  public navigateDesafio(id: number) {
    this.navCtrl.push(DesafioPage, {'id': id})
  }

  public navigateAtividade(id: number) {
    this.navCtrl.push(AtividadePage, {'id': id})
  }
}
