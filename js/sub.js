$('#file').change(function(){
	let fileName = $(this).val().split('\\').pop(); // 파일 경로에서 파일명만 추출
	$('.file-name').text(fileName).addClass('on'); // 파일명 표시
});





// 서브페이지 객실소개

const swiper1 = new Swiper(".myswiper", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		loop:true,
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
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		loop:true,
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
			clickable:true
		},

});