const activateInvite = (axios) => (hash) =>
  axios
    .post('/api/v1/auth/activate-invite', {
      hash,
    })
    .then(({ data }) => ({ response: data }))
    .catch(({ response }) => ({ error: response.data }));

const token = (axios) => (username, password) =>
  axios
    .post('/api/v1/auth/token', {
      username,
      password,
    })
    .then(({ data }) => ({
      response: {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        userData: data.user_data,
      },
    }))
    .catch((error) => ({ error }));

export default (axios) => ({
  token: token(axios),
  activateInvite: activateInvite(axios),
});
