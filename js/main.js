//Swiper 적용
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

for(let i=0; i<8; i++){
  btnOpen[i].addEventListener("click", e=>{
    e.preventDefault();
    aside.style.display = "block";
    popUp.style.display = "block";
    body.style.overflow = "hidden";
    swiper.autoplay.stop();

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
  swiper.autoplay.start();
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


//Green영역 slider 적용
const slider = document.querySelector("#slider"); 
const ul = slider.querySelector("ul"); 
const lis = ul.querySelectorAll("li"); 
const len = lis.length; 
const prev = document.querySelector(".prev"); 
const next = document.querySelector(".next"); 
let enableClick = true; 


init();


next.addEventListener("click", e=>{
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        nextSlide();
    }  
});

prev.addEventListener("click", e=>{
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        prevSlide();
    }
    
}); 

function init(){
    ul.style.left = "-100%"; 
    ul.prepend(ul.lastElementChild); 
    ul.style.width = `${100 * len}%`;  
    lis.forEach((li)=>{ 
        li.style.width = `${100 / len}%`
    })
}

function prevSlide(){
    new Anim(ul,{
        prop:"left", 
        value :"0%", 
        duration:speed,
        callback :()=>{
            ul.prepend(ul.lastElementChild); 
            ul.style.left = "-100%"; 
            enableClick = true; 
        }
    })
}

function nextSlide(){
    new Anim(ul, {
        prop:"left", 
        value : "-200%", 
        duration: speed,
        callback :()=>{
            ul.append(ul.firstElementChild);
            ul.style.left = "-100%";  
            enableClick = true;              
        }
    })
}