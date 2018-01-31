const inviteUser = (axios) => (email) =>
  axios
    .post('/api/v1/admin/invite-user', {
      email,
    })
    .then(({ data }) => ({ response: data }))
    .catch(({ response }) => ({ error: response.data }));

export default (axios) => ({
  inviteUser: inviteUser(axios),
});
