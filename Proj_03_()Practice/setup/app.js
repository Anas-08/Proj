

const reviews = [
  {
    id: 1,
    name: "Anas",
    job: "web developer",
    img: "/Administrator-icon.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quis beatae voluptatem ducimus sint autem rerum maxime nesciunt omnis facilis? Dolorem debitis provident explicabo iusto.",
  },
  {
    id: 2,
    name: "Khan",
    job: "web designer",
    img: "/Administrator-icon.png",
    text: "Lorem ipsum consectetur adipisicing elit. Nulla quis beatae voluptatem ducimus sint autem rerum maxime nesciunt omnis facilis? Dolorem debitis provident explicabo iusto.",
  },
  {
    id: 3,
    name: "Aamir",
    job: "devOps",
    img: "/Administrator-icon.png",
    text: "Lor Nulla quis beatae voluptatem ducimus sint autem rerum maxime nesciunt omnis facilis? Dolorem debitis provident explicabo iusto.",
  },
  {
    id: 4,
    name: "salman",
    job: "actor",
    img: "/Administrator-icon.png",
    text: "Lor Nulla quis beatae voluptatem ducimus sint autem rerum maxime nesciunt omnis facilis? Dolorem debitis provident explicabo iust Lor Nulla quis beatae voluptatem ducimus sint autem rerum maxime nesciunt omnis facilis? Dolorem debitis provident explicabo iusto."
  },
];


const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector(".info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {

  // img.src = reviews[0].img;
  showPerson(currentItem);

})

nextBtn.addEventListener('click', () => {

  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;

  }
  showPerson();


});


prevBtn.addEventListener('click', () => {

  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;

  }
  showPerson();


});


randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  // console.log(currentItem);
  showPerson();
});

function showPerson() {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;

}


