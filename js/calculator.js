document.body.style.backgroundImage = "url('Images/whitebg.jpg')";

/* HEADER */

const header = document.createElement("header");
document.querySelector("body").insertBefore(header, document.querySelector("main"));

// button to change background

const bgButton = document.createElement("button");
bgButton.innerHTML = "Change<br>Background";
header.appendChild(bgButton);
bgButton.classList.add("background-button");
bgButton.setAttribute("id", "img1");
bgButton.addEventListener("click", changeBackground);

const h1 = document.createElement("h1");
h1.innerText = "Calculator";
header.appendChild(h1);

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
["AC", "DEL", "√", "(", ")", "÷", "×",
4, 5, 6, 7, 8, 9, "-",
".", 0, 1, 2, 3,"=", "+",];

const allBtns = document.createElement("div");
calc.appendChild(allBtns);
allBtns.classList.add("all-buttons");

for (const elem of buttonArray) {
    const button = document.createElement("button");
    allBtns.appendChild(button);
    button.setAttribute("id", elem);
    button.innerText = elem;

    button.addEventListener("click", buttonClick);
}

document.addEventListener('keypress', pressKey);

//------ FUNCTIONS ------------

var str = "";
var wasEqual = false;

function pressKey(e) {
    let value = "";
    //console.log(e.keyCode);

    if (e.keyCode >= 48 && e.keyCode <= 57) {
        value = e.keyCode - 48;
    } else if (e.keyCode === 47) {
        value = "/";
    } else if (e.keyCode === 42) {
        value = "*";
    } else if (e.keyCode === 43) {
        value = "+";
    } else if (e.keyCode === 45) {
        value = "-";
    } else if (e.keyCode === 46) {
        value = ".";
    } else if (e.keyCode === 37) {
        value = "%";
    } else if (e.keyCode === 13) {
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

function buttonClick(e){
    const value = e.target.innerText;
    processInput(value);
}

function processInput(value) {
    const lastVal = display.innerText[display.innerText.length-1];

    if (isNaN(value)) {
        if (value === "AC") {
            display.innerText = display.innerText.replace(display.innerText, "");
            str = str.replace(str, "");
            wasEqual = false;
        } else if (value === "=") {
            console.log(str);
            const result = computeResult(str);
            display.innerText = deleteDisplayRow(display.innerText);
            str = deleteDisplayRow(str);
            display.innerText += "\n=" + result;
            wasEqual = true;
        } else if (value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
            str += str.slice(0, -1);
        } else if (value === "√") {
            display.innerText += value;
            str += "Math.sqrt";
        } else if (value === "(") {
            display.innerText += value;
            str += value;
        } else if (!isNaN(lastVal)) {
            if (value === "÷") {
                display.innerText += value;
                str += "/";
            } else if (value === "×") {
                display.innerText += value;
                str += "*";
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

function computeResult(str){
    return Function('return ' + str)()
}

const backgrounds = ["Images/blacksomecolour.jpg", "Images/mint.png", "Images/whitebg.jpg"];

function changeBackground(e) {
    const button = document.querySelector(".background-button");

    if (button.getAttribute("id") === "img1") {
        button.removeAttribute("id", "img1");
        document.body.style.backgroundImage = "url(" + backgrounds[0] +")";
        document.body.style.color = "yellow";
        button.setAttribute("id", "img2");
    } else if (button.getAttribute("id") === "img2") {
        button.removeAttribute("id", "img2");
        document.body.style.backgroundImage = "url(" + backgrounds[1] +")";
        document.body.style.color = "rgb(250, 152, 168)";
        button.setAttribute("id", "img3");
    } else if (button.getAttribute("id") === "img3") {
        button.removeAttribute("id", "img3");
        document.body.style.backgroundImage = "url(" + backgrounds[2] +")";
        document.body.style.color = "black";
        button.setAttribute("id", "img1");
    }
}
