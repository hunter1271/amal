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

router.post('/login_check', (request, response) => {
  response.json({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsInJvbGVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.uLDqpGFB7fhTECIJH4Lnmaj7_FFcV9dG4_l6wmTaZvg',
  });
});

module.exports = router;
