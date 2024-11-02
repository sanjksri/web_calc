# web_calc
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Calculator</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="calculator">
    <div class="screen" id="screen">0</div>
    <div class="buttons">
        <button class="btn" onclick="clearScreen()">C</button>
        <button class="btn" onclick="deleteDigit()">DEL</button>
        <button class="btn" onclick="appendInput('/')">/</button>
        <button class="btn" onclick="appendInput('*')">x</button>
        <button class="btn" onclick="appendInput('7')">7</button>
        <button class="btn" onclick="appendInput('8')">8</button>
        <button class="btn" onclick="appendInput('9')">9</button>
        <button class="btn" onclick="appendInput('-')">-</button>
        <button class="btn" onclick="appendInput('4')">4</button>
        <button class="btn" onclick="appendInput('5')">5</button>
        <button class="btn" onclick="appendInput('6')">6</button>
        <button class="btn" onclick="appendInput('+')">+</button>
        <button class="btn" onclick="appendInput('1')">1</button>
        <button class="btn" onclick="appendInput('2')">2</button>
        <button class="btn" onclick="appendInput('3')">3</button>
        <button class="btn equal-sign" onclick="calculate()">=</button>
        <button class="btn" onclick="appendInput('0')">0</button>
        <button class="btn" onclick="appendInput('.')">.</button>
    </div>
</div>
<script src="script.js"></script>
</body>
</html>