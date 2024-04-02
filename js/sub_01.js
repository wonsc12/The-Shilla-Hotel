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
	if($('.date-picker').length > 0){
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
			yearSuffix: '년'
			
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

		// 데이트픽커 클래스 추가
		$("#ui-datepicker-div").datepicker("widget").addClass("custom-date-pick");
	}
	


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


		// validation 체크
		let elFocus = null
		let validatnTxt = ''
		$('.inquiry .btn-area.bottom button').on('click', () => {
			elFocus = null
			$(".form-list .data .ipt-wrap input, .form-list .data .ipt-wrap textarea, .form-list .data .ipt-wrap select").each((idx, item) => {
				validatnTxt = ''
				switch($(item).attr('type')){
					case "tel": // tel type
						if($.isNumeric($(item).val()) === false || $(item).val() === ''){
							validatnTxt = '숫자를 입력해주세요.';
						}else{
							validatnTxt = '';
						}
						break;
					case "text": // text type
						if($(item).val() === ''){
							validatnTxt = '문자를 입력해주세요.';
						}else{
							validatnTxt = '';
						}
						break;
					case "email": // email type
						if($(item).val() === ''){
							validatnTxt = '이메일을 입력해주세요.';
						}else{
							validatnTxt = '';
						}
						break;
					case "file": // file type
						if($(item).val() === ''){
							validatnTxt = '파일을 등록해주세요.';
						}else{
							validatnTxt = '';
						}
						break;
					default:
						if($(item).prop("tagName").toLowerCase() === 'textarea' && $(item).val() === ''){ // textarea
							validatnTxt = '문자를 입력해주세요.';
						}else if($(item).prop("tagName").toLowerCase() === 'select' && $(item).val() === ''){ // selectbox
							validatnTxt = '선택해주세요.';
						}else{
							validatnTxt = '';
						}
						break;
				};
				
				if($(item).closest('.data').find('.ipt-wrap').length > 1){ // input 2개 이상일 때(email, 첨부파일 등)
					if(validatnTxt !== ''){
						if($(item).closest('.data').find('> .error-txt').length > 0){
							// $(item).closest('.data').find('.error-txt').text(validatnTxt)
						}else{
							$(item).closest('.data').append(`<p class="error-txt">${validatnTxt}</p>`)
						}
					}else if(validatnTxt === '' && $(item).closest('.data').find('> .error-txt').length > 0){
						let iptEmpty = true
						for(let i=0; i<$(item).closest('.data').find('.ipt-wrap').length; i++){
							console.log('다음 타겟', $(item), $(item).closest('.data').find('> .error-txt'))
							if($(item).closest('.data').find('.ipt-wrap').eq(i).find('input').val() === ''){
								iptEmpty = false
								break;
							}
						}
						if(iptEmpty){
							$(item).closest('.data').find('> .error-txt').remove()
						}
					}
				}else{ // input 1개일 때
					if(validatnTxt !== ''){
						if($(item).siblings('.error-txt').length > 0){
							$(item).siblings('.error-txt').text(validatnTxt)
						}else{
							$(item).after(`<p class="error-txt">${validatnTxt}</p>`)
						}
					}else if(validatnTxt === '' && $(item).siblings('.error-txt').length > 0){
						$(item).next().remove()
					}
				}
				
				// validation input 선택자
				if($(item).closest('.ipt-wrap').find('.error-txt').length > 0 && elFocus === null){
					elFocus = $(item)
				}
			})

			// validation input 선택자 포커스 이동
			if(elFocus !== null){
				elFocus.focus()
			}

			if($('.terms-area .ipt-wrap .ipt').prop('checked') === false && $('.error-txt').length === 0){
				alert('"(필수) 개인정보 수집 및 이용에 관한동의"를 체크해주세요.')
			}
		})
		// 이메일 셀렉트 박스 선택시 input value 맵핑
		$('.select-domain').on('change', (e) => {
			console.log($('.data.email .ipt-wrap').eq(1).find('input'), $(this), e.target.value)
			$('.data.email .ipt-wrap').eq(1).find('input').val(e.target.value)
		})
		// 이메일 입력시 셀렉트박스 맵핑
		$('.data.email .ipt-wrap').eq(1).find('input').on('input', (e) => {
			$('.select-domain').val(e.target.value)
		})
		$('.data .ipt-wrap input, .data .ipt-wrap textarea, .data .ipt-wrap select').on('focusin', (e) => {
			validatnTxt = ''
			switch($(e.target).attr('type')){
				case "tel": // tel type
					if($.isNumeric($(e.target).val()) === false || $(e.target).val() === ''){
						validatnTxt = '숫자를 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "text": // text type
					if($(e.target).val() === ''){
						validatnTxt = '문자를 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "email": // email type
					if($(e.target).val() === ''){
						validatnTxt = '이메일을 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "file": // file type
					if($(e.target).val() === ''){
						validatnTxt = '파일을 등록해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				default:
					if($(e.target).prop("tagName").toLowerCase() === 'textarea' && $(e.target).val() === ''){ // textarea
						validatnTxt = '문자를 입력해주세요.';
					}else if($(e.target).prop("tagName").toLowerCase() === 'select' && $(e.target).val() === ''){ // selectbox
						validatnTxt = '선택해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
			};

			if($(e.target).val() !== '' && $(e.target).parents('.data').find('.ipt-wrap').length === 1 && $(e.target).parents('.data').find('.error-txt').length > 0){ // input 1개일 때만 체크
				if(($(e.target).attr('type') === 'tel' && $.isNumeric($(e.target).val()) === true) || $(e.target).attr('type') !== 'tel'){
					$(e.target).parents('.data').find('.error-txt').remove()
				}
			}else if($(e.target).parents('.data').find('.error-txt').length === 0 && $(e.target).val() === '' && $(e.target).parents('.data').find('.ipt-wrap').length === 1){
				$(e.target).parents('.data').find('.ipt-wrap').append(`<p class="error-txt">${validatnTxt}</p>`)
			}
		})
		$('.data .ipt-wrap input, .data .ipt-wrap textarea, .data .ipt-wrap select').on('focusout', (e) => {
			validatnTxt = ''
			switch($(e.target).attr('type')){
				case "tel": // tel type
					if($.isNumeric($(e.target).val()) === false || $(e.target).val() === ''){
						validatnTxt = '숫자를 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "text": // text type
					if($(e.target).val() === ''){
						validatnTxt = '문자를 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "email": // email type
					if($(e.target).val() === ''){
						validatnTxt = '이메일을 입력해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				case "file": // file type
					if($(e.target).val() === ''){
						validatnTxt = '파일을 등록해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
				default:
					if($(e.target).prop("tagName").toLowerCase() === 'textarea' && $(e.target).val() === ''){ // textarea
						validatnTxt = '문자를 입력해주세요.';
					}else if($(e.target).prop("tagName").toLowerCase() === 'select' && $(e.target).val() === ''){ // selectbox
						validatnTxt = '선택해주세요.';
					}else{
						validatnTxt = '';
					}
					break;
			};

			if($(e.target).val() !== '' && $(e.target).parents('.data').find('.ipt-wrap').length === 1 && $(e.target).parents('.data').find('.error-txt').length > 0){ // input 1개일 때만 체크
				if(($(e.target).attr('type') === 'tel' && $.isNumeric($(e.target).val()) === true) || $(e.target).attr('type') !== 'tel'){
					$(e.target).parents('.data').find('.error-txt').remove()
				}
			}else if($(e.target).parents('.data').find('.error-txt').length === 0 && $(e.target).val() === '' && $(e.target).parents('.data').find('.ipt-wrap').length === 1){
				$(e.target).parents('.data').find('.ipt-wrap').append(`<p class="error-txt">${validatnTxt}</p>`)
			}
		})

		//  event list 로드 시
		let unit = $('.event-list').html();
		let listUi = $('.event-list');
		let queryData = null;
		let item = null;
		let index = 6; //디폴트 갯수
		let listAdd = 4; //더보기 추가 갯수

		$.ajax({
			type: 'get',
			dataType : 'json',
			async : 'false',
			url: './json/event_info.json',
			success: function(data){
				queryData = data['Query'];

				item = null;
				listUi.empty();

				item = unit;
				
				$.each(queryData, function(idx){
					if(idx < index && item != undefined && queryData != undefined){ // 기본 6개 까지 노출 && data undefined 체크
						// ui list 추가
						listUi.append(item);

						listUi.find('.img-wrap').eq(idx).append( // 이미지 태그
							'<img src="" alt="">'
						);
							
						// img 데이터
						listUi.find('.img-wrap > img').eq(idx).attr({
							'src':queryData[idx].hotelImg
						});
						listUi.find('.img-wrap > img').eq(idx).attr({
							'alt':queryData[idx].title
						});
					
						// text 데이터
						listUi.find('.flag > span').eq(idx).append( // flag
							queryData[idx].branch
						);
						listUi.find('.tit-h3').eq(idx).append( // title
							queryData[idx].title
						);
						listUi.find('.info .desc').eq(idx).append( // sub title
							queryData[idx].desc
						);
						listUi.find('.info .date').eq(idx).append( // 날짜
							queryData[idx].time
						);
						listUi.find('.info .price-wrap').eq(idx).prepend( // 가격 설명
							queryData[idx].priceDesc
						);
						listUi.find('.info .price-wrap > em').eq(idx).append( // 가격
							queryData[idx].price
						);
						listUi.find('.info .hash').eq(idx).html( // 해쉬태그
							queryData[idx].hash
						);
					};
				});
			},
			error: function(){
				listUi.css({'display':'none'});
				$('.btn-area.bottom').css({'display':'none'});
				$('.no-data').css({'display':'flex'});
				$('.total-num-area > em').text(0)
			},
			complete: function(data){
				if(data.state() === 'resolved'){
					$('.total-num-area > em').text($('.event-list > li').length)
					if(queryData.length <= index){
						$('.btn-area.bottom > button').css({'display':'none'})
					}
				}
			}
		});

		//  event list 더보기 클릭 시
		$('.event .btn-area.bottom > button').off('click').on('click', function(e){
			queryData = null;
			item = null;
			index = index+listAdd

			$.ajax({
				type: 'get',
				dataType : 'json',
				async : 'false',
				url: './json/event_info.json',
				success: function(data){
					queryData = data['Query'];
					item = unit;
					
					$.each(queryData, function(idx){
						idx = $('.event-list > li').length 
						
						if(idx < index && item != undefined && queryData != undefined && $('.event-list > li').length  < queryData.length){ // 2개씩 노출 && data undefined 체크
							// ui list 추가
							listUi.append(item);

							listUi.find('.img-wrap').eq(idx).append( // 이미지 태그
								'<img src="" alt="">'
							);
							
							// img 데이터
							listUi.find('.img-wrap > img').eq(idx).attr({
								'src':queryData[idx].hotelImg
							});
							listUi.find('.img-wrap > img').eq(idx).attr({
								'alt':queryData[idx].title
							});
						
							// text 데이터
							listUi.find('.flag > span').eq(idx).append( // flag
								queryData[idx].branch
							);
							listUi.find('.tit-h3').eq(idx).append( // title
								queryData[idx].title
							);
							listUi.find('.info .desc').eq(idx).append( // sub title
								queryData[idx].desc
							);
							listUi.find('.info .date').eq(idx).append( // 날짜
								queryData[idx].time
							);
						};
					});
				},
				error: function(){
					alert('데이터를 불러오지 못했습니다. 다시 시도해 주세요.')
				},
				complete: function(data){
					if(data.state() === 'resolved'){
						$('.total-num-area > em').text($('.event-list > li').length)
						if(queryData.length === $('.event-list > li').length){
							$('.btn-area.bottom > button').css({'display':'none'})
						}
					}
				}
			});
		});
});



	









