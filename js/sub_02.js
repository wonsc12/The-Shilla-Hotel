$(function(){ 


  let slideWrapper = $('.seoul-right-slide'),
      slideContainer = slideWrapper.find('ul'),
      slides = slideContainer.find('li'),
      prevBtn = $('#prev'),
      nextBtn = $('#next'),    
      currentIdx = 0;

  //slideContainer의 너비 지정
  slideWidth = slideWrapper.outerWidth();
  slideContainer.css({width:slideWidth * slides.length+'px'});

  //슬라이드 이동 함수
  function moveSlide(num){
    console.log(num);
    let moveImg = -num * slideWidth;
    slideContainer.stop().animate({transform:`translateX(${moveImg}px)`});
    currentIdx = num;
    // updateSlide();
  }

  nextBtn.click((e)=>{    
    e.preventDefault();
    moveSlide(currentIdx + 1);      
  });

  prevBtn.click((e)=>{    
    e.preventDefault();   
    moveSlide(currentIdx - 1);
  });

  
});