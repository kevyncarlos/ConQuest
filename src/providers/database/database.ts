import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(
    private sqlite: SQLite
  ) { }

  public getDB() {
    return this.sqlite.create({
      name: 'products.db',
      location: 'default'
    });
  }

  public openOrCreateDb() {
    return this.getDB()
    .then((db: SQLiteObject) => {

      // Criando as tabelas
      this.createTables(db);

      // Inserindo dados padrão
      this.cargaInicial(db);

    })
    .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      "CREATE TABLE IF NOT EXISTS answer(id integer primary key AUTOINCREMENT, user_task_id integer, description text, date_time text, has_image integer)",
      "CREATE TABLE IF NOT EXISTS category(id integer primary key AUTOINCREMENT, description text)",
      "CREATE TABLE IF NOT EXISTS task(id integer primary key AUTOINCREMENT, description text, category_id integer, duration text, type integer)",
      "CREATE TABLE IF NOT EXISTS user_category(id integer primary key AUTOINCREMENT, user_id integer, category_id integer)",
      "CREATE TABLE IF NOT EXISTS user_category(id integer primary key AUTOINCREMENT, user_id integer, task_id integer, date_ref text, finished integer)",
      "CREATE TABLE IF NOT EXISTS user(id integer primary key AUTOINCREMENT, date text, name text, date_birth text, sex integer, finished, number)"
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }
  private cargaInicial(db: SQLiteObject) {
  //   db.executeSql('select COUNT(id) as qtd from categories', [{}])
  //   .then((data: any) => {
  //     //Se não existe nenhum registro
  //     if (data.rows.item(0).qtd == 0) {
 
  //       // Criando as tabelas
  //       db.sqlBatch([
  //         ['insert into categories (name) values (?)', ['Hambúrgueres']],
  //         ['insert into categories (name) values (?)', ['Bebidas']],
  //         ['insert into categories (name) values (?)', ['Sobremesas']]
  //       ])
  //         .then(() => console.log('Dados padrões incluídos'))
  //         .catch(e => console.error('Erro ao incluir dados padrões', e));
 
  //     }
  //   })
  //   .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }
}
