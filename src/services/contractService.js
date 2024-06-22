const { getContractById, getContractsByProfileId } = require('../dal/contractDAL');

const findContractById = async (id, profileId) => {
    return getContractById(id, profileId);
};

const findContractsByProfileId = async (profileId) => {
    return getContractsByProfileId(profileId);
};

module.exports = { findContractById, findContractsByProfileId };
