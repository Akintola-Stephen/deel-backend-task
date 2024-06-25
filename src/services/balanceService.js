import { depositToBalance } from '../dal/balanceDAL.js';

const depositBalance = async (clientId, amount) => {
    return depositToBalance(clientId, amount);
};

export  { depositBalance };
