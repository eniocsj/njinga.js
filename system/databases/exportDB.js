const path = require('path');
const fs = require('fs');
const root = process.cwd();

module.exports = arguments => {
    if (arguments.database) {
        let { Sequelize } = require(
            root + '/settings/databases'
        );
        var sequelize = new Sequelize(
            {
                database: arguments.database,
                host: arguments.host || false,
                dialect: arguments.dialect,
                user: arguments.user || false,
                password: arguments.password || false,
                define: {
                    charset: arguments.charset || 'utf-8',
                    timestamps: arguments.timestamps || false,
                    dialect: arguments.dialect ||false
                }
            }
        );
    } else {
        var sequelize = require(
            root + '/settings/databases'
        ).sequelize;
    }
    let modelPath = root + '/databases/models'
    let db = {};
    fs
    .readdirSync(modelPath)
    .filter(
        file => {
            return (
                file.indexOf('.') !== 0
            ) && (
                file !== path.basename(__filename)
            ) && (
                file.slice(-3) === '.js'
            );
        }
    )
    .forEach(
        file => {
            if (file != 'index.js') {
                const model = sequelize['import'](
                    path.join(modelPath, file)
                );
                db[model.name] = model;
            }
        }
    );
    Object.keys(db).forEach(
        modelName => {
            if (
                db[modelName].associate
            ) {
                db[modelName].associate(db);
            }
        }
    );
    sequelize.sync(
        {
            force: true
        }
    );
};
