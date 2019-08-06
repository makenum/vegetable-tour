$(function () {
  // 头部导航
  $(".headbar-sticky").sticky({ topSpacing: 0 });
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
  // 发送验证码
});