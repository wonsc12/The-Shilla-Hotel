$(function(){ 
let popup = $('.popup');
let input = $('input');
let closeBtn = $('button');

    closeBtn.click(function(){
      console.log(input.checked);
      if(input.checked){
        // 쿠키생성
        setCookie('Company','ABC',1);
      }else{
        // 쿠기삭제
        delCookie('Company');
      }
  
      popup.addClass('hide');
    })
    function setCookie(name,val,day){
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
        popup.addClass('hide');
      }else{
        popup.removeClass('hide');
      }
    }
  checkCookie('ABC');

});