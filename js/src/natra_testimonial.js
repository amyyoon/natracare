// natra_testimonial.js
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



//testimonial 슬라이드배너

// gallery_01.js
(function($) {
  var tBox = $('.tBox');
  var tLink = tBox.children('a');
  var list = $('.list');
  var listImg = list.find('li');
/*
  // step_01 이미지가져오기
  listImg.on('click',function(e) {
    e.preventDefault();
    var img = $(this).find('img');
    var imgSrc = img.attr('data-src');
    galBox.css({backgroundImage:'url('+ imgSrc +')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
  });
  // data속성사용시 html문서에 많은 내용을 작성해야하는 불편함이 발생
*/

/*
  // step_02 js를 통해 목록을 만들어서 사용하기
  var addr = '../img/gallery/';
  var link = ['j01_big','j02_big','j03_big','j04_big','j05_big'];
  var href = ['naver.com', 'daum.net', 'google.com', 'greenart.co.kr', 'xidoweb.com'];
  listImg.on('click',function(e) {
    e.preventDefault();
    var i = $(this).index();
    galBox.css({backgroundImage:'url('+ addr + link[i] +'.jpg)',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
    galBox.find('a').attr({href:'http://'+href[i]});
  });
*/

 var addr = '../img/';
 var myImg = [
      {thum:'t_01.jpg', img:'t_01.jpg', href:'#',  narr:'Just a note to say I was reading the magazine VIVA tonight and saw the small article on Natracare products. It reminded me that I’ve never voiced thanks for the product.'},
      {thum:'t_02.jpg', img:'t_02.jpg', href:'#',  narr:'I was looking for a product that has no chemicals, perfumes or plastics and found Natracare. I no longer suffer with ‘normal’ itchiness. When mum wins, the whole family wins!'},
      {thum:'t_03.jpg', img:'t_03.jpg', href:'#',    narr:'I just wanted to say that the Feminine Wipes are fantastic!Thank you for creating a useful product that’s safe for my health and for the environment.'},
      {thum:'t_04.jpg', img:'t_04.jpg', href:'#',    narr:'I finally found feminine hygiene products I can trust and be confident that they are safe for me to use against my body – thank you!'},
      {thum:'t_05.jpg', img:'t_05.jpg', href:'#',    narr:'I recently changed to using your products and am so happy to have found them. I have always had harsh symptoms when it came to that time of the month but since using your products they have mostly vanished.'},
      {thum:'t_06.jpg', img:'t_06.jpg', href:'#',    narr:'After trying nearly every product on the market, I have finally found one that agrees with my body. I no longer have rashes, itchiness or leaking problems. I feel healthier and more confident.'},
  ];

  // 함수기능처리
  var ImgSet = function(i){
    tBox.css({backgroundImage:'url('+ addr + myImg[i].img +')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
    tLink.attr({href:'http://' + myImg[i].href, 
                  target:'_blank',
                  title:myImg[i].narr});
    tLink.text(myImg[i].narr);
  };

  // ---- 
  for(var j = 0; j < myImg.length; j+=1){
    listImg.eq(j).children('a').css({backgroundImage:'url(' + addr + myImg[j].thum+ ')',
                                     backgroundRepeat:'no-repeat', 
                                     backgroundSize:'cover',
                                     backgroundPosition:'center',
                                     transition:'all 400ms'});
  } // forEnd

  listImg.children('a').on('mouseenter focus',  function(){
    $(this).css({transform:'scale(1.2)'});
  });
  listImg.children('a').on('mouseleave blur',  function(){
    $(this).css({transform:'scale(1)'});
  });
  // ----

  ImgSet(0);

  listImg.on('click',function(e) {
    e.preventDefault();
    var i = $(this).index();
    ImgSet(i);
  });


})(jQuery);
