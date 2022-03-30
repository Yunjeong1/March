//#green - swiper 적용
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    350: {  //350 이상일 경우
      slidesPerView: 2, //레이아웃 2열
    },
    540: {
      slidesPerView: 3, 
    },
    1180: {
      slidesPerView: 4,
    },
  }
});


//news의 view more 버튼 클릭시
const body_i = document.querySelector(".body_i");
const news = body_i.querySelector("#news");
const btnOpen = body_i.querySelectorAll(".btnOpen");
const aside = body_i.querySelector(".aside_index");
const popUp = aside.querySelector(".popUp"); 
const inner = popUp.querySelector(".inner");
const _top = popUp.querySelector(".top"); 
const _right = popUp.querySelector(".right"); 
const _bottom = popUp.querySelector(".bottom"); 
const _left = popUp.querySelector(".left"); 
const speed = 500;
const btnClose = popUp.querySelector(".close");

window.onload = active();

//view more 버튼 클릭시
for(let i=0; i<2; i++){
  btnOpen[i].addEventListener("click", e=>{
    e.preventDefault();
    active();
  })
}

btnClose.addEventListener("click", e=>{
  e.preventDefault();
  body_i.style.overflow = "visible";

  new Anime(inner,{
    prop:"opacity", 
    value:0, 
    duration:speed, 
    callback:()=>{
        new Anime(_top,{
            prop:"width", 
            value:0, 
            duration:speed
        });
        new Anime(_right,{
            prop:"height", 
            value:0, 
            duration:speed
        })
        new Anime(_bottom,{
            prop:"width", 
            value:0, 
            duration:speed
        })
        new Anime(_left,{
            prop:"height", 
            value:0, 
            duration:speed,
            callback :()=>{
              aside.style.display = "none";
              popUp.style.display = "none";
            }
        })
      }
    })
  })

  function active(){
    aside.style.display = "block";
    popUp.style.display = "block";
    body_i.style.overflow = "hidden";

    new Anime(_top,{
      prop: "width",
      value: "100%",
      duration: speed,
      callback:()=>{
        new Anime(_right,{
          prop: "height", 
          value :"100%", 
          duration: speed, 
          callback :()=>{
              new Anime(_bottom,{
                  prop:"width", 
                  value:"100%", 
                  duration:speed, 
                  callback:()=>{
                      new Anime(_left, {
                          prop:"height", 
                          value:"100%", 
                          duration:speed, 
                          callback :()=>{
                              new Anime(inner,{
                                  prop:"opacity",
                                  value:1, 
                                  duration:speed
                              })
                          }
                      })
                  }
              })
            }
         })
       }
    })
  }