const colors = [
    "green" , "red", "rgb(133,122,200)", "#f15025" , "Blue", "Purple" , "rgb(150,150,150)"
];

const btn = document.getElementById("btn")
const color = document.querySelector('.color')

changeBackground=()=> {
    const randomNumber = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[randomNumber],
    color.textContent= colors[randomNumber];
}
btn.addEventListener("click", changeBackground)