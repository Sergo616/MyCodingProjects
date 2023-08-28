alert ("Hi guys!\n I used the eval() to make a calculator and I found an errors in the calculations.\n For example: if you subtract 0.7 from 8.7 the answer is 7.999999999999999.\n How can I fix this bug?")

 function insert(num) {
	document.form.textview.value =
	document.form.textview.value + num
	}
	function clean(){
	document.form.textview.value = "";
	}
    function back() {
	let exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
	} 
    function equal() {
	let exp = document.form.textview.value;
	   if(exp) {
	      document.form.textview.value = eval(exp);
	   }
	}
	
$(function() {
    $(".bookmark").click(function() {
        $(".calc").fadeToggle(10);
    });
});	

	