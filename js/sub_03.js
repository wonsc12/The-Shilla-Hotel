$(function(){ 

    // 서브페이지 객실소개
	
		const swiper1 = new Swiper(".myswiper", {
			loop:true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				
				pauseOnMouseEnter:true
			},	
				slidesPerView: 1,
				direction:"horizontal",
	
			pagination: {
				el: '.swiper-pagination',
				clickable:true
			},
			
		});
	
	
	
		// 서브페이지 다이닝
	
		const swiper2= new Swiper(".myswiper2", {
			loop:true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				
				pauseOnMouseEnter:true
			},	
				slidesPerView: 1,
				direction:"horizontal",
	
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},	
				pagination: {
					el: '.swiper-pagination',
					clickable:true,
					dynamicBullets: true,
				},
	
		});
	

});