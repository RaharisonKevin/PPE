document.addEventListener("DOMContentLoaded", () => {


const menuList = document.querySelectorAll("header nav ul li a");

for (let i = 0; i < menuList.length - 1; i++) {
  menuList[i].addEventListener("click", () => {
    for (let i = 0; i < menuList.length - 1; i++) {
      menuList[i].classList.remove("active");
      menuList[i].classList.add("remove");
    }
    menuList[i].classList.remove("remove");
    menuList[i].classList.add("active");
  });
}
});
