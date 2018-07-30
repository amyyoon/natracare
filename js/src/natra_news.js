// natra_news.js
(function($) {

var gnb = $('#gnb');
var gnbUl= gnb.children('ul')
var gnbLi= gnbUl.children('li')

gnbLi.find('ol').hide();

  var SlideShow = function(e, i){
     e.preventDefault();
     gnbLi.eq(i).find('ol').stop().slideDown();
  };

  var SlideHide = function(e){
     e.preventDefault();
     gnbLi.find('ol').stop().slideUp();
  };

  gnbLi.on('mouseenter',function(e) { var i= $(this).index(); SlideShow(e, i); })
       .on('mouseleave',function(e) {SlideHide(e); })
       .children('a').on('focus',function(e) { var i= $(this).parent().index();  SlideShow(e, i); });
  var gngfind = gnbLi.children('ol');
  $.each(gngfind, function(i,v) {
    $(this).find('a').eq(-1).on('blur',function(e) {console.log('out'); SlideHide(e); });
  });

})(jQuery);




// 모바일/태블릿 gnb보여주기

(function($) {

  var gnbBtn    = $('.gnb_btn');
  var gnb       = $('#gnb_1');
  
  gnb.hide();
  gnbBtn.on('click',['button'],function(e){
 

    gnb.stop().toggle();

  });

})(jQuery);

