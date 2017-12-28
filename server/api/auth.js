const express = require('express');

const router = express.Router();

router.post('/token', (request, response) => {
  response.json({
    access_token: '@@@_access_token_@@@',
    refresh_token: '####_refresh_token_####',
    user_data: {
      username: 'username@dev.dev',
      firstName: 'Rustam',
      lastName: 'Sagdi',
    },
  });
});

module.exports = router;
