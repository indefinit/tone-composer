'use strict';
/*************************************
//
//   /*              ___           ___           ___           ___                       ___                       ___     
			___        /\__\         /\  \         /\  \         /\  \          ___        /\__\          ___        /\  \    
		 /\  \      /::|  |       /::\  \       /::\  \       /::\  \        /\  \      /::|  |        /\  \       \:\  \   
		 \:\  \    /:|:|  |      /:/\:\  \     /:/\:\  \     /:/\:\  \       \:\  \    /:|:|  |        \:\  \       \:\  \  
		 /::\__\  /:/|:|  |__   /:/  \:\__\   /::\~\:\  \   /::\~\:\  \      /::\__\  /:/|:|  |__      /::\__\      /::\  \ 
	__/:/\/__/ /:/ |:| /\__\ /:/__/ \:|__| /:/\:\ \:\__\ /:/\:\ \:\__\  __/:/\/__/ /:/ |:| /\__\  __/:/\/__/     /:/\:\__\
 /\/:/  /    \/__|:|/:/  / \:\  \ /:/  / \:\~\:\ \/__/ \/__\:\ \/__/ /\/:/  /    \/__|:|/:/  / /\/:/  /       /:/  \/__/
 \::/__/         |:/:/  /   \:\  /:/  /   \:\ \:\__\        \:\__\   \::/__/         |:/:/  /  \::/__/       /:/  /     
	\:\__\         |::/  /     \:\/:/  /     \:\ \/__/         \/__/    \:\__\         |::/  /    \:\__\       \/__/      
	 \/__/         /:/  /       \::/__/       \:\__\                     \/__/         /:/  /      \/__/                  
								 \/__/         ~~            \/__/                                   \/__/                              
Tone composer, a live coding environment for Tone.js
http://studioindefinit.com , 2014
*/
(function($, a){
	var editor = a.edit('editor');
	var session = editor.getSession();
	var inactivityTime;
	editor.setTheme('ace/theme/monokai');
	session.setMode('ace/mode/javascript');

	function resetTimer(){
		if (inactivityTime !== undefined) {
			clearTimeout(inactivityTime);
		}
		inactivityTime = setTimeout(function(){
			var code = editor.getValue();
			$('#render-stage iframe').remove();
			$('#render-stage').append($('<iframe id="tone-executor">'));
			$('#tone-executor').contents().find('body').append($('<script>').html(code));
		}, 2000);
	}

	session.on('change', function(){
		resetTimer();
	});

})(jQuery, ace);