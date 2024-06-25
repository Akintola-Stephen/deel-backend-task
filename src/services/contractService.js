import { getContractById, getContractsByProfileId } from '../dal/contractDAL.js';


const findContractById = async (id, profileId) => {
    return getContractById(id, profileId);
};

const findContractsByProfileId = async (profileId) => {
    return getContractsByProfileId(profileId);
};

export  { findContractById, findContractsByProfileId };
