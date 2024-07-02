import { getContractById, getContractsByProfileId } from '../dal/contractDAL.js';


/**
 * Asynchronously retrieves a contract by its ID and profile ID.
 * @param {number} id - The unique identifier of the contract.
 * @param {number} profileId - The unique identifier of the profile (either client or contractor).
 * @returns {object|null} The contract object if found, otherwise null.
 */
const findContractById = async (id, profileId) => {
    return getContractById(id, profileId);
};

const findContractsByProfileId = async (profileId) => {
    return getContractsByProfileId(profileId);
};

export  { findContractById, findContractsByProfileId };
