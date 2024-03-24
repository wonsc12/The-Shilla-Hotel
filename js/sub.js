$('#file').change(function(){
	let fileName = $(this).val().split('\\').pop(); // 파일 경로에서 파일명만 추출
	$('.file-name').text(fileName).addClass('on'); // 파일명 표시
});