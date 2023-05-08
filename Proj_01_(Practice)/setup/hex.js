let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// select button
const btn = document.querySelector('#btn');

//  select tect color
const color = document.querySelector('.color');


btn.addEventListener('click', () => {

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
        // console.log(hex[getRandomNumber()]);

    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});



function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}