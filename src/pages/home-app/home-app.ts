import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserModelProvider } from '../../providers/user-model/user-model';

@IonicPage()
@Component({
  selector: 'page-home-app',
  templateUrl: 'home-app.html',
})
export class HomeAppPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserModelProvider
  ) { }

  public id: number = 1;

  public get() {
    let user = this.userProvider.get(this.id)
    user.then(user => {
      console.log(user)
    })
  }

  public getAll() {
    let users = this.userProvider.getAll()
    users.then((users) => {
      console.log(users)
    })
  }

  public insert() {
    this.userProvider.create({
      id: 0,
      name: "adsfasdf",
      date: (new Date()),
      finished: false
    })
  }
}
