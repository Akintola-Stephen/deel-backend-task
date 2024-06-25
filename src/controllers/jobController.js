import { findUnpaidJobsByProfileId, processJobPayment } from '../services/jobService.js';

const getUnpaidJobs = async (req, res, next) => {
    try {
        const jobs = await findUnpaidJobsByProfileId(req.profile.id);

        return res.json(jobs);
    } catch (err) {
        next(err);
    }
};

const payJob = async (req, res, next) => {
    try {
        const { jobId } = req.params;
        const job = await processJobPayment(jobId, req.profile.id);
        if (!job) {
            return res.status(200).json({ msg: 'Currently all available jobs are paid' });
        }
        res.json(job);
    } catch (err) {
        next(err);
    }
};

export  { getUnpaidJobs, payJob };
