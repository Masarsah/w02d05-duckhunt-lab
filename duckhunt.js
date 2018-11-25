$(document).ready(function () {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"
  function createDuck() {

    var $divCreat = $('<div/>').addClass('duck');
   

    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function () {
      $('.duck').toggleClass('flap')
    }, 250);

    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
   // 4. Try making the duck move to a different location after 1 second
    setInterval(function () {
      var leftt = ('000' + Math.random() * window.innerWidth + 'px')
      var topp = ('000' + Math.random() * window.innerHeight + 'px')
      $divCreat.css({
        'left': leftt,
        'top': topp
      })
    }, 1000)


    // 5. Congratulations!

    $divCreat.click(function (event) {
      $divCreat.addClass('shot')
      $divCreat.removeClass('flap')
    });


  
      $divCreat.click(function(){
        setInterval(function(){checkForWinner()
        $divCreat.remove();
      },1000)
    })
      return $divCreat
  
  }

  for (var i = 0; i < 5; i++) {

    body.append(createDuck());

  }
  



  function checkForWinner() {
    if ($('body').find("div").length == 0) {
      console.log(alert("YOU WIN GOOD JOB MASARAH!"))
    }

  }
;
})




