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

	$('#profile-tabs').tabs();

	$('').contents().filter(function() { return this.nodeType === 3; }).remove();

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