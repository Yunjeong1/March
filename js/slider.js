// //#subVisual - slider
// const slider = document.querySelector('#slider');
// const panel = slider.querySelector('.panel');
// const prev = slider.querySelector('.prev');
// const next = slider.querySelector('.next');
// let enableClick = true;

// //처음 로딩시 제일 뒤의 슬라이드를 맨 앞으로 강제 이동
// const lastEl = panel.lastElementChild;
// panel.prepend(lastEl);

// //다음 버튼 클릭시
// next.addEventListener('click', (e) => {
//     e.preventDefault();

//     const firstEl = panel.firstElementChild;

//     //enableClick이 true면 모션실행
//     //enableClick이 false면 아무것도 실행하지 않음
//     if (enableClick) {
//         enableClick = false;
//         new Anim(panel, {
//             prop: 'margin-left',
//             value: '-200%',
//             duration: 1000,
//             callback: () => {
//                 panel.append(firstEl);
//                 panel.style.marginLeft = '-100%';
//                 enableClick = true;
//             },
//         });
//     }
// });

// //이전 버튼 클릭시
// prev.addEventListener('click', (e) => {
//     e.preventDefault();

//     const lastEl = panel.lastElementChild;

//     if (enableClick) {
//         enableClick = false;
//         new Anim(panel, {
//             prop: 'margin-left',
//             value: '0%',
//             duration: 1000,
//             callback: () => {
//                 panel.prepend(lastEl);
//                 panel.style.marginLeft = '-100%';
//                 enableClick = true;
//             },
//         });
//     }
// });