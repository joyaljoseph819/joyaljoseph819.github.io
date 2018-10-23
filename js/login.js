function show_login()
{
DarkenPage();
ShowLoginPanel();
}
function hide_login()
{
UnDarkenPage();
HideLoginPanel();
}

function ShowLoginPanel()
{
var login_panel = document.getElementById('login_panel');

// w is a width of the newsletter panel
w = 300;
// h is a height of the newsletter panel
h = 300;

// get the x and y coordinates to center the newsletter panel
xc = Math.round((document.body.clientWidth/2)-(w/2))
yc = Math.round((document.body.clientHeight/2)-(h/2))

// show the newsletter panel
login_panel.style.left = xc + "px";
login_panel.style.top  = yc + "px";
login_panel.style.display = 'block';
}
function HideLoginPanel()
{
var login_panel = document.getElementById('login_panel');
login_panel.style.display = 'block';
}



 // this function puts the dark screen over the entire page
function DarkenPage()
{
var page_screen = document.getElementById('page_screen');
page_screen.style.height = document.body.parentNode.scrollHeight + 'px';
page_screen.style.display = 'block';
}
function UnDarkenPage()
{
var page_screen = document.getElementById('page_screen');
page_screen.style.height = document.body.parentNode.scrollHeight + 'px';
page_screen.style.display = 'none';
}
// If user clicks anywhere outside of the modal, Modal will close

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		document.getElementById("login_panel").zIndex = 0;
		hide_login();
		parent.closeIFrame();
    }
}

//Login Button Manipulations
function register_checked(){
	if(document.getElementById("register_radio").checked)
	{
		document.getElementById("loginbtn").style.display="none";
		document.getElementById("logoutbtn").style.display="none";
		document.getElementById("signupbtn").style.display="block";	
		document.getElementById("confirmpass").style.display="block";
		document.getElementById("accesspanel").style.height="330px";
	}
	else
	{
		document.getElementById("signupbtn").style.display="none";
		document.getElementById("logoutbtn").style.display="none";
		document.getElementById("confirmpass").style.display="none";
		document.getElementById("loginbtn").style.display="block";
		document.getElementById("accesspanel").style.height="280px";
		document.getElementById("loginbtn").value = "Authorize";
		document.getElementById("loginbtn").className = "";
	}
	}
//Forgot password
function forgot_password(){
	if(document.getElementById("forgot_pass_radio").checked)
	{
		document.getElementById("loginbtn").style.display="none";
		document.getElementById("logoutbtn").style.display="none";
		document.getElementById("signupbtn").style.display="none";	
		document.getElementById("confirmpass").style.display="none";
		document.getElementById("password").style.display="none";
		document.getElementById("forgotbtn").style.display="block";
		document.getElementById("accesspanel").style.height="230px";
	}
	else
	{
		document.getElementById("signupbtn").style.display="none";
		document.getElementById("logoutbtn").style.display="none";
		document.getElementById("confirmpass").style.display="none";
		document.getElementById("forgotbtn").style.display="none";
		document.getElementById("password").style.display="block";
		document.getElementById("loginbtn").style.display="block";
		document.getElementById("accesspanel").style.height="280px";
		document.getElementById("loginbtn").value = "Authorize";
		document.getElementById("loginbtn").className = "";
	}
	}
