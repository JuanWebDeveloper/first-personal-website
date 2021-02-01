const seccionespaginas = new fullpage('#fullpage', {
    autoScrolling: false,
	fitToSection: true,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
    loopBottom: false,
    navigation: true,
	menu: '#menu',
	anchors: ['Inicio', 'Habilidades', 'Proyectos', 'Contacto'],
	navigationTooltips: ['Inicio', 'Habilidades', 'Proyectos', 'Contacto'],
	showActiveTooltip: false,
});

$(function(){

	$(`.circlechart`).circlechart();
});
