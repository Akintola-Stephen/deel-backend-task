import { getBestProfession, getBestClients } from '../dal/adminDAL.js';
// const  = default;

const bestProfession = async (start, end) => {
    return getBestProfession(start, end);
};

const bestClients = async (start, end, limit = 2) => {
    return getBestClients(start, end, limit);
};

export  { bestProfession, bestClients };
