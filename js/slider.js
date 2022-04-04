
//#subVisual - 슬라이더 적용
const wrap = document.querySelector("#subVisual .wrap_2");
const slider = wrap.querySelector(".slider");
const panel = wrap.querySelector(".panel");
const prev = wrap.querySelector('.prev');
const next = wrap.querySelector('.next');
let enableClick = true;
const lastEl = panel.lastElementChild;

panel.prepend(lastEl);

next.addEventListener("click", e=>{
    e.preventDefault();
    
    const firstEl = panel.firstElementChild;

    if (enableClick) {
        enableClick = false;
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
});


prev.addEventListener("click", e=>{
    e.preventDefault();

    const lastEl = panel.lastElementChild;

    if (enableClick) {
        enableClick = false;
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
});
