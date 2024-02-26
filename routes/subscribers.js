const express = require('express');
const router = express.Router();
const subscribersController = require('../controllers/subscribers');

router.post('/subscribe', subscribersController.createSubscribers);
// route for unsubscribing
router.post('/unsubscribe', subscribersController.deleteSubscribers);

module.exports = router;