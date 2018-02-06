import { createSelector } from 'reselect';

const inviteActivationSelector = (globalState) =>
  globalState.get('inviteActivation');

export const selectError = createSelector(inviteActivationSelector, (state) =>
  state.get('error')
);
