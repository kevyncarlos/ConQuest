import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { UserTaskModelProvider } from '../../providers/user-task-model/user-task-model';
import { User_Task } from '../../models/user_task';
import { Data } from '../../config/data';

@IonicPage()
@Component({
  selector: 'page-home-app',
  templateUrl: 'home-app.html',
})
export class HomeAppPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    // private userTaskProvider: UserTaskModelProvider
  ) { }

  public items: any[] = [];
  public userTask: User_Task[];
  itemExpandHeight: number = 100;

  ionViewDidLoad(){
    // this.userTaskProvider.getAll()
    // .then(ut => this.userTask = ut.Where(c => c.finished).ToArray());
    this.userTask = Data.Users_Tasks.filter(c => c.finished)

    this.userTask.forEach(() => {
      this.items.push({expanded: false})
    });
  }

  expandItem(item){
    this.items.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
  }
}
