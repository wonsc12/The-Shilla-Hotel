$(function(){ 
	var swiper = new Swiper(".swiper", {
		loop:true,
		autoplay: {
			delay: 3000,			
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
		direction:"horizontal",
		breakpoints: {
		  480: {
			slidesPerView: 1,
			spaceBetween: 10,
			
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 20,
		  },
		  1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		  },
		},
		
		

		
		
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
	
		console.log(swiper);
	$('.swiper .prev').click(function(){
	let id= $(this).closest('.swiper').attr('data-id');
	swiper[id].slidePrev()
	});
	$('.swiper .next').click(function(){
	let id= $(this).closest('.swiper').attr('data-id');
	swiper[id].slideNext()
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
		tabcontent.eq(targetIdx).find('.swiper-pagination span').eq(0).trigger('click');
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
		tabcontent2.eq(targetIdx2).find('.swiper-pagination span').eq(0).trigger('click');
	})
	tabmenu2.eq(0).trigger('click');




/* membership */

let mslide = 1;

$('.mslide1').click(function(){
	$('.membership-wrapper').css('transform','translateX(0px)');
	mslide = 1;
})

$('.mslide2').click(function(){
	$('.membership-wrapper').css('transform','translateX(-1084px)');
	mslide = 2;
})

$('.mslide3').click(function(){
	$('.membership-wrapper').css('transform','translateX(-2172px)');
	mslide = 3;
})

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




  //변수지정
let menu = $('.slidemenu li');
let content = $('.panel');

//메뉴 클릭 이동

	menu.click(function(e){
	e.preventDefault();
	// menu.removeClass('on');
	// $(this).addClass('on');
	let targetSectionOst = content.eq($(this).index()).offset().top;
	$('html,body').stop().animate({scrollTop:targetSectionOst},500,'easeOutCubic');
	});
	/*
	변수명 targetSectionOst에 클릭한 그요소의 순번에 해당하는 content가 화면 상단에서 떨어진 거리를 저장
	그 거리 만큼 html,body에 스크롤양을 생성한다.
	jquery_base/b/04_back_to_top 참조
	*/

//스크롤 이동 반영하기  
	$(window).scroll(()=>{
	let sct = $(window).scrollTop();
	/*
	content들 마다 할일
	만약 각 content가 화면에서 떨어진 거리보다 스크롤이 많다면
	모든 메뉴에서 on을 제거하고
	그 content의 인덱스 번호에 해당하는 menu에 on추가
	*/
	$(window).scroll(()=>{
	let sct = $(window).scrollTop();
	content.each(function(idx){
	if($(this).offset().top - 450 <=sct){
		menu.removeClass('on');
		menu.eq(idx).addClass('on');
	}
	})
});
});


	//예약폼 영역
	// 예약
	$('.resevation ul').hide();
	$('.reservation-area .resevation .btn-select').click(function(){
		if(!$(this).closest('.resevation').hasClass('on')){
			$(this).closest('.resevation').addClass("on");
			$(this).closest('.resevation').find('ul').slideDown();
		}else{
			$(this).closest('.resevation').removeClass("on");
			$(this).closest('.resevation').find('ul').slideUp();
		}
	})

	// 예약 드롭박스 맵핑
	$('.resevation > ul a').click(function() {
		let dropText = $(this).text(); 
		$('.resevation .btn-select span').text(dropText);
		$('.resevation > ul').slideToggle();
		$('.resevation').removeClass("on");
	});

	// 호텔
	$('.hotel ul').hide();
	$('.reservation-area .hotel .btn-select').click(function(){
		if(!$(this).closest('.hotel').hasClass('on')){
			$(this).closest('.hotel').addClass("on");
			$(this).closest('.hotel').find('ul').slideDown();
		}else{
			$(this).closest('.hotel').removeClass("on");
			$(this).closest('.hotel').find('ul').slideUp();
		}
	})

	// 호텔 드롭박스 맵핑
	$('.hotel > ul a').click(function() {
		let dropText = $(this).text(); 
		$('.hotel .btn-select span').text(dropText);
		$('.hotel > ul').slideToggle();
		$('.hotel').removeClass("on");
	});

	// 그외 예약요소 전체 클릭
	$('.reserv-box').hide();
	$('.pick-area').click(function(){
		if(!$(this).hasClass('on')){
			$(this).addClass("on");
			$(this).siblings('.reserv-box').slideDown();
		}else{
			$(this).removeClass("on");
			$(this).siblings('.reserv-box').slideUp();
		}
	})

	// 선택완료
	$('.reserv-box .btn-area.complete > button').on('click', function(){
		$('.reserv-box').slideToggle();
	})

	// 프로모션 코드
	$('.promotion .btn-prom').click(function(){
		if(!$(this).closest('.promotion').hasClass('on')){
			$(this).closest('.promotion').addClass("on");
		}else{
			$(this).closest('.promotion').removeClass("on");
		}
	})

	// 수량 증감
	// 추가 버튼 클릭 시
  // $(".btn-plus").click(function(){	
	// $(".quantity").on('click', '.btn-plus', function(){
		// $('.quantity-list > li').each(() => {

		// })
		$(document).on("click", ".quantity .btn-plus", function(){
			let ipt = $(this).siblings(".ipt");
			// console.log('인붓aaaaaa', $(this).siblings(".ipt").val())
			let currentValue = parseInt(ipt.val()); //문자열을 숫자열로 변경
			let maxValue = parseInt(ipt.attr("max"));
			let currentCount = getCurrentCount($(this));
			console.log('ddddddd', currentCount, currentValue, maxValue, ipt)
			if(currentCount < 3 && currentValue < maxValue) {
				ipt.val(currentValue + 1);
				updateCount(ipt);
			}
		});
	
		// 제외 버튼 클릭 시
		// $(".btn-minus").click(function(){
		// $(".quantity").on('click', '.btn-minus', function(){
		let adultTotal = 0
		let childTotal = 0
		$(document).on("click", ".quantity .btn-minus", function(){
			let ipt = $(this).siblings(".ipt");
			let currentValue = parseInt(ipt.val());
			let minValue = parseInt(ipt.attr("min"));
			if(currentValue > minValue) {
				ipt.val(currentValue - 1);
				updateCount(ipt);
			}
		});
		
		// 입력 값이 변경되었을 때
		$(".ipt").change(function() {
			updateCount($(this));
		});
		
		// 수량 표시 업데이트 함수
		function updateCount(ipt) {
			let value = parseInt(ipt.val());
			let countElement = ipt.siblings(".count");
			let title = ipt.attr("title");
			countElement.text(title + " " + value);
	
			calcTotal()
		}
	
		// 전체 인원수 갱신 함수
		function calcTotal() {
			adultTotal = 0
			childTotal = 0
	
			for(let i=0; i<$('.room-info-list > li').length; i++){
				adultTotal += parseInt($(".room-info-list > li").eq(i).find('.quantity-list > li').eq(0).find('input').val());
				childTotal += parseInt($(".room-info-list > li").eq(i).find('.quantity-list > li').eq(1).find('input').val());
			}
			
			$(".guest-info .adult .num").text(adultTotal)
			$(".guest-info .child .num").text(childTotal)
		}
	
		// 현재 객실의 성인과 어린이 수량 합을 반환하는 함수
		function getCurrentCount(button) {
			// let room = button.closest(".room-info-list");
			let room = button.closest(".quantity-list");
			let adultCount = parseInt(room.find(".quantity .ipt[title='성인']").val());
			let childCount = parseInt(room.find(".quantity .ipt[title='어린이']").val());
			return adultCount + childCount;
		}
	
		// 객실 추가 버튼 클릭 시
		$(".btn-add").click(function(){
			var roomList = $(".room-info-list");
			var roomCount = roomList.find("> li").length;
			if (roomCount < 3) {
				var newRoom = `
					<li>
						<span class="tit">객실 ${roomCount + 1}</span>
						<ul class="quantity-list">
							<li class="quantity">
								<button type="button" class="btn-minus">
									<span class="blind">제외</span>
								</button>
								<input type="number" class="ipt blind" title="성인" value="1" maxlength="3" min="1" max="3">
								<span class="count">성인 1</span>
								<button type="button" class="btn-plus">
									<span class="blind">추가</span>
								</button>
							</li>
							<li class="quantity">
								<button type="button" class="btn-minus">
									<span class="blind">제외</span>
								</button>
								<input type="number" class="ipt blind"  title="어린이" value="0" maxlength="2" min="0" max="2">
								<span class="count">어린이 0</span>
								<button type="button" class="btn-plus">
									<span class="blind">추가</span>
								</button>
							</li>
						</ul>
					</li>
				`;
				roomList.append(newRoom);
			} else {
				alert("객실추가는 최대 3개까지만 입력 가능합니다.");
			}
	
			// 객실수 갱신
			$(".guest-info .room .num").text($('.room-info-list > li').length)
			calcTotal()
		});
	
		// form 영역
		console.log('form 영역', $(".reservation-area .pick-area .guest-info-wrap"))
		
		$("<div>").datepicker({
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			yearSuffix: '년'
		}).appendTo("#today-month").datepicker("show");

		$("<div>").datepicker({
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			yearSuffix: '년',
			defaultDate: '+1m'
		}).appendTo("#next-month").datepicker("show");

		// 데이트픽커 클래스 추가
		$("#ui-datepicker-div").datepicker("widget").addClass("custom-date-pick");

		// 날씨 슬라이드
		let slideIndex = 0;
    let slideCount = $('.weather-area .slide').length;
    let slideHeight = $('.weather-area .slide').outerHeight();

    $('.weather-area .btn-prev').click(function() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        moveSlide();
    });

    $('.weather-area .btn-next').click(function() {
        slideIndex = (slideIndex + 1) % slideCount;
        moveSlide();
    });

    function moveSlide() {
        let newPosition = -slideHeight * slideIndex;
        $('.weather-area .slider-list').css('transform', 'translateY(' + newPosition + 'px)');
    }

    // 자동 슬라이드 기능 추가
    function autoSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        moveSlide();
        setTimeout(autoSlide, 5000);
    }

    autoSlide(); // 자동 슬라이드 시작

		// 날씨 api
		let seoul = 'Seoul'; // 가져올 지역 설정
		let jeju = 'Jeju'; // 가져올 지역 설정
		let danang = 'Da Nang'; // 가져올 지역 설정
    let apiKey = '06882828eda4e33e6f2df6599e212004'; // OpenWeatherMap에서 발급받은 API 키

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${seoul}&appid=${apiKey}&units=metric`;
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${jeju}&appid=${apiKey}&units=metric`;
    let url3 = `https://api.openweathermap.org/data/2.5/weather?q=${danang}&appid=${apiKey}&units=metric`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            let region = seoul;
            let weatherIcon = data.weather[0].icon;
            let temperature = Math.round(data.main.temp);

            // 가져온 정보를 마크업에 삽입
            $('.weather-area .seoul').text(region);
            $('.weather-area .seoul + .ico-condition').html(`<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${data.weather[0].description}">`);
            $('.weather-area .seoul ~ .temperature').text(temperature + '°C');
        },
        error: function(xhr, status, error) {
            console.error('날씨 정보를 가져오는 데 실패했습니다.');
        }
    });
		$.ajax({
			url: url2,
			method: 'GET',
			success: function(data) {
					let region = jeju;
					let weatherIcon = data.weather[0].icon;
					let temperature = Math.round(data.main.temp);

					// 가져온 정보를 마크업에 삽입
					$('.weather-area .jeju').text(region);
					$('.weather-area .jeju + .ico-condition').html(`<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${data.weather[0].description}">`);
					$('.weather-area .jeju ~ .temperature').text(temperature + '°C');
			},
			error: function(xhr, status, error) {
					console.error('날씨 정보를 가져오는 데 실패했습니다.');
			}
		});
		$.ajax({
			url: url3,
			method: 'GET',
			success: function(data) {
					let region = danang;
					let weatherIcon = data.weather[0].icon;
					let temperature = Math.round(data.main.temp);

					// 가져온 정보를 마크업에 삽입
					$('.weather-area .danang').text(region);
					$('.weather-area .danang + .ico-condition').html(`<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${data.weather[0].description}">`);
					$('.weather-area .danang ~ .temperature').text(temperature + '°C');
			},
			error: function(xhr, status, error) {
					console.error('날씨 정보를 가져오는 데 실패했습니다.');
			}
		});

		// 쿠키

		let popup = $('.popup');
		let input = popup.find('input');
		console.log(input);
		let closeBtn = popup.find('button');
		
		closeBtn.click(function(){
		
		  if(input.get(0).checked){
			// 쿠키생성
			setCookie('Company','ABC',1);
		  }else{
			// 쿠기삭제
			delCookie('Company');
		  }
		
		  popup.hide();
		})
		function setCookie(name,val,day){
			console.log('쿠키생성함수');
			let date = new Date();
			date.setDate(date.getDate()+day);
			document.cookie = `${name}=${val};Expires=${date}`; 
		  }
		function delCookie(name){
		  let date = new Date();
		  date.setDate(date.getDate()-1);
		  document.cookie = `${name}='';Expires=${date}`;
		}
			
		function checkCookie(name){
		  let cookieArr = document.cookie.split(';');
		  let visited = false;
		
		  console.log(cookieArr);
		  for(let cookie of cookieArr){
			if(cookie.indexOf(name) > -1 ){
			  visited = true;
			}
		  }
		  if(visited){
			popup.removeClass('show');
		  }else{
			popup.addClass('show');
		  }
		}
		  checkCookie('ABC');

});