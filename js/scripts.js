;
(function(window, document, $, undefined) {

	'use strict';

	$('#profile-tabs').tabs({
		'active': '#about'
	});

	$('.accord-content').hide();
	$('.accord-title').first().toggleClass("on").toggleClass("off");
	$('.accord-content').first().slideDown().toggleClass('active');
	$('.accord-title').toggleClass("off");
	$('.accord-title').click(function() {
		if ($(this).is('.off')) {
			$('.on').toggleClass("off").toggleClass("on").next().slideToggle().toggleClass("active");
			$(this).toggleClass("off").toggleClass("on");
			$(this).next().slideToggle().toggleClass("active");
		} else {
			$(this).toggleClass("on").toggleClass("off");
			$(this).next().slideToggle().toggleClass("active");
		}
		return false;
	});
	$('.accord-title').hover(function() {
		if ($(this).hasClass("on")) {
			$(this).attr('title', 'Click to hide content');
		} else {
			$(this).attr('title', 'Click to show content');
		}
	})

	$('#contact .row').contents().filter(function() {
		return this.nodeType === 3;
	}).remove();
	$('.site-list').contents().filter(function() {
		return this.nodeType === 3;
	}).remove();
	$('.skills-list').contents().filter(function() {
		return this.nodeType === 3;
	}).remove();

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
			if (iever < 9)
				return iever;
		}
		// other browser
		return false;
	}
	if (isIE()) {
		var ie_class = '';
		for (var y = parseInt(isIE()); y < 9; y++)
			ie_class = ie_class + 'lt-ie' + (y + 1) + ' ';
		$('html').addClass(ie_class);
	}
	/* END - IE Hack Fix */

})(window, document, $);