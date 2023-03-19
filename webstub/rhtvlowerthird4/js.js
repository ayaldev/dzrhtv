$(document).ready(function() {
	$('#ulobalitadzrh4disabled').flowtype();
	$('.headz').wodry({
    	animation: 'rotateX',
    	delay: 15000,
    	animationDuration: 800
	});
	$('.headz2').wodry({
    	animation: 'rotateX',
    	delay: 15000,
    	animationDuration: 800
	});
	$('.headlines4').wodry({
    	animation: 'rotateX',
    	delay: 15000,
    	animationDuration: 800
	});
	$('.headlines5').wodry({
    	animation: 'rotateX',
    	delay: 7000,
    	animationDuration: 800
	});
	$('.headlines6').wodry({
    	animation: 'rotateX',
    	delay: 3000,
    	animationDuration: 800
	});
    $('.headlines').inewsticker({
		speed       : 3000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.headlines2').inewsticker({
		speed       : 5000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.headlines3').inewsticker({
		speed       : 10000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.newspepper').inewsticker({
		speed       : 9000,
		effect      : 'fade',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.pera').inewsticker({
		speed       : 2000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.temp').inewsticker({
		speed       : 5000,
		effect      : 'fade',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.promotion').inewsticker({
		speed       : 2000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.plugsdisabled').inewsticker({
		speed       : 15000,
		effect      : 'fade',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$(document).ready(function () {
            $(".live-tile,.flip-list").liveTile();
        });
/*
$( "body").fadeOut( 
           function(){
              location.reload(true);
              $( document).ready( function(){$(window).load(function () {
    $('#mask').fadeOut('slow');
});}); 
           });
*/

$(document).ready(function () {
	$('#temperatura').rssfeed('https://pipes.yahoo.com/pipes/pipe.run?_id=431681d6c5da45f512757db4ce124763&_render=rss',{
		header: false,
		titletag: 'div',
		date: false,
		content: false,
		limit: 100
	}, function(e) {
		$.zazar.rotate({selector: '#temperatura ul'});
	});
	
	$('#peranila').rssfeed('https://pipes.yahoo.com/pipes/pipe.run?_id=1352b0d2bdbb2881928edcac67cd29ca&_render=rss',{
		header: false,
		titletag: 'div',
		date: false,
		content: false,
		limit: 100
	}, function(e) {
		$.zazar.slider({selector: '#peranila ul'});
	});
	

});

});


