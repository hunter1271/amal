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

module.exports = router;
