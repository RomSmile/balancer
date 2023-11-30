import { v4 as uuidv4 } from 'uuid';
import { types, flow } from 'mobx-state-tree';
import { updateOrderItemParams } from '../types';
import { getCurrencyValue } from '../services/CurrencyService';

const boardItem = types.model({
  key: types.number,
  id: types.string,
  month: types.string,
  expenses: types.number,
  profit: types.number,
  ua: types.number,
  usd: types.optional(types.number, 0),
  eur: types.optional(types.number, 0),
});

const boardStore = types
  .model({
    items: types.optional(types.array(boardItem), []),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => {
    return {
      addItem: flow(function* (newBoardItem: Omit<updateOrderItemParams, 'key'>) {
        newBoardItem.month = newBoardItem.month.replace(':', '.');
        if (!self.items.findIndex((boardItem) => boardItem.month === newBoardItem.month)) {
          self.error = 'this month already exists';
          return;
        }

        self.loading = true;
        try {
          const currency = yield getCurrencyValue();
          const eur = Math.round((newBoardItem.ua / currency.eur) * 100) / 100;
          const usd = Math.round((newBoardItem.ua / currency.usd) * 100) / 100;
          self.items.push({
            id: uuidv4(),
            key: self.items.length,
            ...newBoardItem,
            eur,
            usd,
          });
        } catch (_e) {
          self.error = 'Something went wrong';
        }
        self.loading = false;
      }),
      deleteItem: (id: string) => {
        let foundedIndex: number;
        self.items.replace(
          [...self.items]
            .filter((boardItem) => {
              const condition = boardItem.id !== id;
              if (condition) {
                foundedIndex = boardItem.key;
              }

              return condition;
            })
            .map((boardItem) => {
              if (boardItem.key > foundedIndex - 1) {
                const newBoardItem = { ...boardItem };
                newBoardItem.key -= 1;
                return newBoardItem;
              }

              return boardItem;
            }),
        );
      },
      editItem: flow(function* (newBoardItem: updateOrderItemParams) {
        newBoardItem.month = newBoardItem.month.replace(':', '.');
        if (
          !self.items.findIndex(
            (boardItem) => boardItem.month === newBoardItem.month && newBoardItem.key !== boardItem.key,
          )
        ) {
          self.error = 'this month already exists';
          return;
        }
        self.loading = true;
        try {
          const currency = yield getCurrencyValue();
          const eur = Math.round((newBoardItem.ua / currency.eur) * 100) / 100;
          const usd = Math.round((newBoardItem.ua / currency.usd) * 100) / 100;
          const { key, profit, expenses, ua, month } = newBoardItem;
          self.items[key].profit = profit;
          self.items[key].expenses = expenses;
          self.items[key].month = month;
          self.items[key].ua = ua;
          self.items[key].eur = eur;
          self.items[key].usd = usd;
        } catch (_e) {
          self.error = 'Something went wrong';
        }
        self.loading = false;
      }),
      resetError: () => {
        self.error = '';
      },
    };
  });

export default boardStore;
