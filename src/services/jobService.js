import { getUnpaidJobsByProfileId, payJob } from '../dal/jobDAL.js';


/**
 * Retrieves unpaid jobs for a given profile ID.
 * @param {number} profileId - The ID of the profile for which unpaid jobs are to be retrieved.
 * @returns {Promise<Array>} A promise that resolves to the list of unpaid jobs for the given profileId.
 */
const findUnpaidJobsByProfileId = async (profileId) => getUnpaidJobsByProfileId(profileId);

const processJobPayment = async (jobId, clientId) => {
    return payJob(jobId, clientId);
};

export { findUnpaidJobsByProfileId, processJobPayment };
