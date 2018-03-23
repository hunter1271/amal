const express = require('express');
const auth = require('./auth');
const admin = require('./admin');
const profile = require('./profile');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({ api: 'v1' });
});

router.use('/', auth);
router.use('/admin', admin);
router.use('./user', profile);

module.exports = router;
