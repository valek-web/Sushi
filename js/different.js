/* addBorderHeader */

let scrollpos = window.scrollY;

const header = document.querySelector(".header");
const scrollChange = 54;

const add_class_on_scroll = () => header.classList.add("header-border");
const addColor = () => header.classList.add("header-scroll");
const remove_class_on_scroll = () => header.classList.remove("header-border");
const removeColor = () => header.classList.remove("header-scroll");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
    addColor();
  } else {
    remove_class_on_scroll();
    removeColor();
  }
});

/* dropdownLogo */

const dropdown = document.querySelector(".dropdown");
const dropdown_cl = document.querySelector(".dropdown_cl");

dropdown.addEventListener("click", () => {
  dropdown_cl.classList.add("dropdown_cl__active");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown")) {
    let dropdowns = document.getElementsByClassName("dropdown_cl");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("dropdown_cl__active")) {
        openDropdown.classList.remove("dropdown_cl__active");
      }
    }
  }
});