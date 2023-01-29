const dropdown = document.querySelector(".dropdown");
const dropdown_cl = document.querySelector(".dropdown_cl");

const dropdown__menu = document.querySelector(".dropdown__menu");
const dropdownMenuC = document.querySelector(".dropdownMenuC");

const var_text = document.querySelector(".promo__var");
const mapText = ["Whoever.", "Whenever.", "Wherever."];
let value_html = 1

setInterval(() => {
  var_text.innerHTML = mapText[value_html]
  if (value_html == 2) {
    value_html = 0
  } else {
    value_html++
  }
}, 1500)

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
