import { depositToBalance } from '../dal/balanceDAL.js';

/**
 * Deposits the specified amount into a client's balance.
 * @param {number} clientId - The ID of the client.
 * @param {number} amount - The amount to deposit.
 * @returns {Promise<object>} - A promise that resolves to the updated client object if successful, or rejects with an error message.
 */
const depositBalance = async (clientId, amount) => {
    return depositToBalance(clientId, amount);
};

export  { depositBalance };
