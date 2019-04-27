$(document).ready(function() {
	$('#holder').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		//color = $(this).data("color");
		//$('body').css('background-color', color );
		$('#holder').css('transform','matrix(1,0,0,1,0,1200)' );
		$('#holder').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

	$('h1').click(function(event) {
		$('#holder').toggleClass("visible");
	});
	
	
$('#banneranim').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		//color = $(this).data("color");
		//$('body').css('background-color', color );
		$('#banneranim').css('transform','matrix(1,0,0,1,1200,0)' );
		$('#banneranim').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

	$('h1').click(function(event) {
		$('#banneranim').toggleClass("visible");
	});


$('#topbanneranim').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		//color = $(this).data("color");
		//$('body').css('background-color', color );
		$('#topbanneranim').css('transform','matrix(1,0,0,1,0,-1200)' );
		$('#topbanneranim').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

	$('h1').click(function(event) {
		$('#featureanim').toggleClass("visible");
	});
	$('#featureanim').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		// color = $(this).data("color");
		//$('body').css('background-color', color );
		$('#featureanim').css('transform','matrix(1,0,0,1,-1200,0)' );
		$('#featureanim').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

	$('h1').click(function(event) {
		$('#featureanim').toggleClass("visible");
	});
});   
