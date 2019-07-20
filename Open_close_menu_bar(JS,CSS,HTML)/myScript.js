var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click",toggleMenu);

function toggleMenu(e){
	var divOverlay = document.getElementsByClassName("overlay")[0];
	
	var speed = 10;

	var eventTarget = e.target;

	if(eventTarget.className == "btn-open"){
		fadeIn(divOverlay,speed);
		eventTarget.className = "btn-close";
	}else if(eventTarget.className == "btn-close"){
		fadeOut(divOverlay,speed);
		eventTarget.className = "btn-open";
	}
}
function fadeIn( element,speed){
	var inTerval = setInterval(function(){
		element.style.opacity = Number(element.style.opacity) + 0.02;
		if(element.style.opacity >= 1){
			element.style.opacity = 1;
			clearInterval(inTerval);
		}

	}, speed);//10ms = 0.01s
}
function fadeOut( element,speed){
	var outTerval = setInterval(function(){
		element.style.opacity = Number(element.style.opacity) - 0.02;
		if(element.style.opacity <= 0){
			element.style.opacity = 0;
			clearInterval(outTerval);
		}

	}, speed);
}