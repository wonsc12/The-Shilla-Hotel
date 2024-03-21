$(function(){


	var swiper = new Swiper(".swiper", {
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 1,
		spaceBetween: 10,
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
	
	


	
	
});//document ready jquery 
