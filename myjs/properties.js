window.onload=function(){ console.clear(); console.log('%c NO DEBERIA ESTAR ACA!', 'color: red; font-size: 40px;'); return false; }
window.oncontextmenu=function(){ console.clear(); console.log('%c NO DEBERIA ESTAR ACA!', 'color: red; font-size: 40px;'); return false; }
window.onselectstart=new Function("return false");

let div = document.createElement('div');
let loop = setInterval(() => {
	console.log(div);
	console.clear();
}, 500);
Object.defineProperty(div, "id", {get: () => { 
	clearInterval(loop);
	document.getElementsByTagName("html")[0].remove();
	console.clear(); console.log('%c NO DEBERIA ESTAR ACA!\n Cierre la consola de desarrollador!', 'color: red; font-size: 40px;'); return false;
}});

if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}
