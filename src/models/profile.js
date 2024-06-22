const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Profile extends Model { }


Profile.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.DECIMAL(12, 2),
            defaultValue: 0.0
        },
        type: {
            type: DataTypes.ENUM('client', 'contractor'),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Profile'
    }
);

module.exports = Profile;
