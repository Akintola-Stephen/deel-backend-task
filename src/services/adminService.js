const { getBestProfession, getBestClients } = require('../dal/adminDAL');

const bestProfession = async (start, end) => {
    return getBestProfession(start, end);
};

const bestClients = async (start, end, limit = 2) => {
    return getBestClients(start, end, limit);
};

module.exports = { bestProfession, bestClients };
