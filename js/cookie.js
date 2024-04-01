$(function(){ 
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