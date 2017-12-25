const authenticate = (axios) => (userName, password) => {
  axios
    .post('api/auth/token', {
      user_name: userName,
      password,
    })
    .then(({ data }) => ({
      accessToken: data.access_token,
    }))
    .catch((error) => ({ error }));
};

export default (axios) => ({
  authenticate: authenticate(axios),
});
