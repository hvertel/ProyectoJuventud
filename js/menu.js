$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.boton_menu').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};

// Mostramos y ocultamos submenus
	$('.sub1').click(function(){
		$(this).children('.submenu').slideToggle();
	});

	$('.sub2').click(function(){
		$(this).children('.submenu2').slideToggle();
	});