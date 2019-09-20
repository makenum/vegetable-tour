$(function() {
  // 头部导航固定
  $(".headbar-sticky").on("sticky-start", function() {
    if ($(".aiui-headbar").hasClass("aiui-headbar__transparent")) {
      $(".aiui-headbar")
        .removeClass("aiui-headbar__transparent")
        .addClass("aiui-headbar__default");
    }
  });
  $(".headbar-sticky").on("sticky-end", function() {
    if ($(".aiui-headbar").hasClass("aiui-headbar__default")) {
      $(".aiui-headbar")
        .removeClass("aiui-headbar__default")
        .addClass("aiui-headbar__transparent");
    }
  });
  // 数字增减器
  var MIN = 1;
  $(".ui-count_decrease").attr("disabled", "disabled");
  $(".ui-count_decrease").click(function(e) {
    var $input = $(e.currentTarget)
      .parent()
      .find(".ui-count_number");
    var number = parseInt($input.val()) - 1;
    if (number <= MIN) {
      number = MIN;
      $(this).attr("disabled", "disabled");
    }
    $input.val(number);
  });
  $(".ui-count_increase").click(function(e) {
    $(this)
      .siblings(".ui-count_decrease")
      .removeAttr("disabled");
    var $input = $(e.currentTarget)
      .parent()
      .find(".ui-count_number");
    var number = parseInt($input.val()) + 1;
    $input.val(number);
  });
  // 返回顶部
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
      $(".aiui-gotop-hook").fadeIn(300);
    } else {
      $(".aiui-gotop-hook").fadeOut(300);
    }
  });
  $(".aiui-gotop-hook").bind("click", function() {
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
});

// 查看相册
$(function() {
  var mySwiper = new Swiper(".swiper-container", {
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    observer: true,
    observeParents: true
  });
  $(".aiui-photo__thumb").on("click", ".thumb-list img", function() {
    var imgBox = $(this)
      .parents(".thumb-list")
      .find("img");
    var i = $(imgBox).index(this);
    $(".aiui-photo__preview .swiper-wrapper").html("");
    for (var a = 0, b = imgBox.length; a < b; a++) {
      $(".aiui-photo__preview .swiper-wrapper").append('<div class="swiper-slide"><div class="item-list"><img src="' + imgBox.eq(a).attr("src") + '" / ></div></div>');
    }
    $(".aiui-photo__preview").css({
      "z-index": 1000,
      opacity: "1"
    });
    mySwiper.slideTo(i, 0, false);
    return false;
  });
  $(".aiui-photo__preview").on("click", function() {
    $(this).css({
      "z-index": "-1",
      opacity: "0"
    });
  });
});
