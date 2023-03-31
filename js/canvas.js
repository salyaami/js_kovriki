$(document).ready(function() {
  let gameCanvas, gc, prevX, prevY, ww;

  let color = "#2400FF";

  addEventListener("load", load);

  function load(e) {
    document.getElementById("reset").addEventListener("click", load);

    let windowWidth = window.innerWidth

    let canvas = document.getElementsByTagName('canvas')[0];
      canvas.width = 800;
      canvas.height = 800;
      ww = 800;

    if (windowWidth > 1440) {
      canvas.width = 800;
      canvas.height = 800;
      ww = 800;
    }
    else if (windowWidth > 1440) {
      canvas.width = 640;
      canvas.height = 640;
      ww = 640;
    }
    else if ((windowWidth >= 1280) && (windowWidth <= 1440)) {
      canvas.width = 600;
      canvas.height = 600;
      ww = 600;
    }
    else if ((windowWidth >= 1025) && (windowWidth < 1279)) {
      canvas.width = 560;
      canvas.height = 560;
      ww = 560;
    }
    else if ((windowWidth >= 651) && (windowWidth < 1274)) {
      canvas.width = 540;
      canvas.height = 540;
      ww = 540;
    }
    else if ((windowWidth >= 340) && (windowWidth < 650)) {
      canvas.width = 380;
      canvas.height = 380;
      ww = 380;
    }

    gameCanvas = document.getElementById("drawCanvas");
    gc = gameCanvas.getContext("2d");

    gameCanvas.addEventListener("mousemove", draw);

    gc.fillStyle = "white";
    gc.fillRect(0, 0, ww, ww);
  }

  function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e);
    gc.strokeStyle = color;

    gc.lineWidth = 2;
    if (e.buttons == 1) {
      drawLine(prevX, prevY, x, y);
      drawLine(ww - prevX, ww - prevY, ww - x, ww - y);
      drawLine(ww - prevX, prevY, ww - x, y);
      drawLine(prevX, ww - prevY, x, ww - y);
      drawLine(prevY, prevX, y, x);
      drawLine(ww - prevY, ww - prevX, ww - y, ww - x);
      drawLine(ww - prevY, prevX, ww - y, x);
      drawLine(prevY, ww - prevX, y, ww - x);
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

})
