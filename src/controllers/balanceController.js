const { depositBalance } = require('../services/balanceService');

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

module.exports = { deposit };
