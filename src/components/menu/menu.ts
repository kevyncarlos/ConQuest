import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtividadePage } from '../../pages/atividade/atividade';
import { DesafioPage } from '../../pages/desafio/desafio';
import { UserTaskModelProvider } from '../../providers/user-task-model/user-task-model';
import { TaskModelProvider } from '../../providers/task-model/task-model';
import { List } from 'linqts';
import { Task } from '../../models/task';
import { User_Task } from '../../models/user_task';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  @Input() content: any;
  public pagesDesafio: Array<{title: string, id: number}>;
  public pagesAtividade: Array<{title: string, id: number}>;

  constructor(
    private navCtrl: NavController,
    // private userTaskProvider: UserTaskModelProvider,
    // private taskProvider: TaskModelProvider
  ) { }

  ionViewDidLoad(){
    let user_tasks: List<User_Task>;
    let desafios: List<Task>;
    let atividades: List<Task>;

    // this.userTaskProvider.getAll()
    //   .then(ut => user_tasks = ut.Where(c => !c.finished && c.date_ref.toDateString() == new Date().toDateString()));

    let tasks: List<Task>;

    // this.taskProvider.getAll()
    //   .then(t => tasks = t.Where(c => user_tasks.Select(c => c.id).Contains(c.id)));
    
    desafios = tasks.Where(c => c.type == 0);
    atividades = tasks.Where(c => c.type == 1);
  }

  public navigateDesafio(id: number) {
    this.navCtrl.push(DesafioPage, {'id': id})
  }

  public navigateAtividade(id: number) {
    this.navCtrl.push(AtividadePage, {'id': id})
  }
}
