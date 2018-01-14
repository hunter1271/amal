import validator from 'validator';
import { SUCCESS, REQUIRED } from './constants';

function isRequired(value) {
  return value === undefined || validator.isEmpty(String(value))
    ? REQUIRED
    : SUCCESS;
}

export default isRequired;
