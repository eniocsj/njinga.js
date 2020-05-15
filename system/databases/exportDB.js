const path = require('path');
const fs = require('fs');
const root = process.cwd();

module.exports = arguments => {
	if (arguments.database) {
		let Sequelize = require(
			root + '/settings/databases'
		).Sequelize;
		var sequelize = new Sequelize(
			{
				database: arguments.database,
				host: arguments.host || false,
				dialect: arguments.dialect || false,
				user: arguments.user || false,
				password: arguments.password || false
			}
		);
	} else {
		var sequelize = require(
			root + '/settings/databases'
		).sequelize;
	}
	fs
	.readdirSync('databases/models')
	.filter(
		file => {
			return (
				file.indexOf('.') !== 0
			) && (
				file.slice(-3) === '.js'
			) && (
				file != 'index.js'
			);
  		}
  	)
	.forEach(
		file => {
			let model = sequelize['import'](
				path.join(
					root + '/databases/models',
					file
				)
			);
			model.sync()
		}
	);
}
