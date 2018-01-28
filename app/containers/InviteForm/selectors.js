import { createSelector } from 'reselect';

const inviteFormSelector = (globalState) => globalState.get('inviteForm');

export const selectOpen = createSelector(inviteFormSelector, (state) =>
  state.get('open')
);
