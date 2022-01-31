const navbar = document.querySelector("navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY >= navbar.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});