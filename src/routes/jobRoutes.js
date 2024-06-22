const express = require('express');
const { getUnpaidJobs, payJob } = require('../controllers/jobController');

const router = express.Router();

router.get('/unpaid', getUnpaidJobs);
router.post('/:job_id/pay', payJob);

module.exports = router;