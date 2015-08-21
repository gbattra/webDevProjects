//jQuery doc

//DOC READY FUNCTIONS

$(document).ready(function(){
	//hide back to top button
	$(".backToTop").hide();

	//hide about content
	$("#aboutContent").hide();
	$("#aboutSection").click(function()
  	{
   		$("#aboutContent").slideToggle(400);
  	});

	//hid education content
	$("#educationContent").hide();
	$("#educationSubSection").click(function()
  	{
    	$("#educationContent").slideToggle(400);
 	 });


	//hide skills content
	$("#skillsContent").hide();
	$("#skillsSection").click(function()
  	{
    	$("#skillsContent").slideToggle(400);
 	 });

	//hide portfolio content
	//hide skills content
	$("#portfolioContent").hide();
	$("#portfolioSection").click(function()
  	{
    	$("#portfolioContent").slideToggle(400);
 	 });

	var click = 0;
	$('.jumbotron').click(
		function() {
		if (click === 0) {
			$('.jumbotron').animate({height:'+=265px'}, 250);
			$('#name').animate({'padding-top':'+=265px'}, 250);
			click = 1;
		} 

		else {
			$('.jumbotron').animate({height: '-=265px'}, 250);
			$('#name').animate({'padding-top':'-=265px'}, 250);
			click = 0;
		};
	});

	//hover functions
	$('.nav li').hover(function(){
		$(this).css('opacity', '1');
	},
	function(){ 
		$(this).css('opacity', '.7');
	});

	$('.jumbotron').hover(function(){
		$(this).css('opacity', '1');
	},
	function(){ 
		$(this).css('opacity', '.8');
	});

	$('.subSection').hover(function(){
		$(this).css('opacity', '1');
	},
	function(){ 
		$(this).css('opacity', '.7');
	});

	$('#about').click(function(){
		var offset = -20;
		$('html, body').animate({scrollTop:$("#aboutSection").offset().top + offset}, 500);
		$("#aboutContent").slideDown(400);
	});

	$('#education').click(function(){
		var offset = -20;
		$('html, body').animate({scrollTop:$("#educationSubSection").offset().top + offset}, 500);
		$("#educationContent").slideDown(450);
	});

	$('#skills').click(function(){
		var offset = -20;
		$('html, body').animate({scrollTop:$("#skillsSection").offset().top + offset}, 500);
		$("#skillsContent").slideDown(600);
	});

	$('#portfolio').click(function(){
		var offset = -20;
		$('html, body').animate({scrollTop:$("#portfolioSection").offset().top + offset}, 500);
		$("#portfolioContent").slideDown(600);
	});

	$('#contact').click(function(){
		var offset = -20;
		$('html, body').animate({scrollTop:$("#contactSection").offset().top + offset}, 500);
	});

	//hover BACK TO TOP
	$('.backToTop').hover(function() {
		$('.backToTop').css('opacity','1');
	}, function() {
		$('.backToTop').css('opacity', '.5');
	});

	//click BACK TO TOP
	$('.backToTop').click(function(){
		var offset = 0;
		$('html, body').animate({scrollTop:$(".nav").offset().top + offset}, 250);
		$('.backToTop').css('opacity', '.5');
	});

});

//SCROLL TOP UNHIDE

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 450) {
    $('.backToTop').fadeIn();
  } else {
    $('.backToTop').fadeOut();
  }
});