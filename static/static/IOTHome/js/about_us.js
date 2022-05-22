(function ($) {
    "use strict";

    /*--/ Star Typed /--*/
	if ($('.text-slider').length === 1) {
    const typed_strings = $('.text-slider-items').text();
		const typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	  // Preloader
      $(window).on('load', function () {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
          });
        }
      });


    /*--/ Testimonials owl /--*/
    /*$('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });*/

})(jQuery);




