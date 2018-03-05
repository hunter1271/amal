import { stringify } from 'qs';

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
  })
    .then(({ data }) => ({
      response: {
        token: data.token,
        refreshToken: data.refresh_token,
        userData: data.user_data,
      },
    }))
    .catch((error) => ({ error }));

export default (axios) => ({
  token: token(axios),
  activateInvite: activateInvite(axios),
});
