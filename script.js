(function () {
  "use strict";

  let count = 1;

  function contentRotator() {
    $(`#container p:nth-child(${count})`).fadeIn(2000, function(){
      if($(this).is(`#container p:last-child`)){
        setTimeout(function () {
          $(`#container p:nth-child(${count})`).fadeOut(2000, function() {
            count = 1;
            contentRotator();
          })
        })
      }
      else {
        setTimeout( function () {
          $(`#container p:nth-child(${count})`).fadeOut(2000, function() {
            count++;
            contentRotator();
          })
        })
      }
    });
  }

  contentRotator();

})();
