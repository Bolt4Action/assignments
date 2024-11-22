//Dynamic Progress Bars based on percentage

let progressBars = document.querySelectorAll('.progress-bar');
let progressPercentages = document.querySelectorAll('.progress-percentage');
let progressValues = [];

for (let i = 0; i < progressBars.length; i++) {
    progressValues[i] = progressPercentages[i].innerHTML;
    progressBars[i].style.width = progressValues[i];
}


//Dynamic Navbar
let navBar = document.querySelector('nav');
let sections = document.querySelectorAll('section');
let activeSection;
let sectionTops = [];
window.addEventListener("scroll", () => {
    sectionTops = [];
    for (let i = 0; i < sections.length; i++) {
        sectionTops.push(sections[i].getBoundingClientRect().top)
    }
    for (let i = 0; i < sectionTops.length; i++) {

        if (sectionTops[i] <= 100) {
            activeSection = i;
        }
    }
    if (activeSection !== 0) {
       navBar.classList.add("bg-body-tertiary");
       navBar.classList.remove("navbar-dark");
    }
    else {
        navBar.classList.remove("bg-body-tertiary");
        navBar.classList.add("navbar-dark");
    }
})
