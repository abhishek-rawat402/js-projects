# Project
## link
[Click here]()

js

// let a=document.querySelector("form")

// a.addEventListener('submit',function (e){
//     e.preventDefault
// })

// let a = document.getElementById("weight");
// let b = document.getElementById("height");
     
// let c = a.value;

let a = document.querySelector('form')

a.addEventListener("submit",function(e){
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value);
     let weight =parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height) ){
    result.innerText = "pls give a valid height"
}
   else if(weight === '' || weight < 0 || isNaN(weight) ){
    result.innerText = "pls give a valid height"
}
    else{
        let z  = (weight/((height*height)/10000).toFixed(2)) ; 
        result.innerHTML= z; 
    }
})


