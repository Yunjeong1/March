/*
- form validation 유효성 검사

만약 input에 값을 입력하지 않거나, 또는 조건을 만족하지 않는다면 
id, password, select, checkbox, radio, email, textarea
submit 버튼을 클릭했을때 e.preventDefault로 페이지 이동 방지
*/

const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click",e=>{

    //함수의 결과값이 false라면 페이지 이동 금지
    if(!isTxt("userid",5)) e.preventDefault();
    if(!isTxt("comments",20)) e.preventDefault();
    if(!isEmail("email",5)) e.preventDefault();
    if(!isCheck("hobby")) e.preventDefault();
    if(!isCheck("gender")) e.preventDefault();
    if(!isSelect("edu")) e.preventDefault();
    if(!isPwd("pwd1","pwd2",5)) e.preventDefault();
})

function isTxt(name,len){
    //인풋요소를 변수로 담아서
    const input = form.querySelector(`[name=${name}]`);
    //인풋요소에 사용자가 입력한 value값을 변수로 저장
    const txt = input.value.trim(); //공백을 제외한 value값을 저장(스페이스바는 텍스트로 인식하지 않도록)

    //사용자가 입력한 value값의 길이가 len개 이상이라면
    if(txt.length >= len){
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();
        //리턴으로 true 전달
        return true;
    //조건을 만족하지 않는다면
    }else{
        //기존에 있는 에러메시지를 찾아서 있다면 제거하고
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        //에러메시지를 새로 생성해서 삽입
        const errMsg = document.createElement("p");
        errMsg.append(`텍스트를 ${len}글자 이상 입력하세요`);
        input.closest("td").append(errMsg);
        //리턴으로 false 전달
        return false;
    }
}

/*
/문자/.test() - 슬래쉬 안에 있는 문자가 포함되어있는지 찾아줌 (주어진 문자열이 정규 표현식을 만족하는지 판별해서 true/false 반환)
 - 정규표현식: 문자열에서 특정 문자를 찾기 위한 패턴. /찾고싶은문자열/
*/

function isEmail(name,len){
    const input = form.querySelector(`[name=${name}]`);
    const txt = input.value;

    if(txt.length >= len && /@/.test(txt)){
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();

        return true;

    }else{
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`@를 포함한 전체 이메일 주소를 ${len}글자 이상 입력하세요`);
        input.closest("td").append(errMsg);

        return false;
    }
}

function isCheck(name){
    const inputs = form.querySelectorAll(`[name=${name}]`);
    let isChecked = false;

    //input의 개수만큼 반복을 돌면서 체크가 하나라도 되어있다면 isChecked를 true로 바꿈(그게 아니라면 계속 false)
    for(let input of inputs){
        if(input.checked) isChecked =true;
    }

    if(isChecked){
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove();

        return true;
    }else{
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("필수입력 항목을 한개 이상 체크해주세요");
        inputs[0].closest("td").append(errMsg);
        return false;
    }
}

function isSelect(name){
    const sel = form.querySelector(`[name=${name}]`);
    const sel_index = sel.options.selectedIndex; //.selectedIndex - 선택한 option의 순서값(0,1,2,3)
    const val = sel.options[sel_index].value; //선택한 순번option 의 value값 저장

    if(val !==""){
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) sel.closest("td").querySelector("p").remove();

        return true;
    }else{
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) sel.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("항목을 선택해주세요");
        sel.closest("td").append(errMsg);
        return false;
    }
}

//password 인증함수
function isPwd(name1, name2, len){
    const pwd1 = form.querySelector(`[name=${name1}]`); 
    const pwd2 = form.querySelector(`[name=${name2}]`); 
    const pwd1_val = pwd1.value; 
    const pwd2_val = pwd2.value; 

    //숫자,문자,특수문자조건을 정규표현식으로 미리 저장 
    const num = /[0-9]/; 
    const eng = /[a-zA-Z]/;
    const spc = /[!@#$%^&*()_+\[\]<>]/;

//두 개의 비번이 같고, 비번에 숫자, 문자, 특수문자를 모두 포함하고 len개이상의 글자수라면  
    if(pwd1_val === pwd2_val && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val) && pwd1_val.length > len){
        const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
        if(errMsgs.length >0 ) pwd1.closest("td").querySelector("p").remove(); 

        return true; 
    }else{
        const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
        if(errMsgs.length >0 ) pwd1.closest("td").querySelector("p").remove(); 

        const errMsg = document.createElement("p"); 
        errMsg.append(`비밀번호는 ${len}글자 이상, 영문,숫자, 특수문자를 모두 포함하여 동일하게 입력하세요`); 
        pwd1.closest("td").append(errMsg); 

        return false; 
    }
}