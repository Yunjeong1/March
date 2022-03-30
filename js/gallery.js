const body = document.querySelector(".body_g");
const frame = body.querySelector(".sec");
const g_header = body.querySelector("#header_sub");
const input = body.querySelector("#search");
const btnSearch = body.querySelector(".btnSearch");
const loading = body.querySelector(".loading");
const base = "https://www.flickr.com/services/rest/?";
const method_people = "flickr.people.getPhotos";
const method_search = "flickr.photos.search";
const username = "195294341@N02";
const key = "24d03e5e0bfb87d434ce0c70071a6ff9";
const per_page = 25; 
const url = `${base}method=${method_people}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}`;


callData(url);

btnSearch.addEventListener("click",e=>{
    let tag = input.value;

    const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;

    callData(url);
})

input.addEventListener("keyup",e=>{
    if(e.key === "Enter"){
        let tag = input.value;

        const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;

        callData(url);
    }
})

function callData(url){
    frame.classList.remove("on");
    loading.classList.remove("off");

    fetch(url)
    .then(data=>{
        return data.json();
    })
    .then(json=>{
        const items = json.photos.photo;
        createList(items);
        imgLoaded();
    })
}

function createList(items){
    let htmls = "";
    items.forEach(data=>{
        htmls += `
            <article class="item">
                <div>
                    <a class="pic" href="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                        <img src="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                    </a> 
                    <div class="text">
                        <p>${data.title}</p>
                        <span>by ${data.owner}</span>
                     </div>
                </div>
            </article>
        `
    })
    frame.innerHTML = htmls;
}

function imgLoaded(){
    const thumbs = document.querySelectorAll(".pic img");
    const len = thumbs.length;
    let count = 0;

    thumbs.forEach(thumb=>{
        thumb.onerror=()=>{
            img.setAttribute("src","img/banner3.jpg");
        }
        thumb.onload=()=>{
            count++;
            if(count === len){
                new Isotope(frame,{
                    itemSelector: ".item",
                    columnWidth: ".item",
                    transitionDuration: "0.8s"
                })
                frame.classList.add("on");
                loading.classList.add("off");
            }
        }
    })
}

frame.addEventListener("click",e=>{
    e.preventDefault();

    let target = e.target.closest(".item").querySelector(".pic img");

    if(target == e.target){
        let imgSrc = target.parentElement.getAttribute("href");
        let pop = document.createElement("aside");
        pop.classList.add("pop");
        let pops = `
                <div class="con">
                    <img src="${imgSrc}">
                </div>
                <span class="popClose"><img src="img/close.png"></span>
        `
        pop.innerHTML = pops;
        body.append(pop);
        body.style.overflow = "hidden";
        g_header.style.display = "none";
    }
})

frame.addEventListener("click",e=>{
    e.preventDefault();

    let pop = body.querySelector(".pop");
    if(pop){
        let close = pop.querySelector(".popClose img");
        if(e.target == close){
            pop.remove();
            body.style.overflow = "auto";
            g_header.style.display = "block";
        }
    }
})