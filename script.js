const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');

const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

const topscreen = document.getElementById('topscreen');

function clearScreen() {
  topscreen.innerText = '';
}

function appendToScreen(value) {
  topscreen.innerText += value;
}

function updateOutput(value) {
  
  topscreen.innerText = value;
  topscreen.style.color = 'green';
}

clearBtn.addEventListener("click", function () {
  clearScreen();
});


oneBtn.addEventListener("click", () => appendToScreen(oneBtn.innerText));
twoBtn.addEventListener("click", () => appendToScreen(twoBtn.innerText));
threeBtn.addEventListener("click", () => appendToScreen(threeBtn.innerText));
fourBtn.addEventListener("click", () => appendToScreen(fourBtn.innerText));
fiveBtn.addEventListener("click", () => appendToScreen(fiveBtn.innerText));
sixBtn.addEventListener("click", () => appendToScreen(sixBtn.innerText));
sevenBtn.addEventListener("click", () => appendToScreen(sevenBtn.innerText));
eightBtn.addEventListener("click", () => appendToScreen(eightBtn.innerText));
nineBtn.addEventListener("click", () => appendToScreen(nineBtn.innerText));
zeroBtn.addEventListener("click", () => appendToScreen(zeroBtn.innerText));


// operator

plusBtn.addEventListener("click", () => appendToScreen(plusBtn.innerText));
minusBtn.addEventListener("click", () => appendToScreen(minusBtn.innerText));
multiplyBtn.addEventListener("click", () => appendToScreen(multiplyBtn.innerText));
divideBtn.addEventListener("click", () => appendToScreen(divideBtn.innerText));

equalBtn.addEventListener("click", function () {
  const x = topscreen.innerText;

  try {
    const res = eval(x);
    updateOutput(res);
  } catch (error) {
    updateOutput("Error");
  }
});

