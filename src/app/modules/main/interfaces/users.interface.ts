import { IDocumenType } from './document-type.interface';

export interface IUsers {
  documentType: IDocumenType;
  id: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  access_token: string;
}
