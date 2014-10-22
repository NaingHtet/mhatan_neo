module.exports = function(req, res){
	var DBM = require('../dbmanager');
  var moduuid = require('node-uuid');

  	var email = req.param('email');
    var password = req.param('password');
    var repassword = req.param('repassword');
    var penname = req.param('penname');
    var uuid = moduuid.v1();

    //Checker
    if ( !validateEmail(email) ) {
      res.send('Wrong Email Format', 400);
      return false;
    }
    if ( !validatePassword(password) || password != repassword ) {
      res.send('Wrong Password Format', 400);
      return false;
    }
    if ( !validatePenName(penname) ) {
      res.send('Wrong PenName Format', 400);
      return false;
    }
    if ( !uuid ){
      res.send('Registration Failed', 400);
      return false;
    }

  	DBM.registerUser(email, password, penname, uuid, function(err, data) {
  		if (err) {
  			console.log(err);
        res.send('Registration Failed', 400);
  		} else {
  			res.redirect('/');
  		}
  	});
};

function validateEmail(email) { 
  if ( !email ) {
    return false;
  } else {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
} 

function validatePassword(password) {
  if ( !password ) {
    return false;
  } else {
    return (password.length > 7);
  }
}

function validatePenName(penname) {
  if ( !penname ) {
    return false;
  } else {
    return (penname.length > 2);
  }
}