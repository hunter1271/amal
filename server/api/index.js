const express = require('express');
const auth = require('./auth');
const admin = require('./admin');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({ api: 'v1' });
});

router.use('/auth', auth);
router.use('/admin', admin);

module.exports = router;
