import { stringify } from 'qs';
import { ret, err } from './index';

const activateInvite = (axios) => (hash) =>
  axios
    .post('/api/v1/auth/activate-invite', {
      hash,
    })
    .then(({ data }) => ({ response: data }))
    .catch(({ response }) => ({ error: response.data }));

const token = (axios) => (username, password) =>
  axios({
    method: 'POST',
    url: '/api/v1/login_check',
    data: stringify({
      _username: username,
      _password: password,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(ret, err);

export default (axios) => ({
  token: token(axios),
  activateInvite: activateInvite(axios),
});
