const express = require('express');
const movelController = require('../controllers/movelController');

const router = express.Router();

router.get('/', movelController.getAllMovels);
router.post('/', movelController.postMovel);

module.exports = router;