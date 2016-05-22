'use strict';

import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';
import {config} from '../app.config';

@Injectable()
export class StorageService {
  
  appConfig: any = config.storage;

  private _debugMode: boolean;
  private _dbName: string;
  private _storage :Storage;
  
  constructor(){
    this._debugMode = this.appConfig.debugMode || false;
    this._dbName    = this.appConfig.name;
    this._storage   = new Storage(SqlStorage, {name: this._dbName, existingDatabase: true });
  }

  /**
   * Configura el modo debug.
   * @params {boolean} debug. True para ver feedback por consola
   */
  public setDebugMode(debug: boolean): void {
    this._debugMode = debug;
  }

  /**
   * Crea una tabla
   * @params {string} name. El nombre de la tabla
   * @params {string} schema. El sql necesario para crear la tabla
   * @return {boolean} Exito de la funcion
   */
  public createTable(name: string, schema: string ): boolean {
    this._storage.query("CREATE TABLE IF NOT EXISTS "+ name + schema )
      .then((data) => {
        if (this._debugMode === true){
          console.info(`Tabla '${name}' creada con exito`);
          console.info(`Schema: ${schema}`);
        }
        return true;
      }, (error) => {
        if (this._debugMode === true){
          console.error(`Error al crear la tabla: '${name}'`);
          console.error(error);
        }          
        return false;
      });
      return false;
  }
  
  /**
   * Elimina una tabla
   * @params {string} name. El nombre de la tabla
   * @return {boolean} Exito de la funcion
   */
  public dropTable(name: string): boolean {
    this._storage.query(" DROP TABLE IF EXISTS " + name )
      .then((data) => {
        if (this._debugMode === true){
          console.info(`Tabla '${name}' borrada con exito`);
        }
        return true;
      }, (error) => {
        if (this._debugMode === true){
          console.error(`Error al borrar la tabla: '${name}'`);
          console.error(error);
        }   
        return false;
      });
      return false;
  }
  
  /**
   * Crea una consulta
   * @params {string} sql. El sql para la base de datos
   * @return {any} Devuelve una promesa
   */
  public doQuery(sql: string): any {
    return this._storage.query(sql)
  }
  
  /* */
  
  public setJson(key: string, value: any): any{
    return this._storage.setJson(key, value);
  }
  
  public getJson(key: string): any{
    return this._storage.getJson(key);
  }
  
  public set(key: string, value: any): any{
    return this._storage.set(key, value);
  }
  
  public get(key: string): any{
    return this._storage.get(key);
  }
  
}