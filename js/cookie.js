 const isCookie = document.cookie.indexOf("today=done");
console.log(isCookie);

if(isCookie == -1){ 
    popUp.style.display = "block" 
}else{
    popUp.style.display = "none";
    aside.style.display = "none";
    popUp.style.display = "none";
    body_i.style.overflow = "visible";
}

btnClose.addEventListener("click",e=>{
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

    let isChecked = popUp.querySelector("input[type=checkbox]").checked;
    if(isChecked) setCookie("today","done",7);
})

function setCookie(name,val,due){
    const today = new Date();
    const day = today.getDate();
    today.setDate(day+due);
    const duedate = today.toGMTString();
    document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}