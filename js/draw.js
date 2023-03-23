let prevX, prevY, x1, y1;

$(document).ready(function() {

  let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  let windowWidth = window.innerWidth

  if (windowWidth > 800) {
    canvas.width = 800
    canvas.height = 800
  }

  // let drawing = (e) => {
  //   console.log(e);
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   // const canvasPosition = canvas.getBoundingClientRect()
  //   // const canvasTop = canvasPosition.top
  //   // const canvasLeft = canvasPosition.left
  //
  //   // ctx.lineTo(e.clientX - canvasLeft, e.clientY - canvasTop);
  //   ctx.stroke();
  // }
    ctx.strokeStyle = "blue";
  // $('#black_knopka').click(function() {
  //   ctx.strokeStyle = "black";
  // });
    ctx.lineWidth = 3;
  canvas.addEventListener("mousemove", drawing);

  function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e);
    ctx.strokeStyle = "black";
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
