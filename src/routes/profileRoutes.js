const express = require('express');
const router = express.Router();
const { getProfileByIdController, depositBalanceController } = require('../controllers/profileController');

router.get('/:id', getProfileByIdController);
router.post('/balances/deposit/:userId', depositBalanceController);

module.exports = router;
