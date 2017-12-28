const token = (axios) => (username, password) =>
  axios
    .post('api/v1/auth/token', {
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
});
