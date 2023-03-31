let prevX, prevY, x1, y1;

$(document).ready(function() {

  let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  let windowWidth = window.innerWidth

  if (windowWidth > 800) {
    canvas.width = 600
    canvas.height = 600
  }

    ctx.strokeStyle = "#AF00B8";

    ctx.lineWidth = 3;
  canvas.addEventListener("mousemove", drawing);

  function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    document.querySelector("#sin_knopka").onclick = function() {
      selectedColor = "#2400FF";
    }
    document.querySelector("#viol_knopka").onclick = function() {
      selectedColor = "#AF00B8";
    }
    document.querySelector("#black_knopka").onclick = function() {
      selectedColor = "#000";
    }

    console.log(e);
    ctx.strokeStyle = "#AF00B8";
    ctx.lineWidth = 4;
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


  function drawing(x1, y1, x2, y2) {
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.stroke();
  }

  $(window).resize(() => {
    console.log('resize');

    windowWidth = window.innerWidth

    if (windowWidth > 800) {
      canvas.width = 300
      canvas.height = 300
    }
  })
});
