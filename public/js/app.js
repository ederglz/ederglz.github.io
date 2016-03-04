(function(){
	var $btn = $('#plusBtn');
	$btn.on('click', function(){
		$(this).toggleClass('is-active');
		$('.Project-info').toggleClass('is-visible')
	});
})();