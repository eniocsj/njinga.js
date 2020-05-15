const readline = require(
	'../settings/utils'
).readline;
const { errorMessage } = require('../controllers/utils');
const dbQuestions = require('./databases/dbQuestions');

const options = [
	'1', '2'
];
module.exports = () => {
	let option = readline.question(
		'\nWhat do you want to do?\n' +
		'1 - Import tables from database into project.\n' +
		'2 - Export models from project into database.\n',
		{
			limit: options
		}
	)
	switch(option) {
		case '1':
			dbQuestions('import');
			break;
		case '2':
			dbQuestions('export');
			break;
	}
}