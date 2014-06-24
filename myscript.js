/**
 * author : erkan ay
 * date   : 06.24.2014
 * file   : myscript.js
 * project: Basic Russian Keyboard
 */
jQuery(function($){
	function clearTextArea(){
		$('#russianText').empty();
		return false;
	}
	function setTextArea(){
		var russianText = $('#russianText').val();
		$('#result').html(russianText);
	}
	$('#setText').click(function(){
		setTextArea();
	});
	$('#makeClear').click(function(){
		clearTextArea();
	});
	
	$('tr input[type=button]').click(function(){
		var keybt = $(this).attr("value");
		var textArea = $('#russianText');
		textArea.append(keybt);
	});
	document.onkeydown = function (e) {
		var i = 65;
		while(i <= 90){
			if(e.which == i){
				return false;
			}else{
				return true;
			}
			i++;
		}
	}
});
