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
				temp.textContent = timeConverter(Date.parse(el["meet"][i]), false);
				document.getElementById("MeetBox").appendChild(temp);
				//document.getElementById("MeetBox").innerHTML += "<li>" + el["meet"][i] + "</li>";
			}
			
			document.getElementById("CommBox").textContent = "";
			for(i = 0; i < el['comm'].length; i++){
				var temp = document.createElement("LI");
				temp.textContent = timeConverter(Date.parse(el["comm"][i]["date"]), true);
				var temp2 = document.createElement("P");
				temp2.textContent = el["comm"][i]["notes"];
				temp.appendChild(temp2);
				document.getElementById("CommBox").appendChild(temp);
			}
			
		}
	};
	xhttp.open("GET", "https://aktsa.azurewebsites.net/data.php", true);
	xhttp.send();
} 

function timeConverter(UNIX_timestamp, wantMin){
	var a = new Date(UNIX_timestamp);
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var minute = a.getMinutes();
	if(minute < 10){
		minute = "0" + minute;
	}
	if(wantMin){
		var time = month + ' ' + date + ', ' + year + " at " + hour + ":" + minute;
	} else{
		var time = month + ' ' + date + ', ' + year;
	}
	return time;
}