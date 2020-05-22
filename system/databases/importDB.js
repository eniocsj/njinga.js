const importDB = require('sequelize-automate');

module.exports = arguments => {
    console.log(`Dialect: ${ arguments.dialect }`);
    let dbOptions = {
        dialect: arguments.dialect,
        database: arguments.database,
        host: arguments.host || false,
        user: arguments.user || false,
        password: arguments.password || false,
        logging: false,
        define: {
            charset: arguments.charset || 'utf-8',
            timestamps: arguments.timestamps || false,
            dialect: arguments.dialect ||false
        }
    };
    let options = {
        type: arguments.type || 'js',
        dir: process.cwd() + '/databases/models'
    };
    const automate = new importDB(dbOptions, options);
    automate.run().then(
        () => {
            console.log("Done!");
        }
    )
};
