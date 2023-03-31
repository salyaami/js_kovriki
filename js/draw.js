let prevX, prevY, x1, y1;

$(document).ready(function() {

  let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  let windowWidth = window.innerWidth

  let canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = 800;
    canvas.height = 800;

  if (windowWidth > 1440) {
    canvas.width = 800;
    canvas.height = 800;
  }
  else if (windowWidth === 1440) {
    canvas.width = 640;
    canvas.height = 640;
  }
  else if ((windowWidth >= 1280) && (windowWidth < 1440)) {
    canvas.width = 600;
    canvas.height = 600;
  }

  function load(e) {
  document.getElementById("reset").addEventListener("click", load);

  gameCanvas = document.getElementById("drawCanvas");
  gc = gameCanvas.getContext("2d");

  gameCanvas.addEventListener("mousemove", draw);

  gc.fillStyle = "white";
  gc.fillRect(0, 0, 600, 600);

    ctx.strokeStyle = "#AF00B8";
    ctx.lineWidth = 3;
  canvas.addEventListener("mousemove", drawing);

  function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e);
    ctx.strokeStyle = "#AF00B8";
    ctx.lineWidth = 4;
    if(e.buttons == 1) {
      drawLine(prevX, prevY, x, y);
      drawLine(800 - prevX, 800 - prevY, 800 - x, 800 - y);
      drawLine(800 - prevX, prevY, 800 - x, y);
      drawLine(prevX, 800 - prevY, x, 800 - y);
      drawLine(prevY, prevX, y, x);
      drawLine(800 - prevY, 800 - prevX, 800 - y, 800 - x);
      drawLine(800 - prevY, prevX, 800 - y, x);
      drawLine(prevY, 800 - prevX, y, 800 - x);
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
  }
}) ;

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
