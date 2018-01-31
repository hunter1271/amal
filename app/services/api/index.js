import auth from './auth';
import admin from './admin';

export default (axios) => ({
  auth: auth(axios),
  admin: admin(axios),
});
