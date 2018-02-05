const activateInvite = (axios) => (hash) =>
  axios
    .post('/api/v1/activate-invite', {
      hash,
    })
    .then(({ data }) => ({ reponse: data }))
    .catch(({ response }) => ({ error: response.data }));

const updateGeneralSettings = (axios) => (firstName, middleName, lastName) =>
  axios
    .post('/api/v1/profile/general', {
      firstName,
      middleName,
      lastName,
    })
    .then(({ data }) => ({ response: data }))
    .catch(({ response }) => ({ error: response.data }));

export default (axios) => ({
  activateInvite: activateInvite(axios),
  updateGeneralSettings: updateGeneralSettings(axios),
});
