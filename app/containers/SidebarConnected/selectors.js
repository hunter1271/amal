import { createSelector } from 'reselect';

const sidebarSelector = (globalState) => globalState.get('sidebar');

export const openSelector = createSelector(sidebarSelector, (state) =>
  state.get('open')
);
