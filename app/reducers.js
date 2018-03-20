/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import appReducer from 'containers/App/ducks';
import authReducer from 'containers/Auth/ducks';
import userMenuReducer from 'containers/UserMenu/ducks';
// import sidebarReducer from 'containers/SidebarConnected/ducks';
// import localeToggleReducer from 'containers/LocaleToggle/ducks';
// import inviteFormReducer from 'containers/InviteForm/ducks';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    auth: authReducer,
    userMenu: userMenuReducer,
    form: formReducer,
    app: appReducer,
    ...injectedReducers,
  });
}
