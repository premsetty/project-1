$(document).ready(function(){
	$('#button1').click(function(){
		$('#para').hide();
	});
	$('#button2').click(function(){
		$('#para').show();
	});

	$('#button3').click(function(){
		$('#para1').css('display','none');
	});
	$('#button4').click(function(){
		$('#para1').css('display','block');
	});

});

