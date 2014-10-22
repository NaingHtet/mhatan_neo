exports.validateEmail = function(email, callback) { 
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !regex.test(email)) {
    	callback('Email is not valid');
    }
}

exports.validatePassword = function(password, callback) {
  	if ( !password || password.length < 8) {
  		callback('Password must be longer than 7 characters');
	}
}
