const { shell, readline } = require('../../settings/utils');
const exportDB = require('./exportDB');
const importDB = require('./importDB');
const dialects = [
	'sqlite',
	'postgres',
	'mysql',
	'mssql'
]


module.exports = (type) => {
	let datas = {};
	datas.host = readline.question(
		'Host: '
	)
	datas.database = readline.question(
		'Database: '
	)
	datas.user = readline.question(
		'Username: '
	)
	datas.password = readline.question(
		'Password: ',
		{
			hideEchoBack: true
		}
	)
	datas.dialect = readline.question(
		'Dialect: ',
		{
			limit: dialects
		}
	)
	if (
		type == 'export'
	) {
		exportDB(
			{
				...datas
			}
		)
	} else if (
		type == 'import'
	) {
		importDB(
			{
				...datas
			}
		)
	}
}