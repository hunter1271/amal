import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('app');

export const selectSidebarExpand = createSelector(selectGlobal, (state) =>
  state.get('sidebarExpand')
);
