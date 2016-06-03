(function(){
	var $btn = $('.Project-actions > span');
	var $plusAbout = $('.About-desc > .icon-plus')
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
	$($plusAbout).on('click', function(){
		$('.About-hidden').slideToggle();
		$plusAbout.toggleClass('is-active')
	});
	
})();