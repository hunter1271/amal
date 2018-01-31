const inviteUser = (axios) => (email) => {
  console.log('invite request', email);

  return axios
    .post('/api/v1/admin/invite-user', {
      email,
    })
    .then(({ data }) => {
      console.log('data', data);

      return data;
    })
    .catch((error) => {
      console.log('error', error.response);

      return error.response;
    });
};

export default (axios) => ({
  inviteUser: inviteUser(axios),
});
