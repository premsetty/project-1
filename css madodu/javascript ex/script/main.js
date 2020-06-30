document.getElementById("understand").innerHTML = "JavaScript enables the webpage to be dynamic, we can provide input and retrieve output using JavaScript"
var n1 = 55;
var n2 = "Hi"
console.log(n1,n2);

var num = [1,2,3,4,5];
var a = num[3];
var b = a.toString();
document.getElementById("p2").innerHTML = b;

function totalandavg(){
	document.getElementById("total").innerHTML = 62+52+73+64+70+60+72+100;
	document.getElementById("avg").innerHTML = (62+52+73+64+70+60+72+100)/8;
}
var x = totalandavg();

document.getElementById("power").innerHTML="5 to the power of 3 : "+Math.pow(5,3);
document.getElementById("root").innerHTML="Square root of 64 : "+Math.sqrt(64);
document.getElementById("absolute").innerHTML="Absolute value of -3654 : "+Math.abs(-3654);
r = Math.random()*100;
document.getElementById("random").innerHTML="Random number : "+r;
document.getElementById("ceil").innerHTML="Ceil of  "+r+"  : "+ Math.ceil(r);
document.getElementById("round").innerHTML="Round of "+r+" : "+ Math.round(r);
document.getElementById("floor").innerHTML="Floor of "+r+" : "+ Math.floor(r);
document.getElementById("sin").innerHTML="Sin of "+r+" : "+ Math.sin(r);