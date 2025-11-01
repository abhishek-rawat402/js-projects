
let a =["green","red","yellow","blue"];

a.forEach(a =(color , i) => {
    document.getElementById(color).addEventListener('click',function () {
        console.log(i);
        document.body.style.background = document.body.style.background === color ? "white" : color ; 
    })
})
