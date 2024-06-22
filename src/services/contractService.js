const { Contract } = require('../models');

const getContractById = async (id) => {
    const contract = await Contract.findOne({ where: { id } });
    return contract;
};

const getContractsForUser = async (userId) => {
    const contracts = await Contract.findAll({
        where: {
            [sequelize.Op.or]: [
                { ClientId: userId },
                { ContractorId: userId }
            ],
            status: {
                [sequelize.Op.ne]: 'terminated'
            }
        }
    });
    return contracts;
};

const getActiveContracts = async () => {
    const contracts = await Contract.findAll({
        where: { status: 'in_progress' }
    });
    return contracts;
};

module.exports = {
    getContractById,
    getContractsForUser,
    getActiveContracts
};
