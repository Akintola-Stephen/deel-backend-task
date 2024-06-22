const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class Contract extends Model { }

Contract.init({
    terms: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('new', 'in_progress', 'terminated'),
        allowNull: false,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contractorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Contract',
});

module.exports = Contract;
