const { depositToBalance } = require('../dal/balanceDAL');

const depositBalance = async (clientId, amount) => {
    return depositToBalance(clientId, amount);
};

module.exports = { depositBalance };
