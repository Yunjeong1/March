const body = document.querySelector("body");
const main = document.querySelector(".youtube .inner");
const key = "AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo";
const playListId = "PLMaY0ixOiylihI8kTPQ8Ow3zwbjEcQtBr";
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

//데이터요청 url
fetch(url)
//응답받은 데이터
.then(data=>{
    return data.json(); 
})
//응답받은 후 로직
.then(json=>{
    let items = json.items;
    console.log(items);

    let result ="";
    items.forEach(item=>{
        let tit = item.snippet.title;
        let desc = item.snippet.description;
        if(tit.length >50) tit = tit.substr(0,50)+"..."; //substr(숫자,숫자) - 문자열 자르기(숫자-숫자까지만 보이게)
        if(desc.length >70) desc = desc.substr(0,150)+"...";

        let date = item.snippet.publishedAt.split("T")[0]; //.split("문자") - 문자를 기준으로 문자의 전후를 나눠서 배열로 받아옴 -> ['2022-03-28', '00:22:43Z']

        result += `
            <article>
                <a href="#" class="pic" data-vid="${item.snippet.resourceId.videoId}">
                    <img src="${item.snippet.thumbnails.high.url}">
                </a>
                <div class="con">
                    <h2 data-vid="${item.snippet.resourceId.videoId}">${tit}</h2>
                    <p>${desc}</p>
                    <span>${date}</span>
                </div>  
            </article>
        `;
    })
    main.innerHTML = result;
})

//썸네일 클릭시 이벤트 연결(이벤트 위임)
body.addEventListener("click",e=> createPop(e));

//close팝업 버튼 클릭 이벤트 위임
body.addEventListener("click",e=> removePop(e));


function createPop(e){
    e.preventDefault();
    
    //main태그에 a태그가 없어서 생기는 문제 해결
    //a요소의 data-vid값을 받아야하므로
    //클릭한 요소의 부모태그가 a태그가 아니라면 중지
    if(!e.target.closest("a")) return;
    
    const vidId = e.target.closest("a").getAttribute("data-vid"); 

    let pop = document.createElement("aside");
    pop.innerHTML = `
                    <iframe src="https://youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="btnClose">close</span>
    `;  //iframe 주소는 유투브 동영상-퍼가기 클릭하면 나옴
    body.append(pop);
}

function removePop(e){
    const pop = document.querySelector("aside");
    if(pop == null) return;
    const close = pop.querySelector("span");
    if(e.target == close) e.target.closest("aside").remove();
}