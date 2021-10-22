import theme1 from '../Images/whitebg.jpg';
import theme2 from '../Images/blacksomecolour.jpg';
import theme3 from '../Images/mint.png';

const backgrounds = [theme1, theme2, theme3];

export function changeBackground(e) {
    const button = document.querySelector(".background-button");
    const display = document.querySelector("#display");
    const history = document.querySelector(".history");
    const btns = document.querySelectorAll("button");


    if (button.getAttribute("id") === "white") {
        button.removeAttribute("id", "white");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        for (let elem of btns) {
            elem.setAttribute("id", "white2")
        }
        button.setAttribute("id", "white2");
    } else if (button.getAttribute("id") === "white2") {
        button.removeAttribute("id", "white2");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        display.style.backgroundColor = "#003566";
        history.style.backgroundColor = "#003566";
        for (let elem of btns) {
            elem.setAttribute("id", "black")
        }
        button.setAttribute("id", "black");
    } else if (button.getAttribute("id") === "black") {
        button.removeAttribute("id", "black");
        document.body.style.color = "white";
        display.style.backgroundColor = "#453a6f";
        history.style.backgroundColor = "#453a6f";
        for (let elem of btns) {
            elem.setAttribute("id", "black2")
        }
        button.setAttribute("id", "black2");
    } else if (button.getAttribute("id") === "black2") {
        button.removeAttribute("id", "black2");
        document.body.style.backgroundImage = "url(" + theme1 +")";
        document.body.style.color = "black";
        display.style.backgroundColor = "black";
        history.style.backgroundColor = "white";
        for (let elem of btns) {
            elem.setAttribute("id", "img1")
        }
        button.setAttribute("id", "img1");
    } else if (button.getAttribute("id") === "img1") {
        button.removeAttribute("id", "img1");
        document.body.style.backgroundImage = "url(" + theme2 +")";
        document.body.style.color = "black";
        display.style.backgroundColor = "white";
        display.style.color = "black";
        history.style.backgroundColor = "white";
        for (let elem of btns) {
            elem.setAttribute("id", "img2")
        }
        button.setAttribute("id", "img2");
    } else if (button.getAttribute("id") === "img2") {
        button.removeAttribute("id", "img2");
        document.body.style.backgroundImage = "url(" + theme3 +")";
        document.body.style.color = "#E55D4D";
        display.style.backgroundColor = "black";
        display.style.color = "white";
        history.style.backgroundColor = "white";
        for (let elem of btns) {
            elem.setAttribute("id", "img3")
        }
        button.setAttribute("id", "img3");
    } else if (button.getAttribute("id") === "img3") {
        button.removeAttribute("id", "img3");
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        for (let elem of btns) {
            elem.setAttribute("id", "white")
        }
        button.setAttribute("id", "white");
    }
}