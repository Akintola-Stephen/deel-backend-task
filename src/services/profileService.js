const { Profile } = require('../models');

const getProfileById = async (id) => {
    const profile = await Profile.findOne({ where: { id } });
    return profile;
};

const depositBalance = async (userId, amount, totalJobsToPay) => {
    const profile = await Profile.findOne({ where: { id: userId } });

    const maxDepositAmount = totalJobsToPay * 0.25;

    if (amount > maxDepositAmount) {
        throw new Error('Deposit amount exceeds 25% of total jobs to pay');
    }

    await profile.increment('balance', { by: amount });

    return profile;
};

module.exports = {
    getProfileById,
    depositBalance
};
