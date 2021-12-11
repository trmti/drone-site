//　fadeIn アニメーション

$('.fade').on('inview', function (event, isInview) {
  if (isInview) {
    $(this).addClass('fade-in');
  } else {
    $(this).removeClass('fade-in');
  }
});

// スクロール時にボタン表示

var isDisplay = false;
var btn = $('.ask-info');
$(window).scroll(function () {
  console.log($(this).scrollTop());
  if ($(this).scrollTop() > 100 && !isDisplay) {
    btn.addClass('fadeIn-scroll');
    isDisplay = !isDisplay;
  } else if ($(this).scrollTop() < 100 && isDisplay) {
    btn.removeClass('fadeIn-scroll');
    isDisplay = !isDisplay;
  }
});
