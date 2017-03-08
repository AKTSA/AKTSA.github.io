function newLoad(){
	console.log("Officer Page Loaded");
	
	var temp = location.search.split("?")[1];
	if(!temp){
		temp = 3;
	}
		document.getElementById("OffFrame").src = "https://aktsa.azurewebsites.net/off.php?id=" + temp;
		if(document.getElementById("navLink" + temp)){
			document.getElementById("navLink" + temp).className = "BigBtn CurrPage";
		}
	//}
}

function newUnload(){
	
}