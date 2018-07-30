// zbrush_main.js

(function($){

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


// 	var ad=$('.ad');
// 	var adBtn=$('ad_btn')
	
// 	adBtn.on('click focus', function(e){
// 	 // e.preventDefault();
// 	 // var i=$(this).index();
// 	 ad.hide();
// 	});
 })(jQuery);

  // list.on('click', ['a'], function(e) {
  //   e.preventDefault();
  //   var thisI = $(this).index();
  //   mdBox.css({backgroundImage:'url('+ addr + useImgBig[thisI] +')'});
  //   mdBox.fadeIn();
  //   mdBg.fadeIn();  
   });