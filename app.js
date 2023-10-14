let colors =["red", "blue", "grey", "green" , "pink", "grey"];
let clorName = document.querySelector("span");
function colorHandler(){
    const randomColor = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    colorName.textContent = colors[randomColor];
}