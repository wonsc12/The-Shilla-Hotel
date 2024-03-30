$(function(){ 


  let slideWrapper = $('.seoul-right-slideimg'),
  slideContainer = slideWrapper.find('.seoul-right-slideimg ul'),
  slides = slideContainer.find('li'),
  prevBtn = slideWrapper.find('#prev'),
  nextBtn = slideWrapper.find('#next'),    
  currentIdx = 0;

  //slideContainer의 너비 지정
  slideWidth = slideWrapper.outerWidth();
  slideContainer.css({width:slideWidth * slides.length+'px'});

  //슬라이드 이동 함수
  function moveSlide(num){
    let moveImg = -num * slideWidth;
    slideContainer.stop().animate({transform:`translateX(${moveImg}px)`});
    currentIdx = num;
    updateSlide();
  }

  nextBtn.click(()=>{    
    moveSlide(currentIdx + 1);      
  });

  prevBtn.click(()=>{      
    moveSlide(currentIdx - 1);
  });

  
});