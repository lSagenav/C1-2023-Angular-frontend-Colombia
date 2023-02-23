import { IUsers } from '../../auth/interfaces/users.interface';

export interface AccountInterface {
  id: string;
  balance: number;
  state: boolean;
  customer: IUsers;
  amount: string;
  accountType: {
    id: string;
    name: string;
    state: boolean;
  };
}
