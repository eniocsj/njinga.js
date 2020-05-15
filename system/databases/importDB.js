const importDB = require('sequelize-auto');

module.exports = arguments => {
	let dbOptions = {
		database: arguments.database || false,
		host: arguments.host || false,
		dialect: arguments.dialect || false,
		user: arguments.user || false,
		password: arguments.password || false,
		logging: false,
		define: {
			charset: arguments.charset || 'utf-8',
			timestamps: arguments.timestamps || false
		}
	};
	let options = {
		type: arguments.type || 'js',
		dir: process.cwd() + '/databases/models'
	};
	const automate = new importDB(dbOptions, options);
	(
		async () => {
			const code = await automate.run();
		}
	)().then(
		() => {
			console.log("Done!")
		}
	)
};