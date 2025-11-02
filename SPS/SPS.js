choice = (choice)=>{
        
}

human = (HumanChoice)=>{
    computer(HumanChoice);
        if(HumanChoice === 0){
            
            document.getElementById("Val").innerHTML = "scissor"
        }
        else if(HumanChoice === 1){
            document.getElementById("Val").innerHTML = "rock"  
                  
        }
        else if(HumanChoice === 2){
            
            document.getElementById("Val").innerHTML = "paper"
        }
      
}

computer=(HumanChoice)=>{
   let a =  Math.floor(Math.random()*3);
    // choice(a);
    if(a === 0){
            document.getElementById("ComVal").innerHTML="scissor"
        }
        else if(a === 1){
             document.getElementById("ComVal").innerHTML="rock"
        }
        else if(a === 2){
             document.getElementById("ComVal").innerHTML="paper"
        }

// console.log(a)
// console.log(HumanChoice);


      if (a === HumanChoice ){
            document.getElementById("result").innerHTML="draw";
        }
        else if (a=== 0 && HumanChoice === 1) {
            document.getElementById("result").innerHTML="humanwin";
        }
         else if (a=== 1 && HumanChoice === 2) {
            document.getElementById("result").innerHTML="humanwin";
        }
         else if (a=== 2 && HumanChoice === 0) {
            document.getElementById("result").innerHTML="humanwin";
        }
         else if (a=== 1 && HumanChoice === 0) {
            document.getElementById("result").innerHTML="computerwin";
        }
         else if (a=== 2 && HumanChoice === 1) {
            document.getElementById("result").innerHTML="computerwin";
        }
         else if (a=== 0 && HumanChoice === 2) {
            document.getElementById("result").innerHTML="computerwin";
        }
        
}