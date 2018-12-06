import { Injectable } from '@angular/core';
import { BaseDatabase } from '../base/base-database';
import { DatabaseProvider } from '../database/database';
import { Category } from '../../models/category';

@Injectable()
export class CategoryModelProvider extends BaseDatabase<Category> {
  protected tableName = "category"
  constructor(
    dbProvider: DatabaseProvider
  ) {
    super(dbProvider);
  }
}
