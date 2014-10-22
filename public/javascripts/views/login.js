$(document).ready(function(){
	var lv = new LoginValidator();

	$('#login-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			if (lv.validateForm() == false){
				return false;
			} 	else{
				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') window.location.href = '/diary';
		},
		error : function(err){
			console.log(err);
            lv.showLoginError('Failed to login. ' + err.responseText);
		}
	});
});