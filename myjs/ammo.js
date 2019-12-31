function sendammo(option){
	switch (option)
	{
		case 1:
				document.getElementById("set").value = "Stone_Arrow";
				document.getElementById("quantity").value = document.getElementById("cantidad1").value;
				document.getElementById("valor1").innerHTML = (document.getElementById("cantidad1").value*0.1);
				break;

		case 2:
				document.getElementById("set").value = "Tranq_Arrow";
				document.getElementById("quantity").value = document.getElementById("cantidad2").value;
				document.getElementById("valor2").innerHTML = (document.getElementById("cantidad2").value*0.2);
				break;

		case 3:
				document.getElementById("set").value = "Metal_Arrow";
				document.getElementById("quantity").value = document.getElementById("cantidad3").value;
				document.getElementById("valor3").innerHTML = (document.getElementById("cantidad3").value*0.4);
				break;
		
		case 4:
				document.getElementById("set").value = "Flame_Arrow";
				document.getElementById("quantity").value = document.getElementById("cantidad4").value;
				document.getElementById("valor4").innerHTML = (document.getElementById("cantidad4").value*0.5);
				break;
		
		case 5:
				document.getElementById("set").value = "Spear_Bolt";
				document.getElementById("quantity").value = document.getElementById("cantidad5").value;
				document.getElementById("valor5").innerHTML = (document.getElementById("cantidad5").value*0.7);
				break;
		
		case 6:
				document.getElementById("set").value = "Simple_Bullet";
				document.getElementById("quantity").value = document.getElementById("cantidad6").value;
				document.getElementById("valor6").innerHTML = (document.getElementById("cantidad6").value*0.8);
				break;
				
		case 7:
				document.getElementById("set").value = "Simple_Rifle_Ammo";
				document.getElementById("quantity").value = document.getElementById("cantidad7").value;
				document.getElementById("valor7").innerHTML = (document.getElementById("cantidad7").value*1);
				break;
				
		case 8:
				document.getElementById("set").value = "Simple_Shotgun_Ammo";
				document.getElementById("quantity").value = document.getElementById("cantidad8").value;
				document.getElementById("valor8").innerHTML = (document.getElementById("cantidad8").value*1.1);
				break;
				
		case 9:
				document.getElementById("set").value = "Advanced_Bullet";
				document.getElementById("quantity").value = document.getElementById("cantidad9").value;
				document.getElementById("valor9").innerHTML = (document.getElementById("cantidad9").value*1.1);
				break;
				
		case 10:
				document.getElementById("set").value = "Advanced_Rifle_Bullet";
				document.getElementById("quantity").value = document.getElementById("cantidad10").value;
				document.getElementById("valor10").innerHTML = (document.getElementById("cantidad10").value*1.3);
				break;
				
		case 11:
				document.getElementById("set").value = "Advanced_Sniper_Bullet";
				document.getElementById("quantity").value = document.getElementById("cantidad11").value;
				document.getElementById("valor11").innerHTML = (document.getElementById("cantidad11").value*1.5);
				break;
				

		case 12:
				document.getElementById("set").value = "Tranquilizer_Dart";
				document.getElementById("quantity").value = document.getElementById("cantidad12").value;
				document.getElementById("valor12").innerHTML = (document.getElementById("cantidad12").value*1.3);
				break;
				

		case 13:
				document.getElementById("set").value = "Shocking_Tranquilizer_Dart";
				document.getElementById("quantity").value = document.getElementById("cantidad13").value;
				document.getElementById("valor13").innerHTML = (document.getElementById("cantidad13").value*1.5);
				break;
				

		case 14:
				document.getElementById("set").value = "Pheromone_Dart";
				document.getElementById("quantity").value = document.getElementById("cantidad14").value;
				document.getElementById("valor14").innerHTML = (document.getElementById("cantidad14").value*1.9);
				break;
				

		case 15:
				document.getElementById("set").value = "Rocket_Propelled_Grenade";
				document.getElementById("quantity").value = document.getElementById("cantidad15").value;
				document.getElementById("valor15").innerHTML = (document.getElementById("cantidad15").value*5);
				break;
				

		case 16:
				document.getElementById("set").value = "Rocket_Homing_Missile";
				document.getElementById("quantity").value = document.getElementById("cantidad16").value;
				document.getElementById("valor16").innerHTML = (document.getElementById("cantidad16").value*6);
				break;
				

		case 17:
				document.getElementById("set").value = "Flamethrower_Ammo";
				document.getElementById("quantity").value = document.getElementById("cantidad17").value;
				document.getElementById("valor17").innerHTML = (document.getElementById("cantidad17").value*4);
				break;
				
		case 18:
				document.getElementById("set").value = "Element_Shard";
				document.getElementById("quantity").value = document.getElementById("cantidad18").value;
				document.getElementById("valor18").innerHTML = (document.getElementById("cantidad18").value*0.2);
				break;
				
		case 19:
				document.getElementById("set").value = "Element";
				document.getElementById("quantity").value = document.getElementById("cantidad19").value;
				document.getElementById("valor19").innerHTML = (document.getElementById("cantidad19").value*20);
				break;
	}
}