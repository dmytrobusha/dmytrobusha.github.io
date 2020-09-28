$(function(){//83 by default for one function
	$('.slider').slick({//84 for connect to html class "slider"
	arrows: false,//85 all values from main site slick
	fade: true,//
	autoplay: 3000,//
	dots: true//91 for activates rounds and show number of images as on tempalte
	});

	$('.header-btn').on('click', function(){//297 for connect to html class "header-btn", on - press (type click), function execute more times when click on "header-btn"
		$('.menu').addClass('active');//298 for connect to html class "menu", addClass - when execute adding double class "menu active"  
	});

	$('.close-btn').on('click', function(){//302 for connect to html class "close-btn", on - press (type click), function execute more times when click on "close-btn"
		$('.menu').removeClass('active');//303 for connect to html class "menu", removeClass - when execute deleting class "active"
	});
});