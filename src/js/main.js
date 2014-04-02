$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});
	
	$('.toggle-submenu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#sec-nav').toggle();
		
		evt.preventDefault();
		
	});


	$('#sec-nav a').click(function(evt){
		var scroll = $(document).scrollTop();
		$('.toggle-submenu span').text($(evt.target).text());
		$('.section-block').removeClass('active-section');
		$($(evt.target).attr('href')).addClass('active-section');
		$('#sec-nav').toggle();
		$('#sec-nav li').removeClass('current-item');
		$(evt.target).parent().addClass('current-item');
		evt.preventDefault();
		window.location.hash = $(evt.target).attr('href');
		$(document).scrollTop(scroll);
		$('.orbit-slides-container').css('height','auto');
	});

	function segNavNavigate(hash) {
		$('.toggle-submenu span').text($('#sec-nav a[href="'+hash+'"]').text());
		$('.mod').removeClass('active-section');
		$(hash).addClass('active-section');
		$('#sec-nav li').removeClass('current-item');
		$('#sec-nav a[href="'+hash+'"]').parent().addClass('current-item');
	}

	if($(window.location.hash).length > 0) {
		segNavNavigate(window.location.hash);
	}

	$('a.hash').click(function(evt){

		var prev_pos = $(document).scrollTop();

		evt.preventDefault();
		segNavNavigate($(this).attr('href'));
		window.location.hash = $(this).attr('href');
		$(document).scrollTop(prev_pos);

	});

	$(window).resize(function() {

		if(parseInt($('#brand-logo').css('font-size')) === 0 && $('#prime-nav').css('display') != 'block') {
			$('#prime-nav').hide();
		}

		if(parseInt($('#brand-logo').css('font-size')) !== 0 && $('#prime-nav').css('display') == 'block') {
			$('#prime-nav').show();
			$('#site-head .toggle-menu').removeClass('active');
		}

	});

});