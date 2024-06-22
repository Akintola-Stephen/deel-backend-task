const { Profile, Job, Contract } = require('../models');
const { Op } = require('sequelize');

const depositToBalance = async (clientId, amount) => {
    return sequelize.transaction(async (t) => {
        const client = await Profile.findOne({ where: { id: clientId, type: 'client' } }, { transaction: t });

        if (!client) {
            throw new Error('Client not found');
        }

        const jobsToPay = await Job.findAll({
            include: {
                model: Contract,
                where: {
                    clientId,
                    status: 'in_progress',
                },
            },
            where: {
                paid: false,
            },
        }, { transaction: t });

        const totalToPay = jobsToPay.reduce((total, job) => total + job.price, 0);

        if (amount > totalToPay * 0.25) {
            throw new Error('Deposit amount exceeds 25% of total jobs to pay');
        }

        client.balance += amount;
        await client.save({ transaction: t });

        return client;
    });
};

module.exports = { depositToBalance };
