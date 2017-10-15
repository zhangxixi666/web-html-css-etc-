var str = 0;
function Get(str){
	document.getElementById("Screen").value+=document.getElementById(str).value;
}
function Clean(){
	document.getElementById("Screen").value = null;
	document.getElementById("Screen").focus();
}
function cal(){
	 document.getElementById("Screen").value = eval(document.getElementById("Screen").value);
}