const { Sequelize } = require('sequelize');
const Contract = require('./contract');
const Job = require('./job');
const Profile = require('./profile');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
});

Contract.init(sequelize);
Job.init(sequelize);
Profile.init(sequelize);

// Define associations
Profile.hasMany(Contract, { as: 'ClientContracts', foreignKey: 'clientId' });
Profile.hasMany(Contract, { as: 'ContractorContracts', foreignKey: 'contractorId' });
Contract.belongsTo(Profile, { as: 'Client', foreignKey: 'clientId' });
Contract.belongsTo(Profile, { as: 'Contractor', foreignKey: 'contractorId' });
Contract.hasMany(Job, { foreignKey: 'contractId' });
Job.belongsTo(Contract, { foreignKey: 'contractId' });

module.exports = { sequelize, Contract, Job, Profile };
