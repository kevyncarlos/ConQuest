import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Page } from '../../models/page';
import { base_url, path_version_api } from '../../config/global';

export abstract class BaseProvider<T> {

  constructor(
    public http: HttpClient
  ) { }

  /**
   * Base de url para requisição de serviço
   *
   * @protected
   *
   * @type {string}
   */
  protected base_url: string = base_url;

  /**
   * Path e version da api para requisição de serviço
   *
   * @protected
   *
   * @type {string}
   */
  protected path_version_api = path_version_api;

  /**
   * Path base para o serviço consumido
   *
   * @protected
   *
   * @type {string}
   */
  protected path = '';

  /**
   * Motagem da url de requisição.
   *
   * @private
   *
   * @param action Define para qual action a url deve apontar dentro do path definido
   * @param idOrQuery Define os parâmetros enviados na requisição
   */
  protected getUrl(action: string = '', idOrQuery: any = null): string {
    if (action != '') {
      action = "/" + action
    }
    let params: string = "";
    if (typeof idOrQuery === "number") {
      params = "/" + idOrQuery.toString();
    } else if (idOrQuery != null) {
      params = "?" + Object.keys(idOrQuery).map(key => key + '=' + idOrQuery[key]).join('&');
    }

    return `${this.base_url}${this.path_version_api}${this.path}${action}${params}`;
  }

  /**
   * Retorna todos os registros vinculados
   * ao metodo get da protected `path`
   *
   * @return {Observable<T[]>} Observable object
   */
  public get(): Observable<T[]>;

  /**
   * Buscar um registro
   *
   * @param {number} id Para capturar o registro por um id
   *
   * @return {Observable<T>} Observable object
   */
  public get(id: number): Observable<T>;

  /**
   * Retorna todos em uma action específica
   *
   * @param {string} action para acessar uma action personalizada no `path`
   *
   * @return {Observable<T[]>} Observable object
   */
  public get(action: string): Observable<T[]>;

  /**
   * Retorna um único registro vinculado ao id
   * em uma action específica
   *
   * @param {string} action para acessar uma action personalizada no `path`
   * @param {number} id Para capturar o registro por um id
   *
   * @return {Observable<any>} Observable object
   */
  public get(action: string, id: number): Observable<any>;

  /**
   * Retorna um único registro vinculado ao id
   * em uma action específica
   *
   * @param {string} action para acessar uma action personalizada no `path`
   * @param {any} query Parametros para comparação
   *
   * @return {Observable<T[]>} Observable object
   */
  public get(action: string, query: any): Observable<T[]>

  /**
   * Implementação concreta do get
   *
   * @param {string} action
   * @param {any} idOrQuery
   *
   * @return {Observable<T> | Observable<T[]>} Observable object
   */
  public get(action?: any, idOrQuery?: any): Observable<T> | Observable<T[]> {
    return this.http.get<T>(this.getUrl(action, idOrQuery));
  }
  
  /**
   * Retorna um objeto do tipo página<T>
   * 
   * @param {string} action Ação da requisição
   * @param {number} page Número da página requisitada
   * @return {Observable}
   */

  public getPage(action: string, page: number): Observable<Page<T>>;
  /**
   * Retorna um objeto do tipo página<T>
   * 
   * @param {number} page Número da página requisitada
   * @return {Observable}
   */

  public getPage(page: number): Observable<Page<T>>;
  /**
   * Retorna um objeto do tipo página<T>
   * 
   * @param {string} action Ação da requisição
   * @param {number} page Número da página requisitada
   * @param {number} per_page Quantidade de registros de retorno
   * @return {Observable}
   */

  public getPage(action: string, page: number, per_page: number): Observable<Page<T>>
  /**
   * Retorna um objeto do tipo página<T>
   * 
   * @param {any} action Ação da requisição ou número da página requisitada
   * @param {number} page Número da página requisitada
   * @param {number} per_page Quantidade de registros de retorno
   * @return {Observable}
   */
  public getPage(action: any = 'page', page: number = 0, per_page = 10): Observable<Page<T>>{
    if (typeof action === "number") {
      page = action;
      action = "page";
    }
    return this.http.get<Page<T>>(this.getUrl(`${action}/${page}`, per_page));
  }

  /**
   * Envio de modelo por post para criação
   *
   * @param {T} model
   * @return {Observable<T>} Observable object
   */
  public post(model: T): Observable<T>;

  /**
   * Envio de modelo por post para criação
   * em action específica
   *
   * @param {T} model
   * @param {string} action
   *
   * @return {Observable<T>} Observable object
   */
  public post(model: T, action: string): Observable<T>;

  /**
   * Implementação concreta do post
   *
   * @param {T} model
   * @param {string} action
   *
   * @return {Observable<T>} Observable object
   */
  public post(model: T, action?: string): Observable<T> {
    return this.http.post<T>(this.getUrl(action), model);
  }

  /**
   * Modelo enviado para edição por Id
   *
   * @param {T} model  Modelo enviado na requisição
   * @param {number} id Id do modelo a ser modificado
   *
   * @return {Observable<T>}
   */
  public put(model: T, id: number): Observable<T>;

  /**
   * Modelo enviado para edição por id em uma action específica
   *
   * @param {T} model Modelo enviado na requisição
   * @param {number} id Id do modelo a ser modificado
   * @param {string} action Action de destino
   *
   * @return {Observable<T>}
   */
  public put(model: T, id: number, action: string): Observable<T>;

  /**
   * Modelo enviado para edição por id em uma action específica
   *
   * @param {T} model Modelo enviado na requisição
   * @param {any} query Objeto com parametros para comparação
   * @param {string} action Action de destino
   *
   * @return {Observable<T>}
   */
  public put(model: T, query: any, action: string): Observable<T>;

  /**
   * Modelo enviado para edição por id em uma action específica
   *
   * @param {T} model Modelo enviado na requisição
   * @param {number | any} idOrQuery Id ou Objeto com parametros para comparação
   * @param {string} action Action de destino
   *
   * @return {Observable<T>}
   */
  public put(model: T, idOrQuery?: any, action?: string): Observable<T> {
    return this.http.put<T>(this.getUrl(action, idOrQuery), model);
  }

  /**
   * Envio de registro para deletar na controller definida no `path`
   *
   * @param {number} id Id do registro a ser deletado
   *
   * @return {Observable<any>}
   */
  public delete(id: number): Observable<any>;

  /**
   * Envio de registro(s) para deletar na controller definida no `path`
   *
   * @param {any} query Parâmetros para comparação
   *
   * @return {Observable<any>}
   */
  public delete(query: any): Observable<any>;

  /**
   * Envio de registro(s) para deletar na controller definida no `path`
   *
   * @param {number} id Id do registro a ser deletado
   * @param {string} action Action de destino na controller do `path`
   *
   * @return {Observable<any>}
   */
  public delete(id: number, action: string): Observable<any>;

  /**
   * Envio de registro(s) para deletar na controller definida no `path`
   *
   * @param {any} query Parâmetros para comparação
   * @param {string} action Action de destino na controller do `path`
   *
   * @return {Observable<any>}
   */
  public delete(query: any, action: string): Observable<any>;

  /**
   * Envio de registro(s) para deletar na controller definida no `path`
   *
   * @param {any} idOrQuery Id ou Parâmetros para comparação
   * @param {string} action Action de destino na controller do `path`
   *
   * @return {Observable<any>}
   */
  public delete(idOrQuery: any, action?: string): Observable<any> {
    return this.http.delete(this.getUrl(action, idOrQuery));
  }
}
