let keys =document.querySelector(".keys");
// let button = document.querySelectorAll("button")
// console.log(button)

playsound = (id) =>{
    let audio= document.getElementById(id);
    if(audio)
        audio.currentTime = 0;
        audio.play();
    
}

// soundplayer = (d)=>{
//     let audio= document.getElementsByClassName(d);
//     if(audio){
//         audio.currentTime = 0;
//         audio.play();
//     }
// else {
//         console.error(`Audio element with id "${id}" not found`);
//     }
// }

document.addEventListener("keydown",function(e){
    let a = e.key;
    switch(a){
        case "a" : playsound("soundA");
        break;
        case "b" : playsound("soundB");
        break;
        case "s" : playsound("soundS");
        break;
        case "k" : playsound("soundK");
        break;
        case "l" : playsound("soundL");
        break;
        case "n" : playsound("soundN");
        break;
    }
})

document.addEventListener("keydown",function(e){
    let a = e.key;
    switch(a){
        case "A" : playsound("soundA");
        break;
        case "B" : playsound("soundB");
        break;
        case "S" : playsound("soundS");
        break;
        case "K" : playsound("soundK");
        break;
        case "L" : playsound("soundL");
        break;
        case "N" : playsound("soundN");
        break;
    }
})



// button.forEach((btn,) => {
//     btn.addEventListener("click",(e)=>{
//         let soundid = btn.id;
//         console.log(soundid)
//         soundplayer(soundid)
//     });
// });
