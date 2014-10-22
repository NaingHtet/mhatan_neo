module.exports = function(req, res){
	var DBM = require('../dbmanager');
  var validator = require('../formValidator');
  	var form_email = req.param('email');
    var form_password = req.param('password');

    validator.validateEmail(form_email, function(err) {
      if (err) res.send(400, err);
    });

    validator.validatePassword(form_password, function(err) {
      if (err) res.send(400, err);
    });

  	DBM.getPassword(form_email, function(err, password) {
  		if (err) {
        res.send(400, err);
  		} else {
        //ENCRYPTION!!!!
  			if ( password == form_password) {
          res.send(200, 'correct password');
        } else {
          res.send(400, 'incorrect password');
        }
  		}
  	});
};

