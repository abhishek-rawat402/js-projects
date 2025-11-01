let c = document.querySelector("#clock");
let d = document.querySelector('#date');



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    c.innerHTML = date.toLocaleTimeString();
    d.innerHTML = date.toLocaleDateString();
},1000)