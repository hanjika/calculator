import { getHistory } from './history'

//------ FUNCTIONS ------------

let str = "";
let wasEqual = false;

/* USE CALCULATOR - KEY PRESS, BUTTON CLICKS, INPUT AND DISPLAY */

export function pressKey(e) {
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
    }

    if (value !== "") {
        processInput(value);
    }
}

export function backspace(e) {
    let value = "";

    if (e.keyCode === 8) {
        value = "DEL";
    }

    if (value !== "") {
        processInput(value);
    }
}

export function buttonClick(e){
    const value = e.target.innerText;
    processInput(value);
}

function processInput(value) {
    const lastVal = display.innerText[display.innerText.length-1];

    if (isNaN(value)) {
        if (value === "C") {
            display.innerText = display.innerText.replace(display.innerText, "");
            str = str.toString().replace(str, "");
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

/* COMPUTE RESULT */

function computeResult(str){
    return Function('return ' + str)()
}
