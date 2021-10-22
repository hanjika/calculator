/* HISTORY FUNCTIONS - ADD TO HISTORY AND DELETE HISTORY */

export function getHistory(str, result) {
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

export function deleteHistory() {
    document.getElementById("history").innerText = "";
}