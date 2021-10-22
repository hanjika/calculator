import { 
    pressKey,
    backspace,
    buttonClick
} from "./calculator";
import { deleteHistory } from "./history";
import { changeBackground } from "./theme";

/* HEADER */

const header = document.createElement("header");
document.querySelector("body").insertBefore(header, document.querySelector("main"));

// button to change background

const bgButton = document.createElement("button");
bgButton.innerHTML = "Change<br>Theme";
header.appendChild(bgButton);
bgButton.classList.add("background-button");
bgButton.setAttribute("id", "white");
bgButton.addEventListener("click", changeBackground);

/* CALCULATOR */

const calc = document.createElement("section");
document.querySelector("main").appendChild(calc);
calc.classList.add("calculator");

// display

const display = document.createElement("div");
calc.appendChild(display);
display.setAttribute("id", "display");
display.innerText = "";

// buttons

const buttonArray = 
["C", "DEL", "MOD",
"(", ")", "÷", 
"+", "-", "×",
7, 8, 9,
4, 5, 6, 
1, 2, 3, 
".", 0, "=",];

const allBtns = document.createElement("div");
calc.appendChild(allBtns);
allBtns.classList.add("all-buttons");

for (const elem of buttonArray) {
    const button = document.createElement("button");
    allBtns.appendChild(button);
    button.setAttribute("id", "white");
    button.innerText = elem;

    button.addEventListener("click", buttonClick);
}

document.addEventListener("keypress", pressKey);
document.addEventListener("keyup", backspace);

/* HISTORY */

const historySection = document.createElement("section");
document.querySelector("main").appendChild(historySection);
historySection.classList.add("history");

const historyTitle = document.createElement("h2");
historySection.appendChild(historyTitle);
historyTitle.innerText = "History";

const historyData = document.createElement("p");
historySection.appendChild(historyData);
historyData.setAttribute("id", "history");
historyData.innerText = "";

const historyBtn = document.createElement("button");
historySection.appendChild(historyBtn);
historyBtn.innerText = "Clear";
historyBtn.classList.add("refresh");
historyBtn.setAttribute("id", "white");
historyBtn.addEventListener("click", deleteHistory);