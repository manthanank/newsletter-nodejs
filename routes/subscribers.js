const express = require('express');
const router = express.Router();
const subscribersController = require('../controllers/subscribers');

router.post('/subscribe', subscribersController.createSubscribers);

module.exports = router;