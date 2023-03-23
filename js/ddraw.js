let gameCanvas, gc, prevX, prevY;
let selectedColor = "#000";

addEventListener("load", load);

let windowWidth = window.innerWidth
//
// if (windowWidth > 1200) {
canvas.width = 800
canvas.height = 800

let windowWidth = window.innerWidth

if (windowWidth > 800) {
  canvas.width = 800
  canvas.height = 800
}
// }

// $(window).resize(() => {
//   console.log('resize');
//
//   windowWidth = window.innerWidth
//
//   if (windowWidth < 800) {
//     canvas.width = 600
//     canvas.height = 600
//   }


function load(e) {
document.getElementById("reset").addEventListener("click", load);

gameCanvas = document.getElementById("drawCanvas");
gc = gameCanvas.getContext("2d");

gameCanvas.addEventListener("mousemove", draw);

gc.fillStyle = "white";
gc.fillRect(0, 0, 600, 600);
}

sin_knopka.onclick = function() {
  selectedColor = "#2400FF";
}

document.querySelector("#sin_knopka").onclick = function() {
  selectedColor = "#2400FF";
}
document.querySelector("#viol_knopka").onclick = function() {
  selectedColor = "#AF00B8";
}
document.querySelector("#black_knopka").onclick = function() {
  selectedColor = "#000";
}

function draw(e) {
var x = e.offsetX;
var y = e.offsetY;


console.log(e);
gc.strokeStyle = selectedColor;
gc.lineWidth = 2;
if(e.buttons == 1) {
  drawLine(prevX, prevY, x, y);
  drawLine(600 - prevX, 600 - prevY, 600 - x, 600 - y);
  drawLine(600 - prevX, prevY, 600 - x, y);
  drawLine(prevX, 600 - prevY, x, 600 - y);
  drawLine(prevY, prevX, y, x);
  drawLine(600 - prevY, 600 - prevX, 600 - y, 600 - x);
  drawLine(600 - prevY, prevX, 600 - y, x);
  drawLine(prevY, 600 - prevX, y, 600 - x);
}
prevX = x;
prevY = y;
}

function drawLine(x1, y1, x2, y2) {
gc.beginPath();
gc.moveTo(x1, y1);
gc.lineTo(x2, y2);
gc.stroke();
}

$(window).resize(() => {
  console.log('resize');

  windowWidth = window.innerWidth

  if (windowWidth > 800) {
    canvas.width = 300
    canvas.height = 300
  }
})
