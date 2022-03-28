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