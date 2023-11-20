
  var keyboard;
  document.onkeydown = function(e) {
      switch (e.keyCode) {
          case 27:
              keyboard = 'escape';
              break;
          case 37:
              keyboard = 'left';
              break;
          case 38:
              keyboard = 'up';
              break;
          case 39:
              keyboard = 'right';
              break;
          case 40:
              keyboard = 'down';
              break;

          default:
              keyboard = 'nothing';
      }
      keyboardControll(keyboard);
  };
  
  function keyboardControll(keyboard){
    //console.log('keyboard')

    let lightboxMain = document.querySelector('.target:target');
    let close = document.querySelectorAll('.lightbox .close');
    let prev = lightboxMain.querySelectorAll('.nav[title="previous"]');
    let next = lightboxMain.querySelectorAll('.nav[title="next"]');
   
    if(close.length > 0 ){
      if (keyboard == 'escape') {
        //console.log('escape')  
         close.forEach(closeButton => {
           closeButton.click();
        });
      }
    }

    if(prev.length > 0 ){
      if (keyboard == 'left' || keyboard == 'up' ) {
        //console.log('left')  
         prev.forEach(prevButton => {
           prevButton.click();
        });
      }
    }

    if(next.length > 0 ){
      if (keyboard == 'right' || keyboard == 'down' ) {
        //console.log('right')  
         next.forEach(nextbutton => {
           nextbutton.click();
        });
      }
    }
  }
 
