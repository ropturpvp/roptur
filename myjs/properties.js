window.onload=function(){ console.clear(); console.log('%c NO DEBERIAS ESTAR ACA!\n Se notifico al Administrador', 'color: red; font-size: 40px;'); return false; }
window.oncontextmenu=function(){ console.clear(); console.log('%c NO DEBERIAS ESTAR ACA!\n Se notifico al Administrador', 'color: red; font-size: 40px;'); return false; }
window.onselectstart=new Function("return false");

let div = document.createElement('div');
let loop = setInterval(() => {
	console.log(div);
	console.clear();
}, 500);
Object.defineProperty(div, "id", {get: () => { 
	clearInterval(loop);
	document.getElementsByTagName("html")[0].remove();
}});

if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}
