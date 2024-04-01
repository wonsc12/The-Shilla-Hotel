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



  
  let tabmenu = $('.tab-menu a');
  let tabcontent = $('#tab-content > div');


  tabmenu.click(function(e){
    e.preventDefault();
    tabmenu.removeClass('active');
    $(e.target).addClass('active');

    let targetId = $(e.target).attr('href');

    tabcontent.removeClass('active');
    tabcontent.addClass('active');


    tabcontent.hide(); //탭을 하면 추가되서 나오니까 그걸 제거해주고
    $(targetId).show(); //클릭한 것만 보여줌
  });

  tabcontent.eq(0).show();





  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".scroll-txt-right", {
	scrollTrigger: ".scroll-txt-right", x: 0, duration: 2, opacity:1 })

  gsap.to(".scroll-txt-left", {
	scrollTrigger: ".scroll-txt-right", x: 0, duration: 2.5, opacity:1 })
  
  gsap.to(".hotel-text-wrap span", {
	scrollTrigger: ".scroll-txt-right", y: 0, duration: 3, opacity:1 })

  $('#footer').css({marginTop:'0px'});

});