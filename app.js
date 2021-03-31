const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const inventoryMenu = document.querySelector("#inventory-menu");
const inventory = document.querySelector("#inventory-toggle")

menu.addEventListener("click", () => {
   menu.classList.toggle("is-active");
   menuLinks.classList.toggle("active");
})

inventory.addEventListener("click", () => {
   inventory.classList.toggle("inv-is-active");
   inventoryMenu.classList.toggle("inv-active");
})