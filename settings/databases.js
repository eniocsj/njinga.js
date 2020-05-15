const Sequelize = require('sequelize');
const { errorMessage } = require('../controllers/utils');

const sequelize = new Sequelize(
	process.env.SQL_DATABASE,
	process.env.SQL_USERNAME,
	process.env.SQL_PASSWORD,
	{
		host: process.env.SQL_HOST,
		port: process.env.SQL_PORT,
		dialect: process.env.SQL_DIALECT
	}
)
module.exports = {
	Sequelize,
	sequelize
};
