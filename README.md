# 🧮 Basic Calculator
A simple web-based calculator built using HTML, CSS, and JavaScript (ES6+).
Supports basic arithmetic operations, keyboard input, and persistent state using localStorage.

#✨ Features
➕➖✖️➗ Perform basic operations: addition, subtraction, multiplication, division.

⌨️ Keyboard and button input support.

💾 Persistent display using localStorage — your last input/expression survives page refresh.

🎨 Built with plain CSS — easy to style and extend.

🌙 Optional dark mode toggle using a CSS class switch.

#🛠 Core Concepts

DOM Access & Event Handling
Uses document.getElementById and addEventListener to capture clicks and key presses.

State Persistence

javascript
Copy
Edit
const STORAGE_KEY = "userInput";
localStorage.setItem(STORAGE_KEY, expression);
let expression = localStorage.getItem(STORAGE_KEY) || "";
Dark Mode Toggling

javascript
Copy
Edit
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
Calculation Logic
Uses eval() for quick evaluation of typed expressions. (Works for learning purposes, but avoid in production.)

💻 How to Run
📥 Clone the repo:

bash
Copy
Edit
git clone https://github.com/AKR-02/Calculator-.git
📂 Open the folder.

🌐 Open index.html in your browser.

✅ Start calculating — use buttons or your keyboard.

🚀 Next Steps
🛡 Add input sanitization (replace eval() with a safe parser).

🧠 Add more functions: parentheses, %, memory storage.

🧮 Build a scientific calculator or unit converter.

⚛️ Try rebuilding in React/Vue to practice component-based design.

