import initialRender from "./initialRender"
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
initialRender();
renderHome();
function listenClicks() {
    const homeBtn = document.querySelector(".homeBtn");
    const menuBtn = document.querySelector(".menuBtn");
    const contactBtn = document.querySelector(".contactBtn");
    const main = document.querySelector("main");
    document.addEventListener("click", e => {
        if(e.target.className === "homeBtn") {
            homeBtn.style.color = "rgb(146, 146, 146)";
            menuBtn.style.color = "white";
            contactBtn.style.color = "white";
            main.innerHTML = "";
            renderHome();
        } else if(e.target.className === "menuBtn") {
            homeBtn.style.color = "white";
            menuBtn.style.color = "rgb(146, 146, 146)";
            contactBtn.style.color = "white";
            main.innerHTML = "";
            renderMenu();
        } else if(e.target.className === "contactBtn") {
            homeBtn.style.color = "white";
            menuBtn.style.color = "white";
            contactBtn.style.color = "rgb(146, 146, 146)";
            main.innerHTML = "";
            renderContact();
        }
    });
}
listenClicks();
