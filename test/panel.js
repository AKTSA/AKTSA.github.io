function panelHov(e){
	
	if(e == -1){//Reset
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
		document.getElementById("SplashBG").style.opacity = 1;
		/*document.getElementById("Panel1").className = "Panel";	
		document.getElementById("Panel2").className = "Panel";
		document.getElementById("Panel3").className = "Panel NoBefore";
		document.getElementById("Panel4").className = "Panel";
		document.getElementById("Panel5").className = "Panel";*/
		
		document.getElementById("Head3").style.opacity = 1;
		document.getElementById("Head1").style.width = null;
		document.getElementById("Head2").style.width = null;
		document.getElementById("Head3").style.width = null;
		document.getElementById("Head4").style.width = null;
		document.getElementById("Head5").style.width = null;
			document.getElementById("Head1").style.transform = "rotate(90deg)translateY(-1vw)";
			document.getElementById("Head2").style.transform = "rotate(90deg)translateY(-11vw)";
			document.getElementById("Head3").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(13vw)";
			document.getElementById("Head4").style.transform = "rotate(90deg)translateY(-78vw)";
			document.getElementById("Head5").style.transform = "rotate(90deg)translateY(-89vw)";
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
			
			document.getElementById("Head" + i).style.transform = "rotate(0deg)translateY(calc(50vh - 50%))";
			document.getElementById("Head" + i).style.width = "60vw";
		} else if(i > e){
			el.style.transform = "translateX(50vw)scale(1)";
			document.getElementById("PanelBG" + i).style.opacity = 0;
			document.getElementById("Panel" + i).style.opacity = 1;
			//document.getElementById("Panel" + i).className = "Panel";		
			document.getElementById("Head" + i).removeAttribute("style");
		}
	}
	if(e != 3){
		document.getElementById("Head3").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(13vw)";
		document.getElementById("Head3").style.opacity = 0;
		document.getElementById("SplashBG").style.opacity = 0;
	} else{
		document.getElementById("Head3").style.opacity = 1;
		document.getElementById("SplashBG").style.opacity = 1;	
	}
	
	switch(e){
		case 1:
			document.getElementById("Head2").style.transform = "rotate(90deg)translateY(-60vw)";
			document.getElementById("Head1").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(-5vw)";
			break;
		case 2:
			document.getElementById("Head2").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(5vw)";
			document.getElementById("Panel1").style.background = "rgba(192, 57, 43, 0)";
			break;
		case 3:
			document.getElementById("Head3").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(13vw)";
			document.getElementById("Panel2").style.background = "rgba(31, 58, 147, 0)";
			break;
		case 4:
			document.getElementById("Head4").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(22vw)";
			document.getElementById("Panel3").style.background = "rgba(44, 62, 80, 0)";
			break;
		case 5:
			document.getElementById("Head4").style.transform = "rotate(90deg)translateY(-30vw)";
			document.getElementById("Head5").style.transform = "rotate(0deg)translateY(calc(50vh - 50%))translateX(35vw)";
			document.getElementById("Panel4").style.background = "rgba(142, 68, 173, 0)";
			break;
	}
}