var s;

function newLoad(){
	console.log("Home Page Loaded");
	
	s = skrollr.init({smoothScrolling: false});
}

function newUnload(){
	s.destroy();
}