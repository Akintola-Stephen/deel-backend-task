import { findContractById, findContractsByProfileId } from '../services/contractService.js';

/**
 * Retrieves a contract by its ID and the profile ID of the requester.
 * If the contract is found, it returns the contract data as a JSON response; otherwise, it returns a 404 status code.
 * @param {Object} req - The request object containing parameters and profile information.
 * @param {Object} res - The response object used to send back the desired HTTP response.
 * @param {Function} next - The next middleware function in the Express.js route.
 */
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

export  { getContract, getContracts };
