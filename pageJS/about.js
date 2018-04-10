function newLoad(){
	console.log("About Page Loaded");

}

// var src = new Array("31", "26", "25", "21", "37", "1", "30");
var src = new Array("31", "26", "25", "1");
for (i = 0; i < 4; i++) {
	$('#Frames').append('<div style="height: 0;"><iframe id="ClassOpenFrame' + i + '" style="width: 41.6%;position: relative;top: -300px; height: 150px; overflow-y: hidden; z-index: 3;border: 1px solid black;box-sizing: border-box;display: none;"></iframe><a class="expand" id="Expand' + i + '" onclick="expand(' + i + ')" style="position: relative; display: none; vertical-align: top; width: 7.5%; top: -350px; z-index: 99999; text-align: center; text-decoration: underline;">Read More</a></div>');
	//document.getElementById('ClassOpenFrame' + i).style.backgroundImage = "url('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')";
	document.getElementById('ClassOpenFrame' + i).src = "https://aktsa.azurewebsites.net/offSHORT.php?id=" + src[i];
	document.getElementById('ClassOpenFrame' + i).style.top = -375 + "px";
	document.getElementById('Expand' + i).style.top = -425 + "px";
}

for (i = 0; i < 2; i++) {
	document.getElementById('ClassOpenFrame' + i).style.left = 25 * (i + 1) + "%";
	document.getElementById('Expand' + i).style.left = 25 * (i + 1.03) + "%";

}

for (i = 2; i < 4; i++) {
	document.getElementById('ClassOpenFrame' + i).style.left = 25 * (i - 1.65) + "%";
	document.getElementById('Expand' + i).style.left = 25 * (i - 1.62) + "%";
}


function ClassOpen(a) {
	for(i = 0; i < 4; i++) {
		//console.log("i = " + i);

		if(i != a){
			// document.getElementById("ClassOpen" + i).style.maxWidth = "";
			// document.getElementById("ClassOpen" + i).style.transition = "";
			// document.getElementById("ClassClose").style.pointerEvents = "";
			//document.getElementById("ClassOpen" + i).style.display = "none";
			//console.log("Officer " + i + " Closed");
			document.getElementById('ClassOpenFrame' + i).style.display = "none";
			document.getElementById('TableCel' + i).style.zIndex = "1";
			document.getElementById('BlCover').style.display = "none";
			document.getElementById('ClassOpenFrame' + i).src = "https://aktsa.azurewebsites.net/offSHORT.php?id=" + src[i];
			document.getElementById('Expand' + i).style.display = "none";
			document.getElementById('ClassOpenFrame' + i).style.height = "150px";
		}
	}

	console.log("a = " + a);
	if(a == -1){


		// document.getElementById("ClassClose").style.opacity = "";
		return;
	}
	// document.getElementById("ClassClose").style.opacity = "1";
	// document.getElementById("ClassClose").style.pointerEvents = "all";
	// document.getElementById("ClassOpen" + a).style.maxWidth = "100%";
	// document.getElementById("ClassOpen" + a).style.transition = "max-width 0.5s ease-in";
	// //document.getElementById("ClassOpen" + a).style.display = "block";

	document.getElementById('ClassOpenFrame' + a).style.display = "block";
	document.getElementById('TableCel' + a).style.zIndex = "10";
	document.getElementById('BlCover').style.display = "block";
	document.getElementById('Expand' + a).style.display = "block";
	document.getElementById('TblText' + a).style.display = "none !important";
	document.getElementById('ClassOpenFrame' + a).src = "https://aktsa.azurewebsites.net/offSHORT.php?id=" + src[a];
	document.getElementById('ClassOpenFrame' + a).style.height = "150px";
}

function expand(a) {
	document.getElementById('ClassOpenFrame' + a).src="https://aktsa.azurewebsites.net/off.php?id=" + src[a];
	document.getElementById('Expand' + a).style.display = "none";
	document.getElementById('ClassOpenFrame' + a).style.height = "300px";

}


function newUnload(){

}
