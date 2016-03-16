(function(){
	var $btn = $('.Project-actions > span');
	var Animation = function(el){
		this.el = el;
		$('#' + el).toggleClass('is-active');
		$('.' + el).slideToggle();
	};
	$btn.on('click', function(){
		var $selector = $(this).attr('id');
		var proj = new Animation($selector);
		return proj;
	});
})();