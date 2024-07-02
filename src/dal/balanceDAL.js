import { Job, Contract, Profile, sequelize } from "../model/index.js";


/**
 * Deposits a specified amount into the client's balance, ensuring it does not exceed 25% of total unpaid jobs in progress.
 * @param {number} clientId - The ID of the client making the deposit.
 * @param {number} amount - The amount of money to be deposited.
 * @returns {Promise<object>} - The updated client profile with the new balance if the deposit is successful.
 * @throws {Error} - If the client is not found or if the deposit amount exceeds the allowed limit.
 */
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

export { depositToBalance }