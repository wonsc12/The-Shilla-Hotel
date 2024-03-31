$(function(){ 
	// 파일 업로드 텍스트 출력
	$('#file').change(function(){
		let fileName = $(this).val().split('\\').pop(); // 파일 경로에서 파일명만 추출
		$('.file-name').text(fileName).addClass('on'); // 파일명 표시	
	});


	// 데이트픽커 공통
	// $( ".date-picker").each((index, item)=>{
	// 	// console.log($(item).data('month'), $(item).data('month') != undefined )
	// 	$(item).datepicker();

	// 	//한글적용을 위해 추가
	// 	$.datepicker.setDefaults({
	// 		dateFormat: 'yy-mm-dd',
	// 		prevText: '이전 달',
	// 		nextText: '다음 달',
	// 		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	// 		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	// 		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	// 		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	// 		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	// 		showMonthAfterYear: true,
	// 		yearSuffix: '년'
	// 		// defaultDate: '+1m'
	// 		// defaultDate: $(item).data('month') != undefined ? +$(item).data('month')+'m' : '+1m'
	// 		// defaultDate: $(item).data('month') != undefined ? '+5m' : '+1m'
			
	// 	});
	// })

	// 현재달
	$("#today-month").datepicker({
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
		
	});

	// 다음달
	$("#next-month").datepicker({
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
		
	});


	// FAQ TAB
	$('.tab-list.faq li').eq(0).addClass('on');
	$('.tab-list.faq .tab-pannel').eq(0).addClass('on');
	
	$('.tab-list.faq li').click(function(e){
		e.preventDefault();
		$('.tab-list.faq li').removeClass('on');
		$(this).addClass('on');
		
		$(this).closest('.tab-wrap').find('.tab-content > .tab-pannel').removeClass('on');
		$(this).closest('.tab-wrap').find('.tab-content > .tab-pannel:eq('+$(this).closest('li').index()+')').addClass('on');
	})

	// ACCORDIAN
	$('.acco-item').eq(0).addClass('on');
	if($('.acco-item').eq(0).hasClass('on')){
		$('.acco-item').eq(0).find('.acco-body').slideDown(400);
	}
	
	$('.acco-btn').click(function(e){
		e.preventDefault();
		console.log($(this).closest('.acco-item'))
		if(!$(this).closest('.acco-item').hasClass('on')){
			$(this).closest('.acco-item').addClass('on');
			$(this).closest('.acco-head').siblings('.acco-body').slideDown(400);
		}else{
			$(this).closest('.acco-item').removeClass('on');
			$(this).closest('.acco-head').siblings('.acco-body').slideUp(400);
		}
	})


	  // 초기 페이지 설정
    var currentPage = 1;
    var pageSize = 10; // 한 페이지에 보여질 항목 수
    var faqItems = $(".tab-pannel.on .faq-list .acco-item");

    // 페이지 로드 시 첫 페이지 항목만 표시
    faqItems.hide().slice(0, pageSize).show();

    // 페이지 버튼 클릭 이벤트 처리
    $(".paging ul li a").on("click", function(e){
      e.preventDefault();
      var $this = $(this);
      var page = parseInt($this.text()); // 클릭한 페이지 번호
      if(page === currentPage) return; // 현재 페이지면 처리 중지

      // 이전 페이지 항목 숨기기
      var start = (page - 1) * pageSize;
      var end = start + pageSize;
      faqItems.hide().slice(start, end).show();

      // 페이지 버튼 스타일 업데이트
      $(".paging ul li").removeClass("on");
      $this.parent().addClass("on");

      // 현재 페이지 업데이트
      currentPage = page;
    });

    // 이전 페이지 버튼 클릭 이벤트 처리
    $(".btn-prev").on("click", function(){
      var $currentPage = $(".paging ul li.on");
      if($currentPage.prev().length > 0) {
        $currentPage.prev().find("a").click();
      }
    });

    // 다음 페이지 버튼 클릭 이벤트 처리
    $(".btn-next").on("click", function(){
      var $currentPage = $(".paging ul li.on");
      if($currentPage.next().length > 0) {
        $currentPage.next().find("a").click();
      }
    });
});



	









