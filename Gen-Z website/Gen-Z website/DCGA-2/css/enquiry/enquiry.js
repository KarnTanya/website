
$(document).ready( function()
	{
		$(".sidebar-form .call-action").click( function(){
        $(this).parents(".sidebar-form").toggleClass("show")
		});
	});
	
var form=document.getElementById("form");
form.addEventListener("submit",(e)=>
{
		e.preventDefault();
		checkInputs();
});
function sidebar()
 {
	var sidename=document.getElementById("sidename").value;
	var sidemail=document.getElementById("sidemail").value;
	var sidemobile=document.getElementById("sidemobile").value;
	
	if(sidename=="")
	{
		document.getElementById("sidewrong").innerHTML="*Please enter your name*";
		return false;
	}
	
	if((sidename.length<3) || (sidename.length>20))
	{
		
		document.getElementById("sidewrong").innerHTML="*name must be between 3 and 20 words*";
		return false;
	}
	
	if(sidemail=="")
	{
		document.getElementById ("sidewrong2").innerHTML="*please insert your email id*";
		return false;
	}
			
	if(sidemail.indexOf ('@')<= 0)
	{
		document.getElementById ("sidewrong2").innerHTML="*@ invalid position*";
		return false;
	}
			
	if( (sidemail.charAt (sidemail.length-4) !='.') && (sidemail.charAt (sidemail.length-3) !='.'))
	{
		document.getElementById ("sidewrong2").innerHTML="*dot(.) invalid position*";
		return false;
	}
	if(sidemobile=="")
	{
		document.getElementById("sidewrong3").innerHTML="*Please enter your number*";
		return false;
	}
	if(isNaN (sidemobile))
	{
		document.getElementById ("sidewrong3").innerHTML="*please use digits not a characters*";
		return false;
	}
			
	if(sidemobile.length!=10)
	{
		document.getElementById ("sidewrong3").innerHTML="*mobile number must be 10 digit only*";
		return false;
	}
	
 }
 

