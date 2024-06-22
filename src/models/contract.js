const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Contract extends Model { }

Contract.init(
    {
        terms: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('new', 'in_progress', 'terminated'),
            allowNull: false,
            defaultValue: 'new'
        }
    },
    {
        sequelize,
        modelName: 'Contract'
    }
);

module.exports = Contract;
