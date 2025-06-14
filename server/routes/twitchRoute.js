const express = require('express');
const router = express.Router();
const { searchStreams } = require('../controllers/twitchController');

router.get('/search', searchStreams);

module.exports = router;
