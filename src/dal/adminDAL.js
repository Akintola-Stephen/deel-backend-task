import { Job, Contract, Profile, sequelize } from "../model/index.js";
// const { Job, Contract, Profile, sequelize } = default;
import { Op, fn, literal, col } from 'sequelize';

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
    })

    return professions[0]
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

export  { getBestProfession, getBestClients };
