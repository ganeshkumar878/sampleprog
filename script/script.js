jQuery(document).ready(function ($) {

var slideCount = $('.slider_wrap .slider_div .slider_list').length;
var slideWidth = $('.slider_wrap .slider_div .slider_list').width();
var slideHeight = $('.slider_wrap .slider_div .slider_list').height();
var sliderUlWidth = slideCount * slideWidth;

$('.slider_wrap').css({ width: slideWidth * 3, height: slideHeight + 50});

$('.slider_wrap .slider_div').css({ width: sliderUlWidth });

$('.slider_wrap .slider_div .slider_list').prependTo('.slider_wrap .slider_div');

function moveLeft() {
	$('.slider_wrap .slider_div').animate({
		left: + slideWidth
	}, 200, function () {
		$('.slider_wrap .slider_div .slider_list:last-child').prependTo('.slider_wrap .slider_div');
		$('.slider_wrap .slider_div').css('left', '');
	});
};

function moveRight() {
	$('.slider_wrap .slider_div').animate({
		left: - slideWidth
	}, 200, function () {
		$('.slider_wrap .slider_div .slider_list:first-child').appendTo('.slider_wrap .slider_div');
		$('.slider_wrap .slider_div').css('left', '');
	});
};

$('a.control_prev').click(function () {
	moveLeft();
});

$('a.control_next').click(function () {
	moveRight();
});

});      