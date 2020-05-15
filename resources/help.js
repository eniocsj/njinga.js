module.exports = (req, res) => {
	let language = res.getHeader('Content-Language');
	return res.send(
		{
			"paths": {
				"help": {
					"get": {
						"summary": "Show helper."
					},
					"post": {
						"summary": "Show helper."
					}
				},
				"register": {
					"post": {
						"summary": "Register user.",
						"parameters": [
							{
								"username": {
									"summary": "Username.",
									"type": "string",
									"required": true,

								}
							},
							{
								"email": {
									"summary": "Email.",
									"type": "string",
									"required": true
								}
							},
							{
								"password": {
									"summary": "Password",
									"type": "string",
									"required": true
								}
							}
						]
					}
				},
				"login": {
					"post": {
						"summary": "Login",
						"parameters": [
							{
								"username": {
									"summary": "Username",
									"type": "string",
									"required": true
								},
								"password": {
									"summary": "Password",
									"type": "string",
									"required": true
								}
							}
						]
					}
				},
				"user": {
					"get": {
						"summary": "Get user data.",
						"description": "Shows the logged user data."
					},
					"patch": {
						"summary": "Patch user data",
						"description": "Changes some user data.",
						"parameters": [
							{
								"email": {
									"summary": "Change the user email.",
									"type": "string",
									"required": false
								},
								"password": {
									"summary": "Change the user password.",
									"type": "string",
									"required": false
								}
							}
						]
					},
					"delete": {
						"summary": "Delete user",
						"description": "Although it is mandatory that the user is logged in to use this route, username and password are required items to be sure that he wants to leave.",
						"parameters": [
							{
								"username": {
									"type": "string",
									"required": true
								},
								"password": {
									"type": "string",
									"required": true
								}
							}
						]
					}
				}
			}
		}
	)
};
