import auth from './auth';
import admin from './admin';
import profile from './profile';

export default (axios) => ({
  auth: auth(axios),
  admin: admin(axios),
  profile: profile(axios),
});
