exports.index = function(req, res){
  res.render('index', { title: 'Mhatan : Your online diary and journal' });
};

exports.login = require('./login');
exports.signup = require('./signup');
exports.register = require('./register');