const navbar = document.querySelector(".navbar");
const navbaroffset = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents =[80,50,75,70,50,60];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () =>{
    // Sticky navbar if/else statement 
    if(window.scrollY >= navbaroffset){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }

    // Navabr color change 
    sections.forEach((section, i) => {
        if(window.scrollY >= section.offsetTop -10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change");
        }
    });

    // Progress bar text content changer  
    if(window.scrollY + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll(".progress-percent").forEach((current, i) =>{
            current.style.width = `${progressBarPercents[i]}%`;
            current.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        })
    }
}

mainFn();

window.addEventListener("resize",() =>{
    window.location.reload();
});