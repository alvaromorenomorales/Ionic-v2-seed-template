import {BaseModelInterface} from './base.model';

export class User implements BaseModelInterface {
  
  FIELDS: string = " name, email, country, lang ";
  SCHEMA: string = " ( name TEXT, email TEXT, country TEXT, lang TEXT ) ";
  TABLE_NAME: string = "user";
  
  name: string;
  email: string;
  country: string;
  lang: string;
   
  constructor(){}

}