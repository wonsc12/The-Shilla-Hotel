	var swiper = new Swiper(".swiper", {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			loop:true
		},
		
		slidesPerView: 1,
 		 spaceBetween: 10,
		pagination: {  
			el: ".swiper-pagination", 
			clickable: true, 
				
		},	
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		direction:"horizontal",
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
		
	});
	// $('.swiper-slide').hover(function() {swiper.autoplay.stop();}, function(){swiper.autoplay.start();});
	$('.start').on('click',function(){
		swiper.autoplay.start();
		return false;
	});
	$('.stop').on('click',function(){
		swiper.autoplay.stop();
		return false;
	});
	

	var swiper2 = new Swiper(".rswiper", {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			loop:true
			
		},
		
		slidesPerView: 1,
 		 spaceBetween: 10,
		pagination: {  
			el: ".swiper-pagination", 
			clickable: true, 
			
		},
		
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		direction:"horizontal",
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
	});


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
	tabcontent.eq(0).show();

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
	tabcontent2.eq(0).show();
	
	


	
	
 
