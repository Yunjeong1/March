//#green - swiper 적용
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//햄버거메뉴 버튼 클릭시
  const btnCall = document.querySelector(".btnCall"); 
  const menuMo = document.querySelector(".menuMo"); 
  
  btnCall.onclick = function(e){
      //링크이동금지 
      e.preventDefault(); 
  
      //btnCall에 on이 있으면 제거, 없으면 추가 
      btnCall.classList.toggle("on"); 
      //menuMo에 on이 있으면 제거, 없으면 추가 
      menuMo.classList.toggle("on"); 
  }


//news의 view more 버튼 클릭시
const body = document.querySelector("body");
const news = document. querySelector("#news");
const btnOpen = document.querySelectorAll(".btnOpen");
console.log(btnOpen);
const aside = document.querySelector("aside");
const popUp = aside.querySelector(".popUp"); 
const inner = popUp.querySelector(".inner");
const _top = popUp.querySelector(".top"); 
const _right = popUp.querySelector(".right"); 
const _bottom = popUp.querySelector(".bottom"); 
const _left = popUp.querySelector(".left"); 
const speed = 500;
const btnClose = popUp.querySelector(".close");

for(let i=0; i<6; i++){
  btnOpen[i].addEventListener("click", e=>{
    e.preventDefault();
    aside.style.display = "block";
    popUp.style.display = "block";
    body.style.overflow = "hidden";

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
  })
}

btnClose.addEventListener("click", e=>{
  e.preventDefault();
  body.style.overflow = "visible";

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