import { bestProfession, bestClients } from '../services/adminService.js';

/**
 * Handles HTTP requests to fetch the best profession within a specified date range.
 * Extracts the `start` and `end` dates from the query parameters, calls the `bestProfession` service function with these dates,
 * and returns the result as a JSON response. If an error occurs, it passes the error to the next middleware.
 * @param {Object} req - The HTTP request object containing query parameters `start` and `end`.
 * @param {Object} res - The HTTP response object used to send back the JSON response.
 * @param {Function} next - The next middleware function in the Express.js route handling.
 */
const getBestProfession = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const profession = await bestProfession(start, end);
        res.json(profession);
    } catch (err) {
        next(err);
    }
};

const getBestClients = async (req, res, next) => {
    try {
        const { start, end, limit = 2 } = req.query;
        const clients = await bestClients(start, end, parseInt(limit, 10));
        res.json(clients);
    } catch (err) {
        next(err);
    }
};

export  { getBestProfession, getBestClients };
