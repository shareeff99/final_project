
window.addEventListener("scroll", headerChange, false);

// save element
var myHeader = document.querySelector("#myBody .navbar");
var myLogo = document.getElementById("myLogo");

var myLinks = document.querySelector("#myBody .nav-link");
var myNavbar = document.getElementById("navbarNav");

var logoTitle = document.querySelector("#logoName path");
var logoSlogan = document.querySelector("#logoSlogan *");

var activeLink = document.querySelector("#myBody .nav-link.active");

function headerChange() {
    if(document.documentElement.scrollTop > 100) {
        myHeader.classList.add("changeHeader");
        myLogo.classList.add("changeHeight");
        logoTitle.classList.add("logoColorChange")
        logoSlogan.style.fill = "#000";
        activeLink.style.color = "var(--third-color)";
    }

    else {
        myHeader.classList.remove("changeHeader");
        myLogo.classList.remove("changeHeight");
        logoTitle.classList.remove("logoColorChange")
        logoSlogan.style.fill = "#fff";
        activeLink.style.color = "var(--third-color)";
    }
}