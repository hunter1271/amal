import { createSelector } from 'reselect';

const authSelector = (globalState) => globalState.get('authentication');

export const selectToken = createSelector(authSelector, (state) =>
  state.get('token')
);

export const selectUser = createSelector(authSelector, (state) =>
  state.get('user').toJS()
);

export const selectRoles = createSelector(authSelector, (state) =>
  state.get('roles').toJS()
);
