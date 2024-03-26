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
		  640: {
			slidesPerView: 2,
			spaceBetween: 20,
		  },
		  768: {
			slidesPerView: 3,
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
	// $('.start').on('click',function(){
	// 	swiper.autoplay.start();
	// 	return false;
	// });
	// $('.stop').on('click',function(){
	// 	swiper.autoplay.stop();
	// 	return false;
	// });
	


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


	
	


	// membership

// let membershipParent = $('.membership-card'),
// 		membershipWrap = $('.membership-wrapper'),
// 		membership = $('.membership-wrapper > li'),
// 		membershipPager = $('.membership-pager > li > a');
// 		currentIdx = 0;

// 		memberWidth = membershipParent.outerWidth();
// 		membershipWrap.css({width:memberWidth * membership.length + 'px'})

// 		function moveSlide(num){
// 			let memberslide = -num * memberWidth;
//       slideContainer.stop().animate({
//         transform : `translateX(${memberslide}px)`
//       });

//       currentIdx = num;

// 		};
// 		updateSlide();

// 		//페이저 누르면 이동
//     membershipPager.click(function(e){
//       e.preventDefault();
//       let targetIdx = $(this).index();
//       moveSlide(targetIdx);
//     });

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