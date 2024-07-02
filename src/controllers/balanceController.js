import { depositBalance } from '../services/balanceService.js';

/**
 * Handles HTTP requests to deposit a specified amount into a user's balance.
 * @param {object} req - The HTTP request object containing `params` and `body`.
 * @param {object} res - The HTTP response object used to send back the JSON response.
 * @param {function} next - The next middleware function in the Express.js stack, used for error handling.
 */
const deposit = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { amount } = req.body;
        const client = await depositBalance(userId, amount);
        res.json(client);
    } catch (err) {
        next(err);
    }
};

export { deposit };
