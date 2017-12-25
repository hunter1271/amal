import auth from './auth';

export default (axios) => ({
  auth: auth(axios),
});
