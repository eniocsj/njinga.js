const { sequelize, Sequelize } = require('../settings/databases');
const { errorMessage } = require('./utils');
const { crypto } = require('../settings/security');
const Auth = require('../databases/models/auth');
const hash = require('./generateHash');

module.exports = (res, username, email, password) => {
    let auth = Auth(
        sequelize,
        Sequelize
    );
    crypto.hash(
        password.toString()
    ).then(
        hash => {
            auth.create(
                {
                    username: username,
                    email: email,
                    password: hash
                }
            ).then(
                () => {
                    res.status(
                        201
                    ).send(
                        {
                            'success': 'User created.'
                        }
                    )
                },
                error => {
                    errorMessage(
                        `Error: ${ error }`
                    );
                    res.status(
                        400
                    ).send(
                        {
                            'error': error.message
                        }
                    )
                }
            );
        }
    );
};
