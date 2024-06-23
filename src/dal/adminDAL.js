const { Job, Contract, Profile } = require("../model/index")
const { Op } = require('sequelize');

const getBestProfession = async (start, end) => {
    const professions = await Profile.findAll({
        include: {
            model: Contract,
            as: 'ContractorContracts',
            include: {
                model: Job,
                where: {
                    paid: true,
                    paymentDate: {
                        [Op.between]: [start, end],
                    },
                },
            },
        },
        attributes: ['profession', [sequelize.fn('sum', sequelize.col('ContractorContracts.Jobs.price')), 'total']],
        group: ['profession'],
        order: [[sequelize.fn('sum', sequelize.col('ContractorContracts.Jobs.price')), 'DESC']],
        limit: 1,
    });

    return professions[0];
};

const getBestClients = async (start, end, limit) => {
    const clients = await Profile.findAll({
        where: { type: 'client' },
        include: {
            model: Contract,
            as: 'ClientContracts',
            include: {
                model: Job,
                where: {
                    paid: true,
                    paymentDate: {
                        [Op.between]: [start, end],
                    },
                },
            },
        },
        attributes: ['id', [sequelize.literal("firstName || ' ' || lastName"), 'fullName'], [sequelize.fn('sum', sequelize.col('ClientContracts.Jobs.price')), 'paid']],
        group: ['Profile.id'],
        order: [[sequelize.fn('sum', sequelize.col('ClientContracts.Jobs.price')), 'DESC']],
        limit,
    });

    return clients;
};

module.exports = { getBestProfession, getBestClients };
