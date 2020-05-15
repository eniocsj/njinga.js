const os = require('os');
const ifaces = os.networkInterfaces();
const localhost = process.env.HOST || '127.0.0.1';
var interface

module.exports = () => {
	Object.keys(
		ifaces
	).forEach(
		ifname => {
			var alias = 0;
			ifaces[ifname].forEach(
				iface => {
					if (
						alias < 1
					) {
						if (
							iface.address !== localhost
						) {
							interface = iface.address
						}
					};
					++alias;
				}
			);
		}
	);
	return interface || 'http://' + localhost;
};