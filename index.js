const server = require('live-server');
var options = {
	port: 8080,
	host: '0.0.0.0',
	root: '',
	open: true,
	ignore: 'scss',
	file: '/public/index.html',
	wait: 1000,
	mount: [['/components', './node_modules']],
	logLevel: 2,
	middleware: [
		function (req, res, next) {
			next();
		},
	], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
server.start(options);
