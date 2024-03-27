$(function(){ 

  // header footer load
  $('#header').load('header.html', function(){
    // header 언어 영역
		$('.lang-drop ul').hide();
		$(".lang-drop button").click(function(){
			if(!$(this).closest('.lang-drop').hasClass('on')){
				$(this).closest('.lang-drop').addClass("on");
				$(this).closest('.lang-drop').find('ul').show();
			}else{
				$(this).closest('.lang-drop').removeClass("on");
				$(this).closest('.lang-drop').find('ul').hide();
			}
		})

  });


  $('#footer').load('footer.html',function(){

  });

  //sub-breadcrumbs
	$(".breadcrumbs li button").off('click').click(function(){
		// console.log($(this), $(this).closest('li').find('.drop-menu'), '빵 부스러기')
		
		if($(this).closest('li').hasClass('on') === true){
			$(this).closest('li').removeClass("on");
			$(this).closest('li').find('.drop-menu').stop().slideUp(300);
		}else{
			$(".breadcrumbs li").removeClass("on");
			$(this).closest('li').addClass("on");
			$('.drop-menu').stop().slideUp(300);
			$(this).closest('li').find('.drop-menu').stop().slideDown({
				duration: 300
			});
		};
	})


});