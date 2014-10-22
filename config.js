module.exports = function(app, express) {

	app.configure(function(){
		app.set('port', process.env.PORT || 3000);
		app.set('views', __dirname + '/public/views');
		app.set('view engine', 'jade');
		app.set('view options', { doctype : 'html', pretty : true });
		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(app.router);
		app.use(require('stylus').middleware(__dirname + '/public'));
		app.use(express.static(__dirname + '/public'));
		// development only
		if ('development' == app.get('env')) {
  			app.use(express.errorHandler());
		}

	})
}
