let display = document.getElementById('display');
let savedValue = localStorage.getItem("userInput");
display.value = savedValue ? savedValue : "";
function appendTodisplay(input){
    display.value += input;
    localStorage.setItem("userInput",display.value)
}

function clearDisplay() {
    display.value = "";
    localStorage.setItem("userInput",display.value)
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        localStorage.setItem("userInput",display.value)
    }
    catch (error){
        display.value = "Error";
        localStorage.setItem("userInput",display.value)
    }
}

function goBack() {
    display.value = display.value.slice(0, -1);
    localStorage.setItem("userInput",display.value)
}
// Accept keyboard input
document.addEventListener('keydown', (event)=> {
    let key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendTodisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        goBack();
    }
});


// dark mode

const checkbox = document.getElementById('checkbox');

// On page load, set dark mode from localStorage
const darkMode = localStorage.getItem("darkMode") === "true";
document.body.classList.toggle("dark-mode", darkMode);
checkbox.checked = darkMode;

// Listen for checkbox changes
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", checkbox.checked);
  localStorage.setItem("darkMode", checkbox.checked);
});

