const express = require('express');

const router = express.Router();

router.post('/activate-invite', (request, response) => {
  if (Math.random() > 0.5) {
    response.json({
      success: true,
      authorization: { access_token: 'access_token' },
    });
  } else {
    response.status(400).json({ errors: { hash: 'Activation is expired' } });
  }
});

router.post('/token', (request, response) => {
  response.json({
    access_token: '@@@_access_213_token_@@@',
    refresh_token: '####_refresh_token_####',
    user_data: {
      username: 'username@dev.dev',
      firstName: 'Rustam',
      lastName: 'Sagdi',
    },
  });
});

module.exports = router;
