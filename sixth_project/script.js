const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i <6 ;i++) 
    {
        color += hex[Math.floor((Math.random() * 16))]
    }
    return color
};
let interValId;
const startchangingColor = () =>{
  
    if (!interValId) {
        interValId =   setInterval(changeBgcolor , 1000)
    }
  
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();

    }
}
const stopchangingColor = () =>{
    clearInterval(interValId)
    interValId = null;
}
document.querySelector("#start").addEventListener('click',
    startchangingColor)
document.querySelector("#stop").addEventListener('click',
    stopchangingColor)
    