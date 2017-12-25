const express = require('express');

const router = express.Router();

router.post('/authenticate', (request, response) => {
  response.json({
    access_token: '@@@_access_token_@@@',
  });
});

export default router;
