const form = document.querySelector("#join");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click",e=>{
    if(!isTxt("userid",5)) e.preventDefault();
    if(!isTxt("comments",30)) e.preventDefault();
    if(!isEmail("email",10)) e.preventDefault();
    if(!isCheck("interest")) e.preventDefault();
    if(!isCheck("gender")) e.preventDefault();
    if(!isCheck_agree("agree")) e.preventDefault();
    if(!isPwd("pwd1","pwd2",8)) e.preventDefault();
    if(!isSelect("path")) e.preventDefault();
})

function isTxt(name,len){
    const input = form.querySelector(`[name=${name}]`);
    const txt = input.value.trim();

    if(txt.length >=len){
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();
        return true;
    }else{
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`${len}글자 이상 입력하세요`);
        input.closest("td").append(errMsg);
        return false;
    }
}

function isEmail(name,len){
    const input = form.querySelector(`[name=${name}]`);
    const txt = input.value;

    if(txt.length >=len && /@/.test(txt)){
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
    const isChecked = false;

    for(let input of inputs){
        if(input.checked) isChecked = true;
    }

    if(isChecked){
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length >0) inputs[0].closest("td").querySelector("p").remove();

        return true;
    }else{
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length >0) inputs[0].closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`필수입력 항목을 선택하세요`);
        inputs[0].closest("td").append(errMsg);
        return false;
    }
}

function isCheck_agree(name){
    const input = form.querySelector(`[name=${name}]`);
    const isChecked = false;

    if(input.checked) isChecked = true;

    if(isChecked){
        const errMsgs = input.closest("div").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("div").querySelector("p").remove();

        return true;
    }else{
        const errMsgs = input.closest("div").querySelectorAll("p");
        if(errMsgs.length >0) input.closest("div").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`약관에 동의해주세요`);
        input.closest("div").append(errMsg);
        return false;
    }
}

function isPwd(name1,name2,len){
    const pwd1 = form.querySelector(`[name=${name1}]`);
    const pwd2 = form.querySelector(`[name=${name2}]`);
    const pwd1_val = pwd1.value;
    const pwd2_val = pwd2.value;

    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[!@#$%^&*()<>_+]/;

    if(pwd1_val === pwd2_val && pwd1_val.length >=len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){
        const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
        if(errMsgs.length >0 ) pwd1.closest("td").querySelector("p").remove(); 

        return true;
    }else{
        const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
        if(errMsgs.length >0 ) pwd1.closest("td").querySelector("p").remove(); 

        const errMsg = document.createElement("p"); 
        errMsg.append(`비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 모두 포함하여 동일하게 입력하세요`); 
        pwd1.closest("td").append(errMsg); 
        return false;
    }
}

function isSelect(name){
    const sel = form.querySelector(`[name=${name}]`);
    const sel_index = sel.options.selectedIndex;
    const val = sel.options[sel_index].value;
    if(val !== ""){
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) sel.closest("td").querySelector("p").remove();
        return true;
    }else{
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) sel.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("필수입력 항목을 선택하세요");
        sel.closest("td").append(errMsg);
        return false;
    }
}