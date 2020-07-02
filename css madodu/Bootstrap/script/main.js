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
	$('#dblclick').dblclick(function(){
		alert("Double clicked the button");
	})
	$('#toggle').click(function(){
		$('#toggleh3').toggle('fast');
	})

	$('#fadeinbtn').click(function(){
		$('#fade').fadeIn(2000);
		$('#fade').css('background-color','darkgray');
	})
	$('#fadeoutbtn').click(function(){
		$('#fade').fadeOut('slow');
	})
});

