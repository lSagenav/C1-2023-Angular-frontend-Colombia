import { AccountInterface } from './account.interface';
export interface depositInterface {
  id: string;
  account: AccountInterface;
  amount: 0;
  dateTime: Date | number;
}
