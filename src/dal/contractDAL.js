const { Contract } = require("../model/index")
const { Op } = require('sequelize');

const getContractById = async (id, profileId) => {
    return Contract.findOne({
        where: {
            id,
            [Op.or]: [{ clientId: profileId }, { contractorId: profileId }],
        },
    });
};

const getContractsByProfileId = async (profileId) => {
    return Contract.findAll({
        where: {
            [Op.or]: [{ clientId: profileId }, { contractorId: profileId }],
            status: { [Op.ne]: 'terminated' },
        },
    });
};

module.exports = { getContractById, getContractsByProfileId };
