const { inquirer } = require('../../settings/utils');
const database = require('./database');
const importDB = require('./importDB');
const exportDB = require('./exportDB');


module.exports = data => {
    data.dialect == 'sqlite'
    ?
        inquirer.prompt(
            database[2]
        ).then (
            answers => {
                answers.dialect = data.dialect;
                data.option == 'Import tables from database into project.'
                ?
                    importDB(answers)
                :
                    exportDB(answers)
            }
        )
    :
        inquirer.prompt(
            database
        ).then (
            answers => {
                answers.dialect = data.dialect;
                data.option == 'Import tables from database into project.'
                ?
                    importDB(answers)
                :
                    exportDB(answers)
            }
        );
};
