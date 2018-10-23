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
				var mode_selected = selected_values;																
			else if(what == 'map')
			{						
				var others=["sanhokbgcolor","erangelbgcolor","miramarbgcolor","sanhokbgcolor","erangelbgcolor"];
				var map_selected = others[selected_values];
				document.getElementById(others[selected_values]).style.backgroundColor = "#FECE1A";
				document.getElementById(others[selected_values-1]).style.backgroundColor = "#c6bf9d";
				document.getElementById(others[selected_values-2]).style.backgroundColor = "#c6bf9d";						
			}
			else if(what == 'server')
				var server_selected = selected_values;
			else if(what == 'playview')
			{
				var others=["fpp","tpp","fpp"];
				var playview_selected = selected_values;
				document.getElementById(others[selected_values]).style.background = "#cba515";
				document.getElementById(others[selected_values-1]).style.background = "#181A1C";
			}
		}
	function search()
		{
			alert("searching....");
			check_user_status();			
			var modal = document.getElementById('modal-wrapper');
			modal.style.display = "none";
			hide_login();		
		}