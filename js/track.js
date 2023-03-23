let rand, canvasPosition, canvasTop, canvasLeft;

let arr = ['img/apple.png', 'img/lemon.png', 'img/list.png', 'img/black.png',
'img/brocco.png', 'img/carrot.png', 'img/fish.png',
'img/mush.png', 'img/straw.png'];

let arr_small = ['img/apple2.png', 'img/lemon2.png', 'img/list2.png', 'img/black2.png',
'img/brocco2.png', 'img/carrot2.png', 'img/fish2.png',
'img/mush2.png', 'img/straw2.png'];

$(document).ready(function(){

  $('.rectangle_3').mousemove(function(e) {
    console.log($(window).width(), $(window).width() <= 767);
    if ($(window).width() <= 767) {
      rand = Math.floor(Math.random() * arr_small.length);
      element = arr_small[rand]
      console.log('arr1');
    } else {
      rand = Math.floor(Math.random() * arr.length);
      element = arr[rand]
      console.log('arr2');
    }

    // console.log(e.offsetX, e.offsetY);

    canvasPosition = this.getBoundingClientRect()
    canvasTop = canvasPosition.top
    canvasLeft = canvasPosition.left

    console.log(e.clientX - canvasLeft, e.clientY - canvasTop);

   let img = $("<img>").attr("src", element).css({
    // "left": e.pageX + "px",
    // "top": e.pageY + "px",
    "left": e.clientX - canvasLeft + "px",
    "top": e.clientY - canvasTop + "px",
    "position": "absolute"
  }).appendTo(".rectangle_3").fadeOut(7000);
  });

});
