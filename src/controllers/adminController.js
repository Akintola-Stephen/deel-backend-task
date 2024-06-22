const { bestProfession, bestClients } = require('../services/adminService');

const getBestProfession = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const profession = await bestProfession(start, end);
        res.json(profession);
    } catch (err) {
        next(err);
    }
};

const getBestClients = async (req, res, next) => {
    try {
        const { start, end, limit = 2 } = req.query;
        const clients = await bestClients(start, end, parseInt(limit, 10));
        res.json(clients);
    } catch (err) {
        next(err);
    }
};

module.exports = { getBestProfession, getBestClients };
