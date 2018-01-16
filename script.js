
$(window).on('scroll', function() {

	// Scale effect on scroll to portfolio
	var StartPOS = $('#about').position().top;
	var scrollPOS = $(this).scrollTop();

	if (scrollPOS >= StartPOS) {
		$('#project1').css('transform', 'scale(1) translate3d(0,0,0)')
		$('#project2').css('transform', 'scale(1) translate3d(0,0,0)')
	} else {
		$('#project1').css('transform', 'scale(0) translate3d(0,0,0)')
		$('#project2').css('transform', 'scale(0) translate3d(0,0,0)')
	}

});



$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		// event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Get height of navbar(mob or screen)
		if ($('#navbar1').height() == 70) {
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


// collapse navbar after selection on mob
$(document).on('click','.navbar-collapse.in',function(e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
    		$(this).collapse('hide').delay(180);
		}
	});

});











