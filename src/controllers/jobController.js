const { findUnpaidJobsByProfileId, processJobPayment } = require('../services/jobService');

const getUnpaidJobs = async (req, res, next) => {
    try {
        const jobs = await findUnpaidJobsByProfileId(req.profile.id);
        res.json(jobs);
    } catch (err) {
        next(err);
    }
};

const payJob = async (req, res, next) => {
    try {
        const { jobId } = req.params;
        const job = await processJobPayment(jobId, req.profile.id);
        res.json(job);
    } catch (err) {
        next(err);
    }
};

module.exports = { getUnpaidJobs, payJob };
