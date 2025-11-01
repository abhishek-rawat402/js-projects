let keycode = document.querySelector("#keycode")
let cod = document.querySelector("#code");
let keyname = document.querySelector("#keyname");

document.addEventListener("keydown",(e)=>{
     keycode.innerText=`key :${e.key.charCodeAt(0)}`;
    cod.innerText= `${e.code}`;
    if(e.key === " "){
        keyname.innerHTML = `space`;
    }
    else{
    keyname.innerHTML = `${e.key}`
    }
})


