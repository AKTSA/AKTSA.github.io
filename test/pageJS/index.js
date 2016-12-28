var s;

function newLoad(){
	console.log("Home Page Loaded");
	
	s = skrollr.init();
}

function newUnload(){
	s.destroy();
}