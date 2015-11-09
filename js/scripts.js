/**
 * the semi-colon before the function invocation is a safety
 * net against concatenated scripts and/or other plugins
 * that are not closed properly.

 * undefined is used here as the undefined global
 * variable in ECMAScript 3 and is mutable (i.e. it can
 * be changed by someone else). undefined isn't really
 * being passed in so we can ensure that its value is
 * truly undefined. In ES5, undefined can no longer be
 * modified.

 * window and document are passed through as local
 * variables rather than as globals, because this (slightly)
 * quickens the resolution process and can be more
 * efficiently minified (especially when both are
 * regularly referenced in our plugin).
 */

;(function(window, document, $, undefined) {

	'use strict';

	// Fancybox
	$('.fancy-content').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		nextEffect	: 'fade',
		prevEffect	: 'fade',
		helpers 	: {
			media : {}
		},
		autoCenter	: true
	});

	$('.fancy-video').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		width		: 853,
		height		: 480,
		scrolling   : 'no',
		helpers 	: {
			media : {}
		},
		autoCenter	: true
	});
	
	// Slicknav Menu
	$('#menu-top-menu').slicknav({
		prependTo:'#mobile-menu',
		allowParentLinks: true
	});

	// Banner
	$('#banner-slide').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		fade: true,
		infinite: true,
		adaptiveHeight: true,
		pauseOnHover: false,
		arrows: false
	});
	$('.banner-slide img').responsiveImages();
	
/********************** For banner with sync navigation
	// Banner
	$('#banner-slide').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		fade: true,
		infinite: true,
		adaptiveHeight: true,
		pauseOnHover: false,
		arrows: false,
		asNavFor: '.lead-in-01'
	});
	$('.banner-slide img').responsiveImages();
	
	// Banner content
	$('.lead-in-01').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		fade: true,
		infinite: true,
		adaptiveHeight: true,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '#banner-slide',
		dots: true,
		arrows: false
	});
************************/

	// remove the space between inline-block elements
	$('').contents().filter(function() { return this.nodeType === 3; }).remove();
	
	// Next and Prev text nggallery
	$('.prev').text('Prev');
	$('.next').text('Next');
	
	// Add hover border on image galleries
	$('.ngg-gallery-thumbnail a').each(function() {
		$(this).append('<div class="ngg-image-hover"><div class="top-border"></div><div class="right-border"></div><div class="bottom-border"></div><div class="left-border"></div></div>');
	});
	
	// Form input focus
	if($('.gform_body').length){
		$('.gform_body input[type="text"]').focusin(function(){
			$(this).parent().parent().find('.gfield_label').addClass('gfield_label_focusin');
			$(this).css('border','1px solid #ff7302');
		});
		$('.gform_body input[type="text"]').focusout(function(){
			$(this).css('border','1px solid #b9c5dd');
			$(this).parent().parent().find('.gfield_label').removeClass('gfield_label_focusin');
		});
		$('.gform_body textarea').focusin(function(){
			$(this).css('border','1px solid #ff7302');
			$(this).parent().parent().find('.gfield_label').addClass('gfield_label_focusin');
		});
		$('.gform_body textarea').focusout(function(){
			$(this).css('border','1px solid #b9c5dd');
			$(this).parent().parent().find('.gfield_label').removeClass('gfield_label_focusin');
		});
	}

	// SEO email button
	$('#btn-email').on('click', function() {
		_gaq.push(['_trackEvent', 'Email', 'Click', 'Header']);
	});
	
	/* Dealing with FOUC */
	$('html').removeClass('no-js').addClass('js')
		
	/* BEGIN - IE Hack Fix */
	function isIE() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');
		if (msie > 0) {
			// IE 10 or older => return version number
			var iever = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
			// return version number if lesser than ver 9
			if(iever < 9)
				return iever;
		}
		// other browser
		return false;
	}
	if(isIE()) {
		var ie_class = '';
		for(var y=parseInt(isIE()); y<9 ;y++)
			ie_class = ie_class + 'lt-ie' + (y+1) + ' ';
		$('html').addClass(ie_class);
	}
	/* END - IE Hack Fix */

})(window, document, jQuery);