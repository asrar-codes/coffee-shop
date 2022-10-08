import menu from "./data.js";

let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");
hamburger.addEventListener("click", show);

navLinks.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  // console.log(id);
  if (id) {
    links.forEach((link) => {
      link.classList.remove("nav-active");
      e.target.classList.add("nav-active");
    });
  }
});

// console.log(menu);

function show(e) {
  navLinks.classList.toggle("active");
}

// <<============= slider start >>==============>>

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imageDOM = document.querySelector("#image");
const menuDOM = document.querySelector(".menu-container");
// console.log(slideDOM);

const slideArr = [
  "/images//img1.jpg",
  "/images//img2.jpg",
  "/images//img3.jpg",
  "/images//img4.jpg",
  "/images//img5.jpg",
  "/images//img6.jpg",
  "/images//img8.jpg",
];
// console.log(slideArr.length);
let index = 0;
let interval;

nextBtn.addEventListener("click", NextSlide);

function NextSlide() {
  index++;
  if (index > slideArr.length - 1) {
    index = 0;
  }
  imageDOM.src = `${slideArr[index]}`;
}

prevBtn.addEventListener("click", PrevSlide);
function PrevSlide() {
  index--;
  if (index < 0) {
    return (index = slideArr.length - 1);
  }
  imageDOM.src = `${slideArr[index]}`;
}

// <<============= slider end >>==============>>
// <<============= Menu start >>==============>>

function displayMenu() {
  let html = menu
    .map((menuItem) => {
      const { img, title, price, desc } = menuItem;

      // console.log(img, title, price, desc);
      return `   <article class="menu">
      <div class="img-container">
        <img src=${img} alt=${title}>
      </div>
      <div class="menu-text">
        <div>

          <h3>${title}</h3>
          <h3>$${price}</h3>
        </div>
        <p>${desc}</p>
      </div>
    </article>`;
    })
    .join("");
  menuDOM.innerHTML = html;
}
displayMenu();
