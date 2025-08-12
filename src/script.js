
let display = document.getElementById('display');
function appendTodisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error";
    }
}
document.addEventListener('keydown', (event)=> {
    let key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendTodisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
    