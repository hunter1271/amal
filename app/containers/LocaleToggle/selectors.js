import { createSelector } from 'reselect';

const localeToggleSelector = (globalState) => globalState.get('localeToggle');

export const selectOpen = createSelector(localeToggleSelector, (state) =>
  state.get('open')
);
