import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { DatabaseProvider } from '../database/database';
import { User_Task } from '../../models/user_task';

@Injectable()
export class UserTaskModelProvider extends BaseDatabase<User_Task> {
  protected tableName = "user_task"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
