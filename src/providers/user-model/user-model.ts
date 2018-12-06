import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { User } from '../../models/user';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class UserModelProvider extends BaseDatabase<User> {
  protected tableName = "user"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
