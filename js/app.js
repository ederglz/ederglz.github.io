$(function(){
	$('#btn').on('click', submitData);

	function submitData(e) {
		e.preventDefault();
		$('#Loading').addClass('u-display')
		var name = $('#Name').val();
		var mail = $('#Mail').val();
		var subject = $('#Subject').val();
		var content = $('#Content').val();
		var contactData = {
			name: name,
			mail: mail,
			subject: subject,
			content: content
		}
		$.post("https://openws.herokuapp.com/contact?apiKey=dfb51db4f812f136ae94541542a6e8ef", contactData).done(function(){
			$('#Loading').removeClass('u-display')
		})
	}


	
})