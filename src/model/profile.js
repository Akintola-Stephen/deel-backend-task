const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class Profile extends Model { }

Profile.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
    },
    type: {
        type: DataTypes.ENUM('client', 'contractor'),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Profile',
});



module.exports = Profile;
