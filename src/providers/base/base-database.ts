
import { List } from "linqts"
import { DatabaseProvider } from "../database/database";
import { SQLiteObject } from "@ionic-native/sqlite";

export abstract class BaseDatabase<T> {

  protected tableName: string;
  protected pkName: string = "id";

  constructor(
    public db: DatabaseProvider
  ) { }

  public create(model: T) {
    return this.db.getDB()
      .then((db: SQLiteObject) => {
        db.executeSql(
            `insert into ${this.tableName} (${Object.keys(model).filter(key => { return key != this.pkName }).toString()})  values (${Object.keys(model).filter(key => { return key != this.pkName }).map(value => { return "?"}).toString()})`,
            Object.keys(model).filter(key => { return key != this.pkName }).map(key => { return model[key]}))
      });
  }

  public update(model: T, id) {
    return this.db.getDB()
      .then((db: SQLiteObject) => {
        db.executeSql(
            `update ${this.tableName} set (${Object.keys(model).filter(key => { return key != this.pkName }).filter(key => { return key != this.pkName }).map(key => { return `${key} = ?` }).toString()}) where (${this.pkName} = ${id})`,
            Object.keys(model).filter(key => { return key != this.pkName }).map(key => { return model[key]})
          )
      })
  }

  public delete(id: number) {
    return this.db.getDB()
      .then((db: SQLiteObject) => {
        db.executeSql(`delete from ${this.tableName} wher ${this.pkName} = ${id}`)
      })
  }

  public get(id: number) {
    return this.db.getDB()
      .then<T>((db: SQLiteObject) => {
        let sql = `select * from ${this.tableName} where ${this.pkName} = ?`;
        return db.executeSql(sql, [id])
          .then<T>((data) => {
            if (data.rows.length > 0) {
              let model: T = data.rows.item(0);
              return model;
            }

            return null;
          })
      })
  }

  public getAll() {
    return this.db.getDB()
      .then<List<T>>((db: SQLiteObject) => {
        let sql = `select * from ${this.tableName}`;
        return db.executeSql(sql, [])
          .then<List<T>>(data => {
            let models = new List<T>([]);
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                models.Add(data.rows.item(i))
              }
            }
            return models;
          })
      })
  }

  
}
