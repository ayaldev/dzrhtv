$(document).ready(function() {
    $('.headlines').inewsticker({
		speed       : 15000,
		effect      : 'slide',
		dir         : 'ltr',
		delay_after : 1000		
	});
	$('.program').inewsticker({
		speed       : 60000,
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
	$(document).ready(function () {
            $(".live-tile,.flip-list").liveTile();
        });

});
