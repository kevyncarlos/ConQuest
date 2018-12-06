import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { DatabaseProvider } from '../database/database';
import { User_Category } from '../../models/user_category';

@Injectable()
export class UserCategoryModelProvider extends BaseDatabase<User_Category> {
  protected tableName = "user_category"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
