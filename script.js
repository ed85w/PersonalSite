
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


	$(window).on('scroll', function() {

		// Scale effect on scroll to portfolio
		var portfolioStartPOS = $('#portfolio').position().top - 500;
		var skillsStartPos = $('.key-skills').position().top - 500;
		var scrollPOS = $(this).scrollTop();
		var firstTechDiv = $('.tech-div:first');

		if (scrollPOS >= portfolioStartPOS) {
			$('#project1').css('transform', 'scale(1) translate3d(0,0,0)')
			$('#project2').css('transform', 'scale(1) translate3d(0,0,0)')
		} else {
			$('#project1').css('transform', 'scale(0) translate3d(0,0,0)')
			$('#project2').css('transform', 'scale(0) translate3d(0,0,0)')
		}

		// skills grid skills 'bounce in' when skills grid div is (nearly) scrolled to
		if (scrollPOS >= skillsStartPos && !firstTechDiv.hasClass('bounceInDown')){
			$('.skills-grid').children('div').each(function (i) {

				function addKeyframe() {
					currentDiv.addClass('bounceInDown');
					console.log('css added to ' + currentDiv);
				}
				var time = i * 100
				var currentDiv = $(this)
				setTimeout(addKeyframe,time);

			});
		};



	});


	// collapse navbar after selection on mob
	$(document).on('click','.navbar-collapse.in',function(e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
    		$(this).collapse('hide').delay(180);
		}
	});

	// email js code
	var myform = $("form#myform");
	myform.submit(function(event){
		event.preventDefault();

		var params = myform.serializeArray().reduce(function(obj, item) {
     	obj[item.name] = item.value;
     	return obj;
  	}, {});

  	var service_id = "default_service";
  	var template_id = "template_VTGznICV";
  	myform.find("button.btn").text("Sending...");
  	emailjs.send(service_id,template_id,params)
	  	.then(function(){ 
			alert("Message sent! I'll get back to you as soon as possible!");
       		myform.find("button.btn").text("Send");
       		$('#myform')[0].reset();
     	}, function(err) {
	       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
	       myform.find("button.btn").text("Send");
	    });
	  return false;
	});

}); // end of doc ready


// run keyframe animation once page has loaded
$(window).on('load', function() {
	window.setTimeout(function() {
		$('#blur-line').addClass('add_keyframe');
	}, 100);
});


















