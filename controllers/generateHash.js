const crypto = require('crypto');
const argon2 = require('argon2');
const salt = Math.random().toString(36).substring(2, 15);

module.exports = password => {
	argon2.hash(password, salt).then(
		result => console.log(result)
	)
}