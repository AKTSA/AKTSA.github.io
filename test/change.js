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


		var oldContent = $('#MainWrap');
		var newContent = wrapper.querySelector('#MainWrap');

		main.append(newContent);
		newContent.style.opacity = 0;
		animate(oldContent, newContent);

		document.title = responseText.split("<title>")[1].split("</title>")[0];
	});
}

function animate(oldContent, newContent) {

	oldContent.get(0).style.position = 'absolute';
	oldContent.get(0).style.width = '100%';
	oldContent.get(0).style.top = 0;

	var fadeOut = oldContent.animate({
		opacity: 0
	}, 1000);

	var fadeIn = $(newContent).animate({
		opacity: 1
	}, 1000, function(){
		oldContent.remove();
		changingPage = false;
		console.log("Page Transition Complete");
	});
}

function setUpPage(){
	main = $('body');

	window.addEventListener('popstate', changePage);

	
	
	
	/*
	
	
	var ses = "input[type=text], input[type=date], input[type=email], input[type=tel]";
			
			$(ses).on('focusin', function() {
			  $(this).parent().find('label').addClass('active');
			});
	
	
	*/
	$("a").on('click', function(e){
		
	//})
	
	//document.addEventListener('click', function(e) {
		if(changingPage){
			console.log("Page transition in progress; click listeners halted");
			e.preventDefault();
			return;
		}
		
		
		//var el = e.target;

		//while (el && !el.href) {
		//	el = el.parentNode;
		//}

		//if (el) {
			changingPage = true;
			console.log("Animating Page Transition");
			e.preventDefault();
			history.pushState(null, null, e.target.href);
			changePage();

			return;
		//}
	});
}