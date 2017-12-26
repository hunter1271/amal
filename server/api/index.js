const express = require('express');
const auth = require('./auth');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({ api: 'v1' });
});

router.use('/auth', auth);

module.exports = router;
