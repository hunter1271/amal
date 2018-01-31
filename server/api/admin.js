const express = require('express');

const router = express.Router();

router.post('/invite-user', (request, response) => {
  if (Math.random() > 0.5) {
    response.json({ success: true });
  } else {
    response
      .json({ validation_errors: { email: 'This email is invalid' } })
      .status(400);
  }
});

module.exports = router;
