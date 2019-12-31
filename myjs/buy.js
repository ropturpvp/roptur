function sendinfo(option){
	switch (option)
	{
		case 1:
				document.getElementById("set").value = "mset";
				break;

		case 2:
				document.getElementById("set").value = "bset";
				break;

		case 3:
				document.getElementById("set").value = "dset";
				break;
		
		case 4:
				document.getElementById("set").value = "cset";
				break;
		
		case 5:
				document.getElementById("set").value = "rset";
				break;
		
		case 6:
				document.getElementById("set").value = "pset";
				break;
				
		case 7:
				document.getElementById("set").value = "tset";
				break;
	}
}