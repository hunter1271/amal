import auth from './auth';
import admin from './admin';
import profile from './profile';

export const ret = (response) => response.data;
export const err = ({ response }) => {
  const reason = new Error();
  if (response) {
    const { data } = response;
    Object.assign(reason, data);
    Object.assign(reason, data.error);
  }
  return Promise.reject(reason);
};

export default (axios) => ({
  auth: auth(axios),
  admin: admin(axios),
  user: profile(axios),
});
