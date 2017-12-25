import { createSelector } from 'reselect';

const authSelector = (globalState) => globalState.get('auth');

export const loadingSelector = createSelector(authSelector, (state) =>
  state.get('loading')
);

export const userDataSelector = createSelector(authSelector, (state) =>
  state.get('userData').toJS()
);

export const tokenSelector = createSelector(authSelector, (state) =>
  state.get('token')
);

export const errorSelector = createSelector(authSelector, (state) =>
  state.get('error')
);