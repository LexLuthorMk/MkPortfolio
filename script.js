const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".nav-bar"); 

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})
document.addEventListener("scroll", ()=>{
    const scroll_positon = window.scrollY;
    if(scroll_positon > 70){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
})
navLinks.addEventListener("click", (e)=>{
    if(e.target.matches("a")){
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }
})
//fix styles such that the nav tab closes when a link is clicked