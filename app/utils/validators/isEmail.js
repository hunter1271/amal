import validator from 'validator';
import { SUCCESS, INVALID_EMAIL } from './constants';

function isEmail(value) {
  return value && !validator.isEmail(String(value)) ? INVALID_EMAIL : SUCCESS;
}

export default isEmail;
