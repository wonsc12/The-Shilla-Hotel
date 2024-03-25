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

	
});



