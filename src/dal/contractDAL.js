import { Contract } from "../model/index.js";
import { Op } from 'sequelize';

/**
 * Retrieves a contract from the database where the contract's ID matches the provided `id`
 * and the `profileId` matches either the clientId or contractorId associated with the contract.
 * @param {number} id - The unique identifier of the contract.
 * @param {number} profileId - The unique identifier of the profile (either client or contractor).
 * @returns {Promise<object|null>} The contract object if found, otherwise null.
 */
const getContractById = async (id, profileId) => {
    try {
        const contract = await Contract.findOne({
            where: {
                id,
                [Op.or]: [{ clientId: profileId }, { contractorId: profileId }],
            },
        });
        return contract;
    } catch (error) {
        console.error('Error in getContractById:', error);
        return null;
    }
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
