var cache = {};
var main;
var changingPage = false;

function loadPage(url) {
	if (cache[url]) {
		return new Promise(function(resolve) {
			resolve(cache[url]);
		});
	}

	return fetch(url, {
		method: 'GET'
	}).then(function(response) {
		cache[url] = response.text();
		return cache[url];
	});
}

function changePage() {
	var url = window.location.href;
	
	loadPage(url).then(function(responseText) {
		var wrapper = document.createElement('div');
		wrapper.innerHTML = responseText;
		//console.log(responseText);

		var oldContent = $('.MainWrap');
		var newContent = wrapper.querySelector('.MainWrap');

		main.append(newContent);
		//newContent.style.opacity = 0;
		animate(oldContent, newContent);

		document.title = responseText.split("<title>")[1].split("</title>")[0];
		//changePageJS(responseText.split('<script id="pageJS" src="')[1].split('"></script>')[0]);
		//document.getElementById("pageJS").src = responseText.split('<script id="pageJS" src="')[1].split('"></script>')[0];
		//newLoad();
	});
}






function animate(oldContent, newContent) {

	oldContent.get(0).style.position = 'absolute';
	oldContent.get(0).style.width = '100%';
	oldContent.get(0).style.top = 0;
	//oldContent.get(0).style.zIndex = 99;

	oldContent.animate({
		top: "100vh"
	}, 500);
	if(oldContent.get(0).getElementsByClassName("HomeHero")[0]){

		document.getElementById("HomeHero").style.position = 'relative';
		document.getElementById("HomeHero").style.width = "100%";
		document.getElementById("HomeHero").style.top = 0;
		$(document.getElementById("HomeHero")).animate({
			top:"-200vh"
		},500);
	}

	var fadeIn = function(){
		
		
		$("html, body").animate({"scrollTop": "0px"}, 500);
		
		
		if(newContent.getElementsByClassName("HomeHero")[0]){
			document.getElementById("HomeHero").style.position = 'relative';
			document.getElementById("HomeHero").style.width = "100%";
			document.getElementById("HomeHero").style.top = "-200vh";
			$(document.getElementById("HomeHero")).animate({
				top:"0"
			},500);
		}
		newContent.style.position = "relative";
		if(oldContent.get(0).getElementsByClassName("HomeHero")[0]){
			newContent.style.top = "calc(90vh - 72px)";
		} else{
			newContent.style.top = "100vh";
		}
		$(newContent).animate({
			top:0
		}, 500, function(){
			oldContent.remove();
			//changingPage = false;
			console.log("Page Transition Complete");
			//newLoad();
			window.setTimeout(function(){location.reload();},100);
		})
	}();
}








function changePageJS(el)
{
	document.getElementsByTagName("HEAD")[0].removeChild(document.getElementById("pageJS"));
	var s = document.createElement("script");
	s.src = el;
	s.innerHTML = null;
	s.id = "pageJS";
	//document.getElementById("output").innerHTML = "";
	document.getElementsByTagName("HEAD")[0].appendChild(s);
}






//var s;

function setUpPage(){
	newLoad();
	
	
	main = $('body');

	window.addEventListener('popstate', changePage);





	$("a").on('click', function(e){

		if(changingPage){
			console.log("Page transition in progress; links disabled");
			e.preventDefault();
			return;
		}

		var el = e.target;

		while (el && !el.href) {
			el = el.parentNode;
		}

		if (el) {
			
			
			if(el.host != window.location.host){
				console.log("Link to other domain; abandoning animated page transition");
				return;
			}
			e.preventDefault();
			
			
			changingPage = true;
			
			newUnload();
			
			window.setTimeout(function(){window.location.assign(el.href);},2000);//Fail safe in case of error
			var temp = document.getElementsByClassName("SurroundBtn");
			for(i = 0; i < temp.length; i++){
				temp[i].className = "SurroundBtn";
			}
			document.getElementsByClassName("MainBtn")[0].className = "MainBtn";
			el.className += " CurrPage";
			
			
			console.log("Animating Page Transition");
			
			history.pushState(null, null, el.href);
			changePage();
			
			
			
			return;
		}
	});
}