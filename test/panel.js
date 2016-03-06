function panelHov(e){
	
	if(e == -1){//Reset
		/*document.getElementById("Panel1").style.transform="scale(1.1)translateX(0%)";
		document.getElementById("Panel2").style.transform="scale(1.1)translateX(9.1%)";
		document.getElementById("Panel3").style.transform="scale(5.6)translateX(3.57%)";
		document.getElementById("Panel4").style.transform="scale(1.1)translateX(436%)";
		document.getElementById("Panel5").style.transform="scale(1.1)translateX(445%)";*/
		document.getElementById("Panel1").style.transform="translateX(0vw)scale(1.1)";
		document.getElementById("Panel2").style.transform="translateX(1vw)scale(1.1)";
		document.getElementById("Panel3").style.transform="translateX(2vw)scale(5.6)";
		document.getElementById("Panel4").style.transform="translateX(48vw)scale(1.1)";
		document.getElementById("Panel5").style.transform="translateX(49vw)scale(1.1)";
		document.getElementById("PanelBG1").style.opacity = 0;
		document.getElementById("PanelBG2").style.opacity = 0;
		document.getElementById("PanelBG3").style.opacity = 1;
		document.getElementById("PanelBG4").style.opacity = 0;
		document.getElementById("PanelBG5").style.opacity = 0;
		document.getElementById("Panel1").style.opacity = 1;
		document.getElementById("Panel2").style.opacity = 1;
		document.getElementById("Panel2").style.background = "rgba(31, 58, 147, 0)";
		document.getElementById("Panel3").style.opacity = 0.2;
		document.getElementById("Panel4").style.opacity = 1;
		document.getElementById("Panel5").style.opacity = 1;
		return;
	}
	
	switch(e){
		case 2:
			
			break;
		case 3:
			
			break;
		case 4:
			
			break;
		case 5:
			
			break;
	}
	
	for(i = 1; i <= 5; i++){
		var el = document.getElementById("Panel" + i);
		if(i < e){
			el.style.transform = "translateX(0vw)scale(1)";
			document.getElementById("PanelBG" + i).style.opacity = 0;
			document.getElementById("Panel" + i).style.opacity = 1;
		} else if(i == e){
			el.style.transform = "translateX(0vw)scale(6)";
			document.getElementById("PanelBG" + i).style.opacity = 1;
			document.getElementById("Panel" + i).style.opacity = 0.2;
		} else if(i > e){
			el.style.transform = "translateX(50vw)scale(1)";
			document.getElementById("PanelBG" + i).style.opacity = 0;
			document.getElementById("Panel" + i).style.opacity = 1;
		}
	}
}