import { findUnpaidJobsByProfileId, processJobPayment } from '../services/jobService.js';

/**
 * Retrieves unpaid jobs for the profile making the request and returns them as a JSON response.
 * Any errors are passed to the next middleware.
 * @param {object} req - The request object containing the profile ID.
 * @param {object} res - The response object used to send back the JSON data.
 * @param {function} next - The next middleware function for error handling.
 */
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
