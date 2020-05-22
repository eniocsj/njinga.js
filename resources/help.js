let help = require('../map');
module.exports = (req, res) => {
	let language = res.getHeader('Content-Language');
	return res.send(
		help
	)
};
