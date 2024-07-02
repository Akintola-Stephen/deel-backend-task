import { getBestProfession, getBestClients } from '../dal/adminDAL.js';


/**
 * Retrieves the profession with the highest total earnings within a specified date range.
 * @param {string} start - The start date of the range to consider.
 * @param {string} end - The end date of the range to consider.
 * @returns {Promise<string>} The profession with the highest total earnings within the specified date range.
 */
const bestProfession = async (start, end) => {
    return getBestProfession(start, end);
};

const bestClients = async (start, end, limit = 2) => {
    return getBestClients(start, end, limit);
};

export { bestProfession, bestClients };
