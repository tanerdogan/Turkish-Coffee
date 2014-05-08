
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function(){

	// Preload the page with jPreLoader
		$('body').jpreLoader({
			splashID: "#jSplash",
			showSplash: true,
			showPercentage: true,
			autoClose: true,
			splashFunction: function() {
				$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
			}
		});


});
