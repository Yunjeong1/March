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

