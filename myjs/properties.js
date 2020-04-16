window.onload=function(){ console.clear(); console.log('%c NO DEBERIA ESTAR ACA!', 'color: red; font-size: 40px;'); return false; }
window.oncontextmenu=function(){ console.clear(); console.log('%c NO DEBERIA ESTAR ACA!', 'color: red; font-size: 40px;'); return false; }
window.onselectstart=new Function("return false");

let div = document.createElement('div');
let loop = setInterval(() => {
	console.log(div);
	console.clear();
}, 500);
Object.defineProperty(div,"id",{get:()=>
{
	clearInterval(loop); 
	setTimeout(()=>document.getElementsByTagName("html")[0].remove(),500);
	let left = (screen.width/2)-(370/2);
  	let top = (screen.height/2)-(180/2);
	let web=window.open("", 'Roptur', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=370,height=180,left = '+left+',top = '+top+'');
	web.document.body.innerHTML="<h3>ROPTUR</h3><h3 style=\"color: #ff2f00; text-align: center;\">NO TIENE PERMITIDO ESTAR ACA!<br>Cierre las herramientas de desarrollador<br>y vuelva a cargar la pagina.</h3><div style=\"width: 25%;margin:0 auto;\"><button onclick=\"javascript:window.close()\">CERRAR</button></div>";
}});

if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}
