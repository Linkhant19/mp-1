// projects.js

{/* <div id="buttons">
    <button id="add" onclick="add()">+</button>
    <button id="subtract" onclick="subtract()">-</button>
    <button id="multiply" onclick="multiply()">*</button>
    <button id="divide" onclick="divide()">/</button>
    <button id="power" onclick="power()">**</button>
    <button id="clear" onclick="clear()">Clear</button>
</div> */}

// my add function
function addition() {
    const input1 = document.getElementById("input1").value;
    if (isNaN(input1)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    if (!input1) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    const input2 = document.getElementById("input2").value;
    if (isNaN(input2)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    if (!input2) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    const result = Number(input1) + Number(input2);

    // if result is negative, I will make the color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // if result is negative, I will make the color var(--cfluorescentcyan)
    else {
        document.getElementById("output").style.color = "var(--cfluorescentcyan)";
    }

    document.getElementById("output").innerHTML = String(result);
}

// my subtract function
function subtract() {
    const input1 = document.getElementById("input1").value;
    if (isNaN(input1)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    if (!input1) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    const input2 = document.getElementById("input2").value;
    if (isNaN(input2)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    if (!input2) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }   
    
    const result = Number(input1) - Number(input2);

    // if result is negative, I will make the color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // if result is negative, I will make the color var(--cfluorescentcyan)
    else {
        document.getElementById("output").style.color = "var(--cfluorescentcyan)";
    }

    document.getElementById("output").innerHTML = String(result);
}

// my multiply function
function multiply() {
    const input1 = document.getElementById("input1").value;
    if (isNaN(input1)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    if (!input1) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    const input2 = document.getElementById("input2").value;
    if (isNaN(input2)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    if (!input2) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    const result = Number(input1) * Number(input2);

    // if result is negative, I will make the color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // if result is negative, I will make the color var(--cfluorescentcyan)
    else {
        document.getElementById("output").style.color = "var(--cfluorescentcyan)";
    }

    document.getElementById("output").innerHTML = String(result);
}  

// my divide function
function divide() {
    const input1 = document.getElementById("input1").value;
    if (isNaN(input1)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    if (!input1) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    const input2 = document.getElementById("input2").value;
    if (isNaN(input2)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    if (!input2) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    const result = Number(input1) / Number(input2);

    // if result is negative, I will make the color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // if result is negative, I will make the color var(--cfluorescentcyan)
    else {
        document.getElementById("output").style.color = "var(--cfluorescentcyan)";
    }

    document.getElementById("output").innerHTML = String(result);
}

// my power function
function power() {
    const input1 = document.getElementById("input1").value;
    if (isNaN(input1)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    if (!input1) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    
    const input2 = document.getElementById("input2").value;
    if (isNaN(input2)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
    if (!input2) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    let result = 1;

    for (let i = 0; i < input2; i++) {
        result *= input1;
    }

    // if result is negative, I will make the color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // if result is negative, I will make the color var(--cfluorescentcyan)
    else {
        document.getElementById("output").style.color = "var(--cfluorescentcyan)";
    }

    document.getElementById("output").innerHTML = String(result);
}

// my reset function
function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").innerHTML = "";
}
