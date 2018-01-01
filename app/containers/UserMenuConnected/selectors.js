import { createSelector } from 'reselect';

const userMenuSelector = (globalState) => globalState.get('userMenu');

export const openedSelector = createSelector(userMenuSelector, (state) =>
  state.get('open')
);
