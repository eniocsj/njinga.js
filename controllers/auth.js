const {
	sequelize,
	Sequelize
} = require('../settings/databases');
const Auth = require(
	'../databases/models/auth'
);
const { crypto } = require('../settings/security');
const { errorMessage } = require('../controllers/utils');

module.exports = (res, username, password) => {
	let auth = Auth(
		sequelize,
		Sequelize
	);
	auth.findOne(
		{
			where: {
				username
			}
		}
	).then(
		user => {
			if (!user) {
				res.status(
					401
				).send(
					{
						'error': `${ username } not registered.`
					}
				)
			} else {
				crypto.verify(
					user.password.toString(),
					password.toString()
				).then(
					response => {
						if (response){
							res.status(
								200
							).send(
								{
									'success': 'Logged.'
								}
							);
						} else {
							errorMessage(
								`${ username } with password wrong.`
							)
							res.status(
								401
							).send(
								{
									'error': 'Password wrong.'
								}
							)
						}
					},
					error => {
						errorMessage(
							`Error: ${ error }.`
						);
						res.status(
							401
						).send(
							{
								'error': error.errors[0].message
							}
						)
					}
				)
			}
		}
	)
};
