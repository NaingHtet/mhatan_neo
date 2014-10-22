function LoginValidator() {
	this.showLoginError = function(m) {
		$('#alert-box').text(m).show();
	}
}

LoginValidator.prototype.validateForm = function() {
	if ($('#login-email-input').val() == ''){
		this.showLoginError('Please enter an email.');
		$('#login-email-input').focus();
		return false;
	} else if ($('#login-password-input').val() == ''){
		this.showLoginError('Please enter a password.');
		$('#login-password-input').focus();
		return false;
	} else {
		return true;
	}
}

