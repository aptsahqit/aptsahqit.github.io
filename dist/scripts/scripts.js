const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
let isMenubuttonClicked = false

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

// Click outside to close the menu.
document.addEventListener('click', function(event) {
    let isClickInside = menu.contains(event.target);
    let isClickBtn = btn.contains(event.target);
    let isVisible = visible(menu);
    // Is clicked outside and the menu is visible, hide the menu.
    if (!isClickInside && isVisible) {
        menu.classList.toggle("hidden");
    }
    if(isClickBtn && isVisible){
        menu.classList.toggle("hidden");
    }
}, true);

function visible(elm) {
    if(!elm.offsetHeight && !elm.offsetWidth) { return false; }
    if(getComputedStyle(elm).visibility === 'hidden') { return false; }
    return true;
}