let quote = document.getElementById("quote");

let generate = document.getElementById("generate");

window.onload = aa = async ()=>{
 const response = await fetch("https://thequoteshub.com/api/")
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.text;
}





generate.addEventListener("click" , async ()=>{
try{
    const response = await fetch("https://thequoteshub.com/api/")
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.text;
}
catch(error){
    console.error(`failed to catch quotes ${error}`);
    
}

})
