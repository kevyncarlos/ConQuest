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
      "CREATE TABLE IF NOT EXISTS user_task(id integer primary key AUTOINCREMENT, user_id integer, task_id integer, date_ref text, finished integer)",
      "CREATE TABLE IF NOT EXISTS user(id integer primary key AUTOINCREMENT, date text, name text, date_birth text, sex integer, finished integer)"
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }
  private cargaInicial(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from category', [{}])
      .then((data: any) => {
        if(data.rows.item(0).qtd == 0){
          db.sqlBatch([
            ['insert into category (description) values (?)', ['Ler livros']],
            ['insert into category (description) values (?)', ['Fotografar']],
            ['insert into category (description) values (?)', ['Desenhar']],
            ['insert into category (description) values (?)', ['Dançar']],
            ['insert into category (description) values (?)', ['Tomar sorvete']]
          ])
            .then(() => console.log('Categorias inseridas.'))
            .catch(e => console.error('Erro ao inserir categorias.', e));
        }
      }).catch(e => console.error('Erro ao consultar a qtd de categorias', e));

      db.executeSql('select COUNT(id) as qtd from task', [{}])
      .then((data: any) => {
        if(data.rows.item(0).qtd == 0){
          db.sqlBatch([
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Vá a uma biblioteca e procure algo que goste para ler.', 1, '23:59:59', 0]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Me conte dois trechos de algum livro que você goste.', 1, '08:00:00', 1]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Leia para alguém que não sabe ou não consegue ler.', 1, '14:00:00', 1]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Fotografe uma borboleta encima de uma flor e aproveite para se divertir procurando.', 2, '23:59:59', 0]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Tire fotos de algum membro da sua familia. O pet também conta.', 2, '14:00:00', 1]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Se encontre com um amigo ou uma pessoa muito importante pra você e faça um desenho dela.', 3, '23:59:59', 0]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Imagine a coisa mais louca e divertida possível e desenhe isso, dê vida no papel.', 3, '14:00:00', 1]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Chame alguns amigos ou conhecidos para dançar contigo.', 4, '23:59:59', 0]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Dance uma música que te inspira e me conte como foi a experiência.', 4, '14:00:00', 1]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Organize uma sorvetada com a sua família.', 5, '23:59:59', 0]],
            ['insert into task (description, category_id, duration, type) values (?, ?, ?, ?)', ['Saia para tomar um sorvete e convide alguém se quiser.', 5, '14:00:00', 1]]
          ])
            .then(() => console.log('Tarefas inseridas.'))
            .catch(e => console.error('Erro ao inserir tarefas.', e));
        }
      }).catch(e => console.error('Erro ao consultar a qtd de tarefas', e));
  }
}
