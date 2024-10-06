const btn = document.getElementById("btn");
const clr = document.querySelector(".color");

const hex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", () => {
  let hexClr = generateHex()
  document.body.style.backgroundColor = hexClr;
  clr.textContent = hexClr;
});

function generateHex() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()]
    }
    return hexColor
}

function getRandomColor() {
  result = Math.floor(Math.random() * hex.length);
  return result;
}
