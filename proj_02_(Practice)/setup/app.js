


//  initial value of count is 0
let count = 0;

// select value

const value = document.querySelector("#value");
console.log(value);

const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach((button) => {
    console.log(button);

    button.addEventListener('click', () => {
        const style = button.classList;
        console.log(style);

        if (style.contains("decrease")) {
            count--;
        }
        else if (style.contains("increase")) {
            count++;
        }
        else {
            count = 0;

        }


        if (count > 0) {
            value.style.color = "green";

        }
        if (count < 0) {
            value.style.color = "red";

        }

        if (count === 0) {
            value.style.color = "black";

        }

        value.textContent = count;


    });


});

