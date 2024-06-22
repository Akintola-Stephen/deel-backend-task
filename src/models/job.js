const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class Job extends Model { }

Job.init({
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    paymentDate: {
        type: DataTypes.DATE,
    },
    contractId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Job',
});

module.exports = Job;
