function newLoad(){
	console.log("CTE Page Loaded");
}

function newUnload(){
	
}

function openPanel(a){
	for(i = 0; i < 6; i++){
		if(i != a){
			document.getElementById("ClassOpen" + i).style.maxHeight = "";
			document.getElementById("ClassOpen" + i).style.transition = "";
			document.getElementById("ClassArrow" + i).style.opacity = "";
		document.getElementById("ClassClose").style.pointerEvents = "";
		}
	}
	if(a == -1){
		document.getElementById("ClassClose").style.opacity = "";
		return;
	}
	document.getElementById("ClassClose").style.opacity = "1";
	document.getElementById("ClassClose").style.pointerEvents = "all";
	document.getElementById("ClassOpen" + a).style.maxHeight = "100vh";
	document.getElementById("ClassOpen" + a).style.transition = "max-height 0.5s ease-in";
	document.getElementById("ClassArrow" + a).style.opacity = "1";
}

function ChangeProjBack(a){
	var temp = document.getElementById("ProjInfo").getElementsByTagName("P");
	for(i = 0; i < 6; i++){
		if(i != a){
			temp[i].style.display = "none";
		}
	}
	temp[a].style.display = "block";
	
	
	switch(a){
		case 0:
			document.getElementById("ProjFrame").style.backgroundImage = "url('http://aktsa.org/img_2019/TSAA.JPG')";
			break;
		case 1:
			document.getElementById("ProjFrame").style.backgroundImage = "url('http://aktsa.org/img_2019/Wright%20Flyer.jpg')";
			break;
		case 2:
			document.getElementById("ProjFrame").style.backgroundImage = "url('http://aktsa.org/img_2019/Cimhomepage.jpeg')";
			break;
		case 3:
			document.getElementById("ProjFrame").style.backgroundImage = "url('https://raw.githubusercontent.com/AKTSA/AKTSA.github.io/master/img_2019/house.jpg')";
			break;
		case 4:
			document.getElementById("ProjFrame").style.backgroundImage = "url('/images/CTEProj5.jpg')";
			break;
		case 5:
			document.getElementById("ProjFrame").style.backgroundImage = "url('https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
			break;
	}
}



function showTeach(a){
	for(i = 0; i < 6; i++){
		if(i != a){
			document.getElementById("TeachInfo" + i).style.left = "";
		}
	}
	document.getElementById("TeachInfo" + a).style.left = "100%";//alert(a);
}
