const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");

menu.onclick = function () {
  hideMenu.classList.toggle("hide");
};
