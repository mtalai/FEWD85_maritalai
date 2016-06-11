$(document).ready(function() {
	if ($(".hamburger").css('display') == 'block') {
		$( ".cross" ).hide();
		$( ".menu-item" ).hide();
		$( ".hamburger" ).click(function() {
			$( ".menu-item" ).slideToggle( "slow", function() {
				$( ".hamburger" ).hide();
				$( ".cross" ).show();
			});
		});

		$( ".cross" ).click(function() {
			$( ".menu-item" ).slideToggle( "slow", function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});
		});
	}


	$('.heading-text-animation').textillate({
		selector: '.texts',
		loop: true,
		minDisplayTime: 100000,
		initialDelay: 0,
		autoStart: true,
		inEffects: [ 'fadeInLeft'],
		outEffects: ['fadeOutRight'],
		in: {
			effect: 'fadeInLeft',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		},
		out: {
			effect: 'fadeOutRight',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		},
		callback: function () {},
		type: 'char'
	}); 

});


