export interface IBoardItem {
  key: number;
  id: string;
  month: string;
  expenses: number;
  profit: number;
  ua: number;
  usd: number;
  eur: number;
}

export type updateOrderItemParams = Omit<IBoardItem, 'id' | 'eur' | 'usd'>;
