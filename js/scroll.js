const sections = document.querySelectorAll("section"); 
const ul = document.querySelector(".scroll_e"); 
const lis = ul.querySelectorAll("li");  
const lis_arr = Array.from(lis); //배열로 바꿔줌
let posArr = null; 
let base = -400;


//로딩시 세로위치값 구하기 
setPos(); 

//브라우저 리사이즈 했을때
window.addEventListener("resize", ()=>{
    setPos();     
});

//버튼 클릭이벤트 
lis.forEach((li,index)=>{

    li.addEventListener("click", e=>{
       
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn) return; 

        if(enableClick){
            enableClick = false; 
            moveScroll(index);         
        }       
    });
})

//스크롤 이벤트  
window.addEventListener("scroll",activation);


function setPos(){
    posArr = []; 
    for(let section of sections) posArr.push(section.offsetTop);    

    const active = ul.querySelector("li.on"); 
    const activeIndex = lis_arr.indexOf(active); 
    window.scroll(0, posArr[activeIndex]); 
}


function moveScroll(index){
   
    new Anime(window,{
        prop:"scroll", 
        value:posArr[index], 
        duration:500,
        callback : ()=>{
            enableClick = true; 
        }       
    });
          
}


function activation(){  
    let scroll = window.scrollY || window.pageYOffset; 

    sections.forEach((sec , index)=>{

        if(scroll >= posArr[index]+base){

            for(const li of lis) li.classList.remove("on"); 

            lis[index].classList.add("on");    

            for (const section of sections) section.classList.remove('on');

            sections[index].classList.add('on');        
        }
    });
}