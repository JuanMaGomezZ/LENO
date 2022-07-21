/* Burger Menu */
let burgerIcon = document.querySelector("#burger-icon");
let burgerMenu = document.querySelector("#burger-menu");
let crossIcon = document.querySelector("#cross-icon");


/* Open Menu*/
burgerIcon.onclick = () => {
  burgerMenu.classList.add("active");
  burgerIcon.classList.add("hide");
  crossIcon.classList.add("active");
};
/* Close Menu */
crossIcon.onclick = () => {
  burgerMenu.classList.remove("active");
  crossIcon.classList.remove("active");
  burgerIcon.classList.remove("hide");
};