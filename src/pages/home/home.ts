import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  public prosseguir() {
    let alert = this.alertCtrl.create({
      title: "Como você está?",
      message: "Temos um pequeno questionário para você"
      + " responder... Nosso objetivo é te conhecer um"
      + " pouco melhor e te oferecer a melhor experiência possível!",
      buttons: [{
        text: "OK",
        handler: () => {
          this.navCtrl.push(QuestionarioPage);
        }
      }]
    })

    alert.present();
  }
}
