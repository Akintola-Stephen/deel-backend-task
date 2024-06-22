const express = require('express');
const { getContract, getContracts } = require('../controllers/contractController');

const router = express.Router();

router.get('/:id', getContract);
router.get('/', getContracts);

module.exports = router;
