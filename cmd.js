#!/usr/bin/env node
const args = require('yargs');
const {name, description, version} = require('./package');
const { warningMessage } = require('./controllers/utils');
const root = require('./system/questionsRoot');
const importDB = require('./system/databases/importDB');
const exportDB = require('./system/databases/exportDB');

args
.scriptName(name)
.usage('$0 <cmd> [args]')
.command(
	'$0',
	'',
	() => {
		root();
	},
	argv => {}
)
.command(
	'test',
	'Tests',
	() => {
		process.emitWarning('Something happened!', 'CustomWarning', 'WARN001');
	},
	argv => {}
)
.command(
	'exportdb [args]',
	'Export models into database.',
	yargs => {
		yargs.positional(
			'--database',
			{
				type: 'string',
				describe: 'Name of the database',
				alias: '-db'
			}
		);
		yargs.positional(
			'--host',
			{
				type: 'string',
				describe: 'Host address.',
				alias: '-h'
			}
		);
		yargs.positional(
			'--dialect',
			{
				type: 'string',
				describe: 'Driver name used by Sequelize.',
				alias: '-d',
			}
		);
		yargs.positional(
			'--user',
			{
				type: 'string',
				describe: 'User.',
				alias: '-u',
			}
		);
		yargs.positional(
			'--password',
			{
				type: 'string',
				describe: 'Password.',
				alias: '-p',
			}
		);
	},
	argv => {
		exportDB(argv);
	}
)
.command(
	'importdb [args]',
	'Import tables from a database into \nSequelize models.',
	yargs => {
		yargs.positional(
			'--database',
			{
				type: 'string',
				describe: 'Name of the database',
				alias: '-db'
			}
		);
		yargs.positional(
			'--host',
			{
				type: 'string',
				describe: 'Host address.',
				alias: '-h'
			}
		);
		yargs.positional(
			'--dialect',
			{
				type: 'string',
				describe: 'Driver name used by Sequelize.',
				alias: '-d',
			}
		);
		yargs.positional(
			'--user',
			{
				type: 'string',
				describe: 'User.',
				alias: '-u',
			}
		);
		yargs.positional(
			'--password',
			{
				type: 'string',
				describe: 'Password.',
				alias: '-p',
			}
		);
		yargs.positional(
			'--charset',
			{
				type: 'string',
				describe: 'Charset. Default: "utf-8".',
				alias: '-c',
			}
		);
		yargs.positional(
			'--type',
			{
				type: 'string',
				describe: 'Type. Default: "json".',
				alias: '-t',
			}
		);
		yargs.positional(
			'--tables',
			{
				type: 'string',
				describe: 'Tables to import, as an array. Default: all tables.',
				alias: '-tb',
			}
		);
		yargs.positional(
			'--timestamp',
			{
				type: 'string',
				describe: 'Timestamp. Default: false',
				alias: '-ts',
			}
		);
	},
	argv => {
		importDB(argv);
	}
)
.help()
.argv
