const express = require('express');

const router = express.Router();

router.post('/invite-user', (request, response) => {
  if (Math.random() > 0.5) {
    response.json({ success: true });
  } else {
    response
      .status(400)
      .json({ validation_errors: { email: 'This email is invalid' } });
  }
});

module.exports = router;
