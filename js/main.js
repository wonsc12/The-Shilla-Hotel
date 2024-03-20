$(function(){
	
	$('.tab-slide').bxSlider({
		
		slideWidth:450,
		slideHeigh:591,
		maxSlides:3,
		moveSlide:1,	
		pager:true,
		slideMargin:20,
		

	});
	$( "#tabs" ).tabs({
		create: function( event, ui ) { //tab이 생성되면 할일
		  tabSide.reloadSlider();
		},
		activate: function( event, ui ) {//tab을 클릭할 때 할일
		  tabSide.reloadSlider();
		}
	  });
	
	


	
	
});//document ready jquery 
