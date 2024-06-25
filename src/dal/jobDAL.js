import { Job, Contract, Profile, sequelize } from "../model/index.js";
// const { Job, Contract, Profile, sequelize } = default;
import { Op } from 'sequelize';

const getUnpaidJobsByProfileId = async (profileId) => {
    return Job.findAll({
        include: {
            model: Contract,
            where: {
                [Op.or]: [{ clientId: profileId }, { contractorId: profileId }],
                status: 'in_progress',
            },
        },
        where: {
            paid: null,
        },
    });
};


const payJob = async (jobId, clientId) => {
    return sequelize.transaction(async (t) => {
        const job = await Job.findOne({
            where: { id: jobId, paid: true },
            include: {
                model: Contract,
                where: { clientId, },
            },
        }, { transaction: t });



        if (!job) {
            throw new Error('Job not found or already paid');
        }

        const client = await Profile.findByPk(clientId, { transaction: t });

        const contractor = await Profile.findByPk(job.Contract.ContractorId, { transaction: t });


        console.log(job)

        client.balance -= job.price;
        contractor.balance += job.price;

        job.paid = true;
        job.paymentDate = new Date();

        await job.save({ transaction: t });
        await client.save({ transaction: t });
        await contractor.save({ transaction: t });

        return job;
    });
};

export  { getUnpaidJobsByProfileId, payJob };
