import { IUsers } from './users.interface';

export interface AccountInterface {
  id: string;
  balance: number;
  state: boolean;
  customer: IUsers;
  accountType: {
    id: string;
    name: string;
    state: boolean;
  };
}
