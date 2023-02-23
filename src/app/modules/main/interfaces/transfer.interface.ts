import { userInterface } from './user-get.interface';

export interface TransferInterface {
  id: string;
  amount: number;
  inCome: userInterface;
  outCome: userInterface;
  reason: string;
  dateTime: number;
}
