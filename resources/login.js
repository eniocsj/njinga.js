const createUser = require('../controllers/createUser');
const login = require('../controllers/auth');

module.exports = (req, res) => {
	if (
		req.body.username &&
		req.body.password
	) {
		login(
			res,
			req.body.username,
			req.body.password
		)
	} else {
		res.status(
			400
		).send(
			{
				'error': 'Username and password required.'
			}
		)
	}
}
