function afterload() {
	alert("HELLO! welcome.");
}
function changed() {
	document.getElementById("p1").innerHTML = "Date is changed!";
}

function hover(x) {
	x.style.color = "red";
}
function goaway(x) {
	x.style.color = "black";
}
function key() {
	alert("You pressed a key on keyboard");
}

function showinlog(){
	var date = document.getElementById('date').value;
	console.log(date);
}

function checknum() {
	var n = document.getElementById("num").value;
	try{
		if(n > 200) throw "Number too high";
		if(n < 0) throw "Please enter a positive number";
		if(n>=10 && n<=100)
			ch = 1;
		else
			ch = 2;
	}
	catch(err){
		document.getElementById("error").innerHTML = "Input is "+err;
	}
	finally{
		document.getElementById("finally").innerHTML = "Finally block executed";
	}
	
	switch(ch){
		case 1: document.getElementById("numres").innerHTML = "Number is in between 10 - 100";
				break;
		case 2: document.getElementById("numres").innerHTML = "Number is not in between 10 - 100";
				break;
	}
	var t1=0,t2=1,nextterm;
	var series = "";
	document.getElementById("fib").innerHTML = "Fibonacci series of "+n+" terms : ";
	for(i = 1 ; i <= n ; ++i){
		series +=""+t1+" ";
		nextterm = t1 + t2;
		t1 = t2;
		t2 = nextterm;
	}
	document.getElementById("fibres").innerHTML = series;
}

function checkword() {
	var word="Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.";
	document.getElementById("abthtml").innerHTML = word;
	var wordarray = word.split(" ");
	document.getElementById("abthtmlres").innerHTML = "5th word: "+wordarray[4]+" 7th word: "+wordarray[6]+" 10th word: "+wordarray[9];
}