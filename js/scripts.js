$(document).ready(function(){
	
	/*- main-navi-btn -*/
	var siteToggle = $('.main-navi-btn'),
		layer=$('.site__layer'),
		siteMenu= $('.header__right-col');

	siteToggle.on('click', function(){
		layer.toggleClass('active');
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hidden');
	});
	
	$('.site__layer').on('click', function(){
		layer.removeClass('active');
		siteToggle.removeClass('collapsed');
		siteMenu.removeClass('show');
		$('body').removeClass('overflow-hidden');
	});
	
	/*- promo__slider -*/
	$('.promo__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

});











