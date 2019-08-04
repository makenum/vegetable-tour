$(function () {
  //顶部headbar固定
  $(".headbar-sticky").sticky({ topSpacing: 0 });
  $('.headbar-sticky').on('sticky-start', function () {
    if ($('.aiui-headbar').hasClass('aiui-headbar__transparent')) {
      $('.aiui-headbar').removeClass('aiui-headbar__transparent').addClass('aiui-headbar__default');
    }
  });
  $('.headbar-sticky').on('sticky-end', function () {
    if ($('.aiui-headbar').hasClass('aiui-headbar__default')) {
      $('.aiui-headbar').removeClass('aiui-headbar__default').addClass('aiui-headbar__transparent');
    }
  });
});