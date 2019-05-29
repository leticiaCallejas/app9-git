//JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready", function (){
		
$('#izquierda').on("swipeleft",function(){
	navigator.notification.alert("Deslizo a la izquierda",function(){"aplicacion","aceptar"});
});

$('#derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(3);
			break; 
			
			case 2: 
			navigator.notification.vibrate(3000);
			break;
		}
	},"Aplicacion","beep, vibrar,cancelar");
			
});
	},false);
});