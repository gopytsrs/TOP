body = document.querySelector("body");

for (let i = 0; i < 16; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "container";
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement("div");
    squareDiv.addEventListener("mouseover", (e) => {
      changeColor(e);
    });
    rowDiv.appendChild(squareDiv);
  }
  body.appendChild(rowDiv);
}

button = document.querySelector("button");

button.addEventListener("click", clearGrid);

function changeColor(e) {
  e.target.style.backgroundColor = randomRGB();
}
function clearGrid() {
  const divs = document.querySelectorAll(".container");
  for (let i = 0; i < divs.length; i++) {
    body.removeChild(divs[i]);
  }
  createGrid();
}
function createGrid() {
  const square = prompt("Enter the grid square number");
  for (let i = 0; i < square; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "container";
    for (let j = 0; j < square; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.addEventListener("mouseover", (e) => {
        changeColor(e);
      });
      rowDiv.appendChild(squareDiv);
    }
    body.appendChild(rowDiv);
  }
}

function randomRGB() {
  const o = Math.round;
  const r = Math.random;
  //rgb
  const s = 255;
  return `rgb(${o(r() * s)},${o(r() * s)},${o(r() * s)})`;
  //hsl
  //   const h = 360;
  //   const sl = 100;

  //   return `hsl(${o(r() * h)},${o(r() * sl)}%,${o(r() * sl)}%`;
}
