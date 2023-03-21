$(document).ready(function(){
  let arr = ['img/apple.png', 'img/lemon.png', 'img/list.png', 'img/black.png',
  'img/brocco.png', 'img/carrot.png', 'img/fish.png',
'img/mush.png', 'img/straw.png'];

let arr_small = ['img/apple2.png', 'img/lemon2.png', 'img/list2.png', 'img/black2.png',
'img/brocco2.png', 'img/carrot2.png', 'img/fish2.png',
'img/mush2.png', 'img/straw2.png'];

  let rand;
  $(document).mousemove(function(e) {
    if ($(window).width() <= 767) {
      rand = Math.floor(Math.random() * arr_small.length);
    } else {
      rand = Math.floor(Math.random() * arr.length);
    }

   let img = $("<img>").attr("src", arr[rand]).css({
    "left": e.pageX + "px",
    "top": e.pageY + "px",
    "position": "absolute"
  }).appendTo(".rectangle_3").fadeOut(7000);
  });

});
