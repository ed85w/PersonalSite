$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;

			// Get height of navbar(mob or screen)
			if ($('#nav-main').height() == 70) {
				var navHeight = 70;
			} else {
				var navHeight = 50;
			}

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top-navHeight
			}, 800);

		} // End if

	});

	// scrolling effects
	$(window).on('scroll', function() {

		var portfolioStartPOS = $('#portfolio').position().top - 400;
		var scrollPOS = $(this).scrollTop();
		
		// zooms first 2 projects into view on scroll
		if (scrollPOS >= portfolioStartPOS) {
			$('#project1').css('transform', 'scale(1) translate3d(0,0,0)');
			$('#project2').css('transform', 'scale(1) translate3d(0,0,0)');
		} else {
			$('#project1').css('transform', 'scale(0) translate3d(0,0,0)');
			$('#project2').css('transform', 'scale(0) translate3d(0,0,0)');
		}
		
		// skills grid skills 'bounce in' when skills each grid div (row) is (nearly) scrolled to
		$('.skills-grid').each(function(){
			var skillsStartPos = $(this).position().top - 500;
			var firstTechDiv = $(this).children('div').first();

			if (scrollPOS >= skillsStartPos && !firstTechDiv.hasClass('bounceInDown')){
				$(this).children('div').each(function(i){

					function addKeyframe() {
						currentDiv.addClass('bounceInDown');
					}

					// stagger each skill
					var time = i * 100;
					var currentDiv = $(this);
					setTimeout(addKeyframe,time);
			
				});
			};
		
		});
	});
		

	// collapse navbar after selection on mob
	$('.navbar-nav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide').delay(180);
	});
		
}); // end of doc ready
	
// run keyframe animation once page has loaded
$(window).on('load', function() {
	window.setTimeout(function() {
		$('#blur-line').addClass('unblur'),
		$('.fa-arrow-alt-circle-down').addClass('slideInDown');
	}, 100);
});


