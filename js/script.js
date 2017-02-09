/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

// Parallax
$(window).scroll(function () {
	"use strict";

	// How far I have scrolled
	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px , ' + wScroll / 10 + '%)'
	});
	$('.name').css({
		'transform' : 'translate(0px ,  ' + wScroll / 4 + '%)'
	});
});
// Smooth Scrolling
$(document).ready(function () {
  // Add smooth scrolling to all links
    "use strict";
    $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
            event.preventDefault();

      // Store hash
            var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
