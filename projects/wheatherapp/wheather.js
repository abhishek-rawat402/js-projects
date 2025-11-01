let p = document.createElement("div")
p.innerHTML = "<h1>hello guys </h1>";
document.body.appendChild(p);

document.getElementById("st").addEventListener('click',function(){
    document.getElementById("st").appendChild(p);
})
