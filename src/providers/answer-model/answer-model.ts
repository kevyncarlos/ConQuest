import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { DatabaseProvider } from '../database/database';
import { Answer } from '../../models/answer';

@Injectable()
export class AnswerModelProvider extends BaseDatabase<Answer> {
  protected tableName = "answer"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
