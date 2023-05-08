const colors = ["green", "red", "white", "peach", "blue", "lightblue", "yellow", "yellowgreen", "orange", "purple", "brown", "pink", "gray"];



//  select btn
const btn = document.querySelector('#btn');

//  select color text
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    // console.log("Clicked on Button");
    const randomNumber = getrandomNumber();
    console.log(getrandomNumber());

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}