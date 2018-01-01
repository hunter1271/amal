import { createSelector } from 'reselect';

const authSelector = (globalState) => globalState.get('auth');

export const signedInSelector = createSelector(authSelector, (state) =>
  state.get('signedIn')
);

export const usernameSelector = createSelector(authSelector, (state) =>
  state.get('username')
);

export const passwordSelector = createSelector(authSelector, (state) =>
  state.get('password')
);

export const loadingSelector = createSelector(authSelector, (state) =>
  state.get('loading')
);

export const userDataSelector = createSelector(authSelector, (state) =>
  state.get('userData').toJS()
);

export const accessTokenSelector = createSelector(authSelector, (state) =>
  state.get('access_token')
);

export const errorSelector = createSelector(authSelector, (state) =>
  state.get('error')
);
