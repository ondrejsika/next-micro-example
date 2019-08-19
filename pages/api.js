const { send } = require('micro');
const { hostname, uptime, platform, arch } = require('os');

export default async (req, res) => {
	send(res, 200, {
		hostname: hostname(),
		uptime: uptime(),
		platform: platform(),
		arch: arch()
	});
};
