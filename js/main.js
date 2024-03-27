$(function(){ 
	var swiper = new Swiper(".swiper", {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			loop:true,
			pauseOnMouseEnter:true
			},	
		
		
		slidesPerView: 1,
 		 spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},		
		pagination: {  
			el: ".swiper-pagination", 
			clickable: true, 		
		},
		
		breakpoints: {
		  480: {
			slidesPerView: 1,
			spaceBetween: 20,
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 40,
		  },
		  1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		  },
		},
		
		direction:"horizontal",

		
		
	});
	// $('.swiper-slide').hover(function() {swiper.autoplay.stop();}, function(){swiper.autoplay.start();});
	// 자동 재생 시작, 정지 버튼 만들기 스크립트
	console.log(swiper);

	$('.swiper-pause').click(function(){
		let targetId = $(this).closest('.tabn').attr('data-ind');
		console.log('멈춤');
		swiper[targetId].autoplay.stop()
	})
	$('.swiper-play').click(function(){
		let targetId = $(this).closest('.tabn').attr('data-ind');
		console.log('시작');
		swiper[targetId].autoplay.start()
	})
	
	


	let tabmenu = $('.tab-menu a');
	let tabcontent = $('.tab-content > div');

	tabmenu.click(function(e){
		e.preventDefault();
		tabmenu.removeClass('active');
		$(this).addClass('active');
		let targetIdx = $(this).parent().index();  // 윗부모
		console.log(targetIdx);
		tabcontent.hide(); // 모든 컨텐츠가 안보이게
		tabcontent.eq(targetIdx).show(); // 인덱스 번호로 요소를 선택하는 메서드 eq
	})
	tabmenu.eq(0).trigger('click');

	let tabmenu2 = $('.tab-menu2 a');
	let tabcontent2 = $('.tab-content2 > div');

	tabmenu2.click(function(e){
		e.preventDefault();
		tabmenu2.removeClass('active');
		$(this).addClass('active');
		let targetIdx2 = $(this).parent().index();  // 윗부모
		console.log(targetIdx2);
		tabcontent2.hide(); // 모든 컨텐츠가 안보이게
		tabcontent2.eq(targetIdx2).show(); // 인덱스 번호로 요소를 선택하는 메서드 eq
	})
	tabmenu2.eq(0).trigger('click');


	
	


	/* membership */



	

/* 시설소개 */

const swipers = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  centeredSlides: true,
  navigation: {
    nextEl: '.intro-next',
    prevEl: '.intro-prev',
  }
});


// header sticky
$($(window)).scroll(function(){
	console.log($(window).innerHeight())
	if($(window).scrollTop() >= $(window).innerHeight()){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
	}
})






});