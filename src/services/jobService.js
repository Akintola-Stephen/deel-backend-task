import { getUnpaidJobsByProfileId, payJob } from '../dal/jobDAL.js';
// const { getUnpaidJobsByProfileId, payJob } = default;

const findUnpaidJobsByProfileId = async (profileId) => {
    return getUnpaidJobsByProfileId(profileId);
};

const processJobPayment = async (jobId, clientId) => {
    return payJob(jobId, clientId);
};

export  { findUnpaidJobsByProfileId, processJobPayment };
