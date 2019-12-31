
function artifact(option){
	switch (option)
	{
		case 1:
				document.getElementById("set").value = "dm";
				document.getElementById("dificultad").value = document.getElementById("dms").value;
				break;

		case 2:
				document.getElementById("set").value = "b";
				document.getElementById("dificultad").value = document.getElementById("bs").value;
				break;

		case 3:
				document.getElementById("set").value = "m";
				document.getElementById("dificultad").value = document.getElementById("ms").value;
				break;
		
		case 4:
				document.getElementById("set").value = "d";
				document.getElementById("dificultad").value = document.getElementById("ds").value;
				break;
		
		case 5:
				document.getElementById("set").value = "o";
				document.getElementById("dificultad").value = document.getElementById("os").value;
				break;
	}
}

function dmv(){
	switch (document.getElementById("dms").value)
	{
		case '0':
			document.getElementById("dmv").innerHTML = "0";
			break;

		case 'gamma':
			document.getElementById("dmv").innerHTML = "1000";
			break;

		case 'beta':
			document.getElementById("dmv").innerHTML = "1400";
			break;

		case 'alpha':
			document.getElementById("dmv").innerHTML = "1800";
			break;
	}
}

function bv(){
	switch (document.getElementById("bs").value)
	{
		case '0':
			document.getElementById("bv").innerHTML = "0";
			break;

		case 'gamma':
			document.getElementById("bv").innerHTML = "800";
			break;

		case 'beta':
			document.getElementById("bv").innerHTML = "1200";
			break;

		case 'alpha':
			document.getElementById("bv").innerHTML = "1600";
			break;
	}
}

function mv(){
	switch (document.getElementById("ms").value)
	{
		case '0':
			document.getElementById("mv").innerHTML = "0";
			break;

		case 'gamma':
			document.getElementById("mv").innerHTML = "1200";
			break;

		case 'beta':
			document.getElementById("mv").innerHTML = "1600";
			break;

		case 'alpha':
			document.getElementById("mv").innerHTML = "2000";
			break;
	}
}

function dv(){
	switch (document.getElementById("ds").value)
	{
		case '0':
			document.getElementById("dv").innerHTML = "0";
			break;

		case 'gamma':
			document.getElementById("dv").innerHTML = "1400";
			break;

		case 'beta':
			document.getElementById("dv").innerHTML = "1800";
			break;

		case 'alpha':
			document.getElementById("dv").innerHTML = "2200";
			break;
	}
}

function ov(){
	switch (document.getElementById("os").value)
	{
		case '0':
			document.getElementById("ov").innerHTML = "0";
			break;

		case 'gamma':
			document.getElementById("ov").innerHTML = "2200";
			break;

		case 'beta':
			document.getElementById("ov").innerHTML = "2600";
			break;

		case 'alpha':
			document.getElementById("ov").innerHTML = "3000";
			break;
	}
}