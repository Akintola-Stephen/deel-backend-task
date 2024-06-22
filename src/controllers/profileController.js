const { getProfileById, depositBalance } = require('../services/profileService');

const getProfileByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const profile = await getProfileById(id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    } catch (err) {
        next(err);
    }
};

const depositBalanceController = async (req, res, next) => {
    const { userId } = req.params;
    const { amount, totalJobsToPay } = req.body;
    try {
        const profile = await depositBalance(userId, amount, totalJobsToPay);
        res.json(profile);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getProfileByIdController,
    depositBalanceController
};
