function newLoad(){
	console.log("Member Page Loaded");
	loadData();
}

function newUnload(){
	
}



function loadData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var el = JSON.parse(this.responseText);
			console.log("Received following data from server: " + JSON.stringify(el));
			
			document.getElementById("MeetBox").textContent = "";
			for(i = 0; i < el["meet"].length; i++){
				var temp = document.createElement("LI");
				temp.textContent = el["meet"][i];
				document.getElementById("MeetBox").appendChild(temp);
				//document.getElementById("MeetBox").innerHTML += "<li>" + el["meet"][i] + "</li>";
			}
			
			document.getElementById("CommBox").textContent = "";
			for(i = 0; i < el['comm'].length; i++){
				var temp = document.createElement("LI");
				temp.textContent = el["comm"][i]["date"];
				var temp2 = document.createElement("P");
				temp2.textContent = el["comm"][i]["notes"];
				temp.appendChild(temp2);
				document.getElementById("CommBox").appendChild(temp);
			}
			
			document.getElementById("MeetBox").getElementsByTagName("LI")[parseInt(el["nextMeet"])].className = "NextMeet";
			
		}
	};
	xhttp.open("GET", "https://aktsa.azurewebsites.net/data.php", true);
	xhttp.send();
}