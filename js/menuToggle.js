let menu = document.getElementById("menuToggle");
if (menu){
	sessionStorage.setItem('menu','open');
	menu.addEventListener("click", function(){if(document.getElementById("bodyToggle").className == ''){
		document.getElementById("bodyToggle").classList.add(sessionStorage.getItem('menu','open'));
	}else{
		document.getElementById("bodyToggle").classList.remove(sessionStorage.getItem('menu'));
	}});
}