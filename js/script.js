/* toggleMenu */

const close_menu = document.querySelector(".close-menu");
const open_menu = document.querySelector(".open-menu");
const menu__wrapper = document.querySelector(".menu__wrapper");

open_menu.addEventListener("click", () => {
  menu__wrapper.classList.add("menu__wrapper-active");
});

close_menu.addEventListener("click", () => {
  menu__wrapper.classList.remove("menu__wrapper-active");
});

/* varText */

const var_text = document.querySelector(".promo__var");
const mapText = ["Whoever.", "Whenever.", "Wherever."];
let value_html = 1;

setInterval(() => {
  var_text.innerHTML = mapText[value_html];
  if (value_html == 2) {
    value_html = 0;
  } else {
    value_html++;
  }
}, 1500);


/* dropdownMenu */

const dropdown__menu = document.querySelector(".dropdown__menu");
const dropdownMenuC = document.querySelector(".dropdownMenuC");

dropdown__menu.addEventListener("click", () => {
  dropdownMenuC.classList.add("dropdownMenuC__active");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown__menu")) {
    let dropdowns = document.getElementsByClassName("dropdownMenuC");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("dropdownMenuC__active")) {
        openDropdown.classList.remove("dropdownMenuC__active");
      }
    }
  }
});


