const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
 
const User = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'usuario',
    timetamps: false
});
 
module.exports = User;