const createUser = require('../controllers/createUser');
const {
	errorMessage,
	successMessage
} = require('../controllers/utils');

module.exports = (req, res) => {
	if (
		req.body.username &&
		req.body.email &&
		req.body.password
	) {
		createUser(
			res,
			req.body.username,
			req.body.email,
			req.body.password
		)
	} else {
		res.status(
			412
		).send(
			{
				'error':
					'Username, email and password required.'
			}
		)
	};
};