const tab = document.querySelector("#tab");
const dts = tab.querySelectorAll("dt");
const dds = tab.querySelectorAll("dd");
const dts_a = tab.querySelectorAll("dt>a");

dts_a.forEach((el,index)=>{
    el.addEventListener("focusin",()=>{
        activation(dts,index);
        activation(dds,index);
    })
})

dts.forEach((el,index)=>{
    el.addEventListener("click",e=>{
        e.preventDefault();

        let isOn = e.currentTarget.classList.contains("on");
        if(isOn) return;

        activation(dts,index);
        activation(dds,index);
    })
})

function activation(items,index){
    for(let el of items){
        el.classList.remove("on");
        items[index].classList.add("on");
    }
}