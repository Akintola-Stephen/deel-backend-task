const { getUnpaidJobsByProfileId, payJob } = require('../dal/jobDAL');

const findUnpaidJobsByProfileId = async (profileId) => {
    return getUnpaidJobsByProfileId(profileId);
};

const processJobPayment = async (jobId, clientId) => {
    return payJob(jobId, clientId);
};

module.exports = { findUnpaidJobsByProfileId, processJobPayment };
