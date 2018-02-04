import { createDuck } from 'redux-duck';

const ducks = createDuck('generalSettingsForm');

export const REQUEST = ducks.defineType('REQUEST');
export const SUCCESS = ducks.defineType('SUCCESS');

export const request = ducks.createAction(REQUEST);
export const success = ducks.createAction(SUCCESS);
