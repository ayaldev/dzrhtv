$(document).ready(function() {
    $('.headlines').inewsticker({
		speed       : 15000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.pr').inewsticker({
		speed       : 100,
		effect      : 'typing',
		dir         : 'ltr',
		delay_after : 5000		
	});
	$('.fx').inewsticker({
		speed       : 3000,
		effect      : 'fade',
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
	$('.plugs').inewsticker({
		speed       : 6000,
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
	
	$('#ulobalitadyaryo').rssfeed('https://pipes.yahoo.com/pipes/pipe.run?_id=67d284b7def3886cf51fce8fe9cdf2fb&_render=rss',{
		header: false,
		titletag: 'div',
		date: false,
		content: false,
		limit: 100
	}, function(e) {
		$.zazar.ticker({selector: '#ulobalitadyaryo ul'});
	});
});



jwerty.key('a', function() {
  $( "#ulobalitadzrh, #gif" ).animate({width: 'toggle'});

});



});


