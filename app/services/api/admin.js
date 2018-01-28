const inviteUser = (axios) => (email) =>
  axios
    .post('api/v1/admin/invite-user', {
      email,
    })
    .then(({ data }) => data)
    .catch((errors) => ({ errors }));

export default (axios) => ({
  inviteUser: inviteUser(axios),
});
