import { Job, Contract, Profile, sequelize } from "../model/index.js";
import { Op, fn, literal, col } from 'sequelize';

/**
 * Retrieves the profession that earned the most money within a specified date range.
 * @param {string} start - The start date of the range to filter jobs by payment date.
 * @param {string} end - The end date of the range to filter jobs by payment date.
 * @returns {Promise<Object>} The profession with the highest total earnings within the specified date range.
 */
const getBestProfession = async (start, end) => {
    const professions = await Job.findAll({
        where: {
            paid: true,
            paymentDate: {
                [Op.between]: [new Date(start), new Date(end)]
            }
        },
        include: [
            {
                model: Contract,
                include: [
                    { model: Profile, as: 'Contractor', attributes: [] }
                ],
                attributes: []
            }
        ],
        attributes: [
            [fn('sum', col('price')), 'total'],
            [col('Contract.Contractor.profession'), 'profession']
        ],
        group: [col('Contract.Contractor.profession')],
        order: [[literal('total'), 'DESC']]
    });

    return professions[0];
};

const getBestClients = async (start, end, limit) => {
    const clients = await Job.findAll({
        where: {
            paid: true,
            paymentDate: {
                [Op.between]: [new Date(start), new Date(end)]
            }
        },
        include: [
            {
                model: Contract,
                include: [
                    { model: Profile, as: 'Client', attributes: [] }
                ],
                attributes: []
            }
        ],
        order: [
            ['price', 'DESC']
        ],
        attributes: [
            [col('Job.id'), "id"], [col('Contract.Client.firstName'), 'firstName'], [col('Contract.Client.lastName'), 'lastName'], 'price'
        ],
        limit: limit ? limit : 2
    })
    return clients
};

export { getBestProfession, getBestClients };
