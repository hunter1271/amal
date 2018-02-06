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
  updateGeneralSettings: updateGeneralSettings(axios),
});
