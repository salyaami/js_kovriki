$(document).ready(function() {

  let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  let drawing = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
  ctx.strokeStyle = "blue";
  // $('#black_knopka').click(function() {
  //   ctx.strokeStyle = "black";
  // });
    ctx.lineWidth = 3;
  canvas.addEventListener("mousemove", drawing);
});

//
// function drawLine(x1, y1, x2, y2) {
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }

// $("#viol_knopka").click(function() {
//   selectedColor = window.getComputedStyle(btn).getPropertyValue('background-color');
//   // btn????
// });
