//#subVisual - 슬라이더 적용
const wrap = document.querySelector("#subVisual .wrap_2");
const slider = wrap.querySelector(".slider");
const panel = wrap.querySelector(".panel");
const prev = wrap.querySelector(".prev");
const next = wrap.querySelector(".next");
let enableClick = true;
const lastEl = panel.lastElementChild;

panel.prepend(lastEl);

next.addEventListener("click", e=>{
    e.preventDefault();
    if (enableClick) {
        enableClick = false;
        nextBtn();
    }
});

prev.addEventListener("click", e=>{
    e.preventDefault();
    if (enableClick) {
        prevBtn();
        enableClick = false;
    }
});


function nextBtn(){
    const firstEl = panel.firstElementChild;
    panel.style.marginLeft = "-100%";
    new Anim(panel, {
        prop: "margin-left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            panel.append(firstEl);
            panel.style.marginLeft = "-100%";
            enableClick = true;
        },
    });
}

function prevBtn(){
    const lastEl = panel.lastElementChild;
    panel.style.marginLeft = "-100%";
    new Anim(panel, {
        prop: "margin-left",
        value: "0%",
        duration: 1000,
        callback: () => {
            panel.prepend(lastEl);
            panel.style.marginLeft = "-100%";
            enableClick = true;
        },
    });
}