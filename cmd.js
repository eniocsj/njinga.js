require('dotenv').config();
const { inquirer } = require('./settings/utils');
const dialect = require('./system/databases/dialect');

inquirer.prompt(
    [
        {
          type: 'list',
          name: 'option',
          message: 'What do you want to do?',
          choices: [
            'Import tables from database into project.',
            'Export models from project into database.',
          ]
        }
    ]
).then (
    response => {
        response == 'Import tables from database into project.'
        ? dialect('import') : dialect('export');
    }
);
