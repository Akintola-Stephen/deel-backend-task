const { findContractById, findContractsByProfileId } = require('../services/contractService');

const getContract = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contract = await findContractById(id, req.profile.id);
        if (!contract) {
            return res.status(404).end();
        }
        res.json(contract);
    } catch (err) {
        next(err);
    }
};

const getContracts = async (req, res, next) => {
    try {
        const contracts = await findContractsByProfileId(req.profile.id);
        res.json(contracts);
    } catch (err) {
        next(err);
    }
};

module.exports = { getContract, getContracts };
