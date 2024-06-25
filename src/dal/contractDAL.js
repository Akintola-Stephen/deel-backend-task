import { Contract } from "../model/index.js";
import { Op } from 'sequelize';

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

export  { getContractById, getContractsByProfileId };
