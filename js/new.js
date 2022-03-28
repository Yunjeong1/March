//isotope 적용
window.addEventListener("load", ()=>{
    const grid = new Isotope(".wrap", { //배치할 요소의 부모요소명
        itemSelector : "article", //배치할 요소명
        columnWidth: "article", //너비값의 기준이 될 요소나 클래스명
        transitionDuration: "0.8s" //화면 재배치시 요소의 움직임 속도
    })
  
    //sort버튼 변수에 저장
    const btns = document.querySelectorAll(".new .inner ul li");
  
    for(let el of btns){
        
    //sort버튼 클릭했을때
    el.addEventListener("click", e=>{
        
        e.preventDefault();
  
        
        //클릭한 sort버튼의 자식인 a의 href값 구해서 저장
        const sort = e.currentTarget.querySelector("a").getAttribute("href");
  
        //sort값에 따라 필터링 및 재배치
        grid.arrange({
            filter:sort
        });
  
        //모든 버튼 활성화
        for(let el of btns){
            el.classList.remove("on");
        }
        e.currentTarget.classList.add("on");
    })
   }
  })