const Sequelize = require('sequelize');
const { errorMessage } = require('../controllers/utils');

const sequelize = new Sequelize(
    process.env.SQL_DATABASE || false,
    process.env.SQL_USERNAME || false,
    process.env.SQL_PASSWORD || false,
    {
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT || false,
        dialect: process.env.SQL_DIALECT
    }
)
module.exports = {
    Sequelize,
    sequelize
};
