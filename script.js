const toggleButton = document.getElementById("menu_block");
const toggleButton1 = document.getElementById("cross_button");
const navbar_items = document.getElementById("navbar_items");

toggleButton.addEventListener("click", () => {
    navbar_items.classList.toggle("active");
}
)

toggleButton1.addEventListener("click", () => {
    navbar_items.classList.toggle("active");
}
)

