const { inquirer } = require('../../settings/utils');
const DBData = require('./DBData');

module.exports = option => {
    inquirer.prompt(
        [
            {
              type: 'list',
              name: 'dialect',
              message: 'What is the dialect?',
              choices: [
                'sqlite',
                'postgres',
                'mysql',
                'mariadb'
              ]
            }
        ]
    ).then (
        data => {
            data.option = option;
            DBData(data);
        }
    );
};
