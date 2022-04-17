function random225() {
    return Math.floor(Math.random() * 225 + 1);
}
function myColor() {
    return ('rgb(' + random225() + ', ' + random225() + ', ' + random225()+')')
}

const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const thisColor = myColor();
    document.body.style.backgroundColor = thisColor
    document.querySelector(".color").innerText = thisColor 
})