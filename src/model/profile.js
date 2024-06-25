import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

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



export default Profile;
