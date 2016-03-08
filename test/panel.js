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
		/*document.getElementById("Panel1").className = "Panel";
		document.getElementById("Panel2").className = "Panel";
		document.getElementById("Panel3").className = "Panel NoBefore";
		document.getElementById("Panel4").className = "Panel";
		document.getElementById("Panel5").className = "Panel";*/	
			document.getElementById("Head1").removeAttribute("style");	
			document.getElementById("Head2").removeAttribute("style");	
			document.getElementById("Head3").removeAttribute("style");	
			document.getElementById("Head4").removeAttribute("style");	
			document.getElementById("Head5").removeAttribute("style");
		return;
	}
	
	for(i = 1; i <= 5; i++){
		var el = document.getElementById("Panel" + i);
		if(i < e){
			el.style.transform = "translateX(0vw)scale(1)";
			document.getElementById("PanelBG" + i).style.opacity = 0;
			document.getElementById("Panel" + i).style.opacity = 1;
			//document.getElementById("Panel" + i).className = "Panel";			
			document.getElementById("Head" + i).removeAttribute("style");
			
		} else if(i == e){
			el.style.transform = "translateX(0vw)scale(6)";
			document.getElementById("PanelBG" + i).style.opacity = 1;
			document.getElementById("Panel" + i).style.opacity = 0.2;
			//document.getElementById("Panel" + i).className = "Panel NoBefore";
			
			document.getElementById("Head" + i).style.transform = "rotate(0deg)";
		} else if(i > e){
			el.style.transform = "translateX(50vw)scale(1)";
			document.getElementById("PanelBG" + i).style.opacity = 0;
			document.getElementById("Panel" + i).style.opacity = 1;
			//document.getElementById("Panel" + i).className = "Panel";		
			document.getElementById("Head" + i).removeAttribute("style");
		}
	}
	
	switch(e){
		case 2:
			document.getElementById("Panel1").style.background = "rgba(192, 57, 43, 0)";
			break;
		case 3:
			document.getElementById("Panel2").style.background = "rgba(31, 58, 147, 0)";
			break;
		case 4:
			document.getElementById("Panel3").style.background = "rgba(44, 62, 80, 0)";
			break;
		case 5:
			document.getElementById("Panel4").style.background = "rgba(142, 68, 173, 0)";
			break;
	}
}