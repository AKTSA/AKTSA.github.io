var s;

function newLoad(){
	console.log("Home Page Loaded");
	
	s = skrollr.init({smoothScrolling: false});
	
	
	
	window.onresize = resize;
	function resize()
	{
		//alert("resize event detected!");
		s.destroy();
		s = skrollr.init({smoothScrolling: false});
	}
}

function newUnload(){
	s.destroy();
}
