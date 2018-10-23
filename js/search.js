var roomid = "";
var roompass = "";  
var ownername = "";
var map = "";
var mode = "";
var playview = "";
var server = "";
function select(id,id1,id2) 
		{
			var hideme1=id1+"span";
			var hideme2=id2+"span";	
			if(document.getElementById(hideme1).style.display == "none"&&document.getElementById(hideme2).style.display == "none")
			{
				document.getElementById(id+"span").className = "span4";
				document.getElementById("erangelspan").style.display = "none";
				document.getElementById("miramarspan").style.display = "none";
				document.getElementById("sanhokspan").style.display = "none";
				document.getElementById(hideme1).style.display = "block";
				document.getElementById(hideme2).style.display = "block";
				document.getElementById("selectyour").innerHTML = "Select Your Mode";
				document.getElementById("instruct").innerHTML = "Be careful while you choose...Theres no coming back!!";
				
			}
			else
			{
				document.getElementById(id+"span").className = "span3";
				document.getElementById("erangelspan").style.display = "block";
				document.getElementById("miramarspan").style.display = "block";
				document.getElementById("sanhokspan").style.display = "block";
				document.getElementById(hideme1).style.display = "none";
				document.getElementById(hideme2).style.display = "none";
				document.getElementById("instruct").innerHTML = "Click on " + id + " to change to " + id1 + " or " + id2;
				document.getElementById("selectyour").innerHTML = "Select Your Map";
				
			}
		}
	function selected(selected_values,what)
		{
			if(what == 'mode')					
				window.mode = selected_values;																
			else if(what == 'map')
			{						
				var others=["Sanhok","Erangel","Miramar","Sanhok","Erangel"];
				window.map = others[selected_values];
				document.getElementById(others[selected_values].toLowerCase()+"bgcolor").style.backgroundColor = "#FECE1A";
				document.getElementById(others[selected_values-1].toLowerCase()+"bgcolor").style.backgroundColor = "#c6bf9d";
				document.getElementById(others[selected_values-2].toLowerCase()+"bgcolor").style.backgroundColor = "#c6bf9d";				
			}
			else if(what == 'server')
				var server_selected = selected_values;
			else if(what == 'playview')
			{
				var others=["fpp","tpp","fpp"];
				window.playview = others[selected_values];
				document.getElementById(others[selected_values]).style.background = "#cba515";
				document.getElementById(others[selected_values-1]).style.background = "#181A1C";
			}
		}
	function save_roomid()
	{
		window.roomid = document.getElementById("roomid_input").value;
		if(isNaN(roomid)){
			document.getElementById("roomid_input").value = "";
			window.roomid="";
			room_nd_pass_popup("roomid_popup2");
			setTimeout(function(){       
					room_nd_pass_popup("roomid_popup2");
			},2000);
		}
			
	}
	function save_roompass()
	{
		window.roompass = document.getElementById("roompass_input").value;
	}
//firebase database
//<!--FIREBASE AUTH-->
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkoW8Cf5f0zzr4taNqIJoxR_7VEyvsqkI",
    authDomain: "reaplay321.firebaseapp.com",
    databaseURL: "https://reaplay321.firebaseio.com",
    projectId: "reaplay321",
    storageBucket: "reaplay321.appspot.com",
    messagingSenderId: "804171216896"
  };
  firebase.initializeApp(config);
  
  //Root Reference of DB
  const rootRef = firebase.database().ref();
  //checking current user valid?
  var currentUser = firebase.auth().onAuthStateChanged(function(user){
	if (user != null) {
	user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
	window.ownername = profile.uid;    
    console.log("  Email: " + profile.email);
	document.documentElement.style.overflow = 'auto';
	document.body.scroll = "yes";	
  });
	}
	else{
		alert("login to continue");
		document.documentElement.style.overflow = 'hidden';		
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		document.body.scroll = "no";
	}
  });
  document.getElementById("search").addEventListener("click", e => {
		window.server = document.getElementById("server").options[document.getElementById("server").selectedIndex].text;
		//validation		
		if(window.playview == ""){
			room_nd_pass_popup("playview_popup");
			setTimeout(function(){       
					room_nd_pass_popup("playview_popup");
			},2000);
		}
		else if(window.roomid == ""){
			room_nd_pass_popup("roomid_popup");
			setTimeout(function(){       
					room_nd_pass_popup("roomid_popup");
			},2000);
		}
		else if(roomid.length!=5){
			room_nd_pass_popup("roomid_popup2");
			setTimeout(function(){       
					room_nd_pass_popup("roomid_popup2");
			},2000);
		}
		else if(window.roompass == ""){
			room_nd_pass_popup("roompass_popup");
			setTimeout(function(){       
					room_nd_pass_popup("roompass_popup");
			},2000);
		}
		else if(window.server == "-- SERVER --"){
			room_nd_pass_popup("server_popup");
			setTimeout(function(){       
					room_nd_pass_popup("server_popup");
			},2000);
		}
		else if(window.mode == ""){
			room_nd_pass_popup("solo_popup");			
			room_nd_pass_popup("duo_popup");			
			room_nd_pass_popup("squad_popup");			
			setTimeout(function(){       
					room_nd_pass_popup("solo_popup");			
					room_nd_pass_popup("duo_popup");			
					room_nd_pass_popup("squad_popup");	
			},2000);
		}			
		else if(window.map == ""){
			room_nd_pass_popup("erangel_popup");			
			room_nd_pass_popup("miramar_popup");			
			room_nd_pass_popup("sanhok_popup");			
			setTimeout(function(){       
					room_nd_pass_popup("erangel_popup");			
					room_nd_pass_popup("miramar_popup");			
					room_nd_pass_popup("sanhok_popup");			
			},2000);
		}			
		else
		{	
			rootRef.child(window.roomid).child("map").set(window.map);
			rootRef.child(window.roomid).child("mode").set(window.mode);
			rootRef.child(window.roomid).child("ownername").set(window.ownername);
			rootRef.child(window.roomid).child("playview").set(window.playview);
			rootRef.child(window.roomid).child("roomid").set(window.roomid);
			rootRef.child(window.roomid).child("roompass").set(window.roompass);
			rootRef.child(window.roomid).child("server").set(window.server);
			//Display The Added Room Alert
			document.getElementById("roomid_display").placeholder = window.roomid;			
			document.getElementById("roompass_display").placeholder = window.roompass;			
			document.getElementById("map_display").placeholder = window.map;			
			document.getElementById("mode_display").placeholder = window.mode;			
			document.getElementById("playview_display").placeholder = window.playview.toUpperCase();			
			document.getElementById("server_display").placeholder = window.server;
			document.getElementById("header").className = "poweron";
			var room_added_alert = document.getElementById('room_added_alert');			
			room_added_alert.style.display = "block";
			setTimeout(function(){       
					document.getElementById("header").className = "";
			},3000);
			
		}
  });

})()
//<!--FIREBASE AUTH END-->
//POPUP ROOM ND PASS
// When the user clicks on div, open the popup
function room_nd_pass_popup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");	
}
// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			if (event.target == modal) {
			document.getElementById('room_added_alert').style.display = "none";
				}
			}