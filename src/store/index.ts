import { types } from 'mobx-state-tree';
import boardStore from './boardStore';
import userAccessStore from './userAccessStore';

const RootStore = types.model('RootStore', {
  board: types.optional(boardStore, {}),
  userAccess: types.optional(userAccessStore, {}),
});

export default RootStore;
