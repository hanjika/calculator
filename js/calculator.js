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

//------ FUNCTIONS ------------

let str = "";
let wasEqual = false;

/* USE CALCULATOR - KEY PRESS, BUTTON CLICKS, INPUT AND DISPLAY */

function pressKey(e) {
    let value = "";

    if (e.keyCode >= 48 && e.keyCode <= 57) {
        value = e.keyCode - 48;
    } else if (e.keyCode === 47) {
        value = "÷";
    } else if (e.keyCode === 42) {
        value = "×";
    } else if (e.keyCode === 43) {
        value = "+";
    } else if (e.keyCode === 45) {
        value = "-";
    } else if (e.keyCode === 46) {
        value = ".";
    } else if (e.keyCode === 13 || e.keyCode === 61) {
        value = "=";
    } else if (e.keyCode === 40) {
        value = "(";
    } else if (e.keyCode === 41) {
        value = ")";
    } else if (e.keyCode === 8) {
        value = "DEL";
    }

    if (value !== "") {
        processInput(value);
    }
}

function backspace(e) {
    let value = "";

    if (e.keyCode === 8) {
        value = "DEL";
    }

    if (value !== "") {
        processInput(value);
    }
}

function buttonClick(e){
    const value = e.target.innerText;
    processInput(value);
}

function processInput(value) {
    const lastVal = display.innerText[display.innerText.length-1];

    if (isNaN(value)) {
        if (value === "C") {
            display.innerText = display.innerText.replace(display.innerText, "");
            str = str.toString().replace(str, "");
            console.log(str);
            wasEqual = false;
        } else if (value === "=") {
            const result = computeResult(str);
            display.innerText = deleteDisplayRow(display.innerText);
            getHistory(str, result);
            str = result;
            display.innerText += "\n=" + result;
            wasEqual = true;
        } else if (value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
            str = str.slice(0, -1);
        } else if (value === "√") {
            display.innerText += value;
            str += "Math.sqrt";
        } else if (value === "(") {
            display.innerText += value;
            str += value;
        } else if (!isNaN(lastVal) || lastVal === ")") {
            if (value === "÷") {
                display.innerText += value;
                str += "/";
            } else if (value === "×") {
                display.innerText += value;
                str += "*";
            } else if (value === "MOD") {
                display.innerText += value;
                str += "%";
            } else {
                display.innerText += value;
                str += value;
            }
            if (wasEqual === true) {
                wasEqual = false;
            }
        }
    } else {
        if (wasEqual === false) {
           display.innerText += value;
           str += value;
        }
    }
}

function deleteDisplayRow(str) {
    const lines = str.split("=");

    if (lines[1]) {
        lines.splice(0, 1);
        return lines;
    } else {
        return str;
    }
}

/* HISTORY FUNCTIONS - ADD TO HISTORY AND DELETE HISTORY */

function getHistory(str, result) {
    for (let i = 0; i < str.length; i++){
        if (str[i] === "*") {
            document.getElementById("history").innerText += "×";
        } else if (str[i] === "/") {
            document.getElementById("history").innerText += "÷";
        } else if (str[i] === "%") {
            document.getElementById("history").innerText += " mod ";
        } else {
            document.getElementById("history").innerText += str[i];
        }
    }
    document.getElementById("history").innerText += " = " + result + "\n";
}

function deleteHistory() {
    document.getElementById("history").innerText = "";
}

/* COMPUTE RESULT */

function computeResult(str){
    return Function('return ' + str)()
}

/* CHANGE BACKGROUND */

const backgrounds = ["Images/blacksomecolour.jpg", "Images/mint.png", "Images/whitebg.jpg"];

function changeBackground(e) {
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
        document.body.style.backgroundImage = "url(" + backgrounds[2] +")";
        document.body.style.color = "black";
        display.style.backgroundColor = "black";
        history.style.backgroundColor = "white";
        for (let elem of btns) {
            elem.setAttribute("id", "img1")
        }
        button.setAttribute("id", "img1");
    } else if (button.getAttribute("id") === "img1") {
        button.removeAttribute("id", "img1");
        document.body.style.backgroundImage = "url(" + backgrounds[0] +")";
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
        document.body.style.backgroundImage = "url(" + backgrounds[1] +")";
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
