import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { DatabaseProvider } from '../database/database';
import { Task } from '../../models/task';

@Injectable()
export class TaskModelProvider extends BaseDatabase<Task> {
  protected tableName = "task"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
