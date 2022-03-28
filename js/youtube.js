const body = document.querySelector("#body_y");
const section = body.querySelector(".youtube");
const inner = body.querySelector(".youtube .inner");
const key = "AIzaSyB81cXmxoWdzbYs8QZUlN_LQskZFT_Xqoo";
const playListId = "PLMaY0ixOiylihI8kTPQ8Ow3zwbjEcQtBr";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    let items = json.items;
    console.log(items);

    let result = '';
    items.forEach(item=>{
        let title = item.snippet.title;
        let descrip = item.snippet.description;
        if(title.length > 40) title = title.substr(0,40)+"...";

        let date = item.snippet.publishedAt.split("T")[0];

        result += `
            <article>
                <a href="#" class="btn" data-vid="${item.snippet.resourceId.videoId}">
                    <img src="${item.snippet.thumbnails.maxres.url}">
                </a>
                <div class="con">
                    <h2 data-vid="${item.snippet.resourceId.videoId}">${title}</h2>
                    <p>${date}</p>
                </div>
            </article>
        `
    })
    inner.innerHTML = result;
})

section.addEventListener("click",e=> createPop(e));
body.addEventListener("click",e=> removePop(e));

function createPop(e){
    e.preventDefault();
    
    //main태그에 a태그가 없어서 생기는 문제 해결
    //a요소의 data-vid값을 받아야하므로
    //클릭한 요소의 부모태그가 a태그가 아니라면 중지
    if(!e.target.closest("a")) return;
    
    const vidId = e.target.closest("a").getAttribute("data-vid"); 

    let pop = document.createElement("aside");
    pop.setAttribute("id","aside_y");
    pop.innerHTML = `
                    <iframe src="https://youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="btnClose"><img src="img/close.png"></span>
    `;  //iframe 주소는 유투브 동영상-퍼가기 클릭하면 나옴
    body.append(pop);
}

function removePop(e){
    const pop = body.querySelector("aside");
    if(pop == null) return;
    const close = pop.querySelector("span img");
    if(e.target == close) e.target.closest("aside").remove();
}
