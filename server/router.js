var routes = require('./routes');

module.exports = function(app) {
	app.get('/', routes.index);
	app.post('/', routes.login);

	app.get('/signup', routes.signup);
	app.post('/signup', routes.register);
}