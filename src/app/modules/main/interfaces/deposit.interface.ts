export interface IDeposit {
  id: string;
  account: {
    balance: number;
    customer: {
      fullname: string;
      document: string;
    };
  };
}
