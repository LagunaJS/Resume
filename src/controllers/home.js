var _ = require('underscore');

var homeController = function (server, users) {
	console.log('esta corriendo');

	server.get('/', function (req,res) {
		res.render('index');
	});
};
module.exports = homeController;