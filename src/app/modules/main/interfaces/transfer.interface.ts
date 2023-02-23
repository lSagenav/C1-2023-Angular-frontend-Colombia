import { userInterface } from '../../auth/interfaces/user-get.interface';

export interface TransferInterface {
  id: string;
  amount: number;
  inCome: userInterface;
  outCome: userInterface;
  reason: string;
  dateTime: number;
}
