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
  "https://images.pexels.com/photos/13737042/pexels-photo-13737042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",

  "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/175711/pexels-photo-175711.jpeg?auto=compress&cs=tinysrgb&w=600",
];
// console.log(slideArr.length);
let index = 0;

nextBtn.addEventListener("click", NextSlide);

function NextSlide(e) {
  console.log(e);
  index = index + 1;
  if (index > slideArr.length - 1) {
    return (index = 0);
  }
  return (imageDOM.src = `${slideArr[index]}`);
}

prevBtn.addEventListener("click", PrevSlide);
function PrevSlide() {
  index = index - 1;
  if (index < 0) {
    return (index = slideArr.length - 1);
  }
  return (imageDOM.src = `${slideArr[index]}`);
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
