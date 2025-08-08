// Carousel Image
const carousel = document.querySelector(".carousel");

const dragging = (e) => {
  carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousemove", dragging);

// Scroll Trigger Navbar
var x = window.matchMedia("(max-width: 0px)");
x.addListener(scrollFunction); // Attach listener function on state changes
window.onscroll = function () {
  scrollFunction(x);
};

function scrollFunction(x) {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80 ||
    x.matches
  ) {
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("navbar").style.background = "";
    document.getElementById("menu").style.background = "";
    document.getElementById("navbar").style.transition = "0.5s";
    document.getElementById("menu").style.transition = "0.5s";
  } else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("menu").style.background = "transparent";
    document.getElementById("navbar").style.transition = "0.5s";
  }
}

// Hamburger Button
const btnHamburger = document.getElementById("menu-btn");

const menu = document.getElementById("menu");
const updown = document.getElementById("updown");

btnHamburger.addEventListener("click", navToggle);

function navToggle() {
  btnHamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  updown.classList.toggle("pt-80");
}

// // Carousel
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel__nav">
        ${buttonsHtml.join("")}
    </div>
`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

// Scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // var revealpoint = 150;
    if (revealtop < windowheight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// OPEN PAGE
const overlay = document.getElementById("overlay");
const bodyInvitation = document.getElementById("body-invitation");
const btnOpen = document.getElementById("open-invitation");
btnOpen.addEventListener("click", openPage);

function openPage() {
  overlay.classList.add("animate-openInvitation");
  bodyInvitation.classList.remove("hidden");
  btnOpen.remove();
}
