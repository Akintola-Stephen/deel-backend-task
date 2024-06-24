const express = require('express');
const { getUnpaidJobs, payJob } = require('../controllers/jobController');

const router = express.Router();

router.get('/unpaid', getUnpaidJobs);
router.get('/:jobId/pay', payJob);

module.exports = router;
