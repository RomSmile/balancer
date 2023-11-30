import { types } from 'mobx-state-tree';
import { redirect } from 'react-router-dom';

const userAccessStore = types
  .model({
    allowEnter: types.optional(types.boolean, false),
  })
  .actions((self) => {
    return {
      allowToEnterInSystem: () => {
        self.allowEnter = true;
        localStorage.setItem('allowEnter', '1');
        redirect('/');
      },
    };
  });

export default userAccessStore;
