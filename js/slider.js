//#visual - slider
const slider = document.querySelector("#visual");
const prev = slider.querySelector(".prev");
const next = slider.querySelector(".next");
let enableClick = true;

init(slider);

prev.addEventListener("click",e=>{
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        prevSlide(slider);
    }
})
next.addEventListener("click",e=>{
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        nextSlide(slider);
    }
})

function init(frame){
    const ul = frame.querySelector("ul"); 
    const lis = ul.querySelectorAll("li"); 
    const len = lis.length; 

    ul.style.left = "-100%";
    ul.prepend(ul.lastElementChild);
    ul.style.width = `${100 * len}%`;
    lis.forEach((li)=>{
        li.style.width = `${100 / len}%`;
    })
}

function prevSlide(frame){
    const ul = frame.querySelector("ul");

    new Anim(ul,{
        prop:"left",
        value:"0",
        duration:speed,
        callback:()=>{
            ul.style.left = "-100%"
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}

function nextSlide(frame){
    const ul = frame.querySelector("ul");

    new Anim(ul,{
        prop:"left",
        value:"-200%",
        duration:speed,
        callback:()=>{
            ul.style.left = "-100%"
            ul.append(ul.firstElementChild);
            enableClick = true;
        }
    })
}