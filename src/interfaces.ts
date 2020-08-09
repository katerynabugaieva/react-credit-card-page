export interface IUserProps {
  imagePath: string;
  name: string;
  position?: string;
  cardNumber?: string;
}

export interface IProgressBarProps {
  limit: number;
  usedLimit: number;
  spentMoney: number;
}

export interface IExpense {
  sum: number;
  date: string;
  status: string;
}

export interface IExpenseItem {
  item: IExpense;
}
