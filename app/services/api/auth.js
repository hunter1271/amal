const authenticate = (axios) => (userName, password) => {
  axios
    .post('api/v1/auth/authenticate', {
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
