
/*객실소개 */

const slideWrapper = document.querySelector('.slide_wrapper');
let slideContainer = slideWrapper.querySelector('.slide_wrapper > .slides');
let tablist = [];






//debounce 

function debounce(callback, time){
  console.log(typeof(callback));
  let slideTrigger = true;
  console.log(slideTrigger);
  return ()=>{
    if(slideTrigger){
      callback();
      slideTrigger = false;
      setTimeout(()=>{
        slideTrigger = true;
      },time);
    }
    console.log(slideTrigger);
  }
  console.log(slideTrigger);
}

window.addEventListener('keydown', (e) => {
  debounce(() => {
    if (e.key === 'ArrowRight') {
      moveSlide(currentIdx + 1); 
    }
    if (e.key === 'ArrowLeft') {
      moveSlide(currentIdx - 1); 
    }
  }, 500)();
});


/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.

대상.이벤트가 일어나는지 안일어나는지 확인하는 함수
*/



//tab-content 내 div 안보이도록

const tabMenu = document.querySelectorAll('.tabMenu a'); //a가 배열로 3개가 있음
    



/*
tabMenu를 클릭하면 할일
모든 tabContent를 보이지 않도록 한다.

속성의 값을 반환
대상.getAttribute('속성명')    // href id class title data-link 

*/

tabMenu.forEach((item,index)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    
    for(let m of tabMenu){  // 탭메뉴안에 있는걸 m으로 받음  
      m.classList.remove('active');  //다뺴고 클릭한 그요소한테만 클래스를 추가한다
    }
    e.target.classList.add('active');

    // for(let tc of slides){
    //   tc.classList.remove('active'); // 뭘보고있든 간에 tabContent 0 1 2번째 클래스명 active를 제거한다.
    // }
    let target = item.getAttribute('href').replace('#','');

    console.log(target);
    makeSlide(target);
  })
})

function makeSlide(target){
  console.log(target);
  let tablist =[];
  fetch('data/room.json')
  .then(res=>{
    return res.json()
  })
  .then(result=>{
    tablist = result;
    makeList(tablist);
  });

  function makeList(tablist){
    console.log(tablist);
    console.log(tablist[target]);

    let targetArr = tablist[target];

    let tabListHtml = '';
    targetArr.forEach(function(element){      
      tabListHtml += `
                <li class="tabset active">
                  <div class="slidebox">
                    <div class="smallcenter">
                      <a href="#none">
                        <img src=${element.img}>
                        <div class="bg">
                          <h2>${element.title}</h2>
                          <p>${element.p}</p>
                          <p>${element.p2}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                
                 `;
                    
    });
    
    slideContainer.innerHTML = tabListHtml;
    $(".slides").bxSlider({
      minSlides:2,
      maxSlides:3,
      slideWidth:300,
      moveSlide:1,
      pager:false,
      slideMargin:20,
      speed:200
    
    });
    
  }
}
makeSlide('deluxe');



