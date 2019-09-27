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
  $(".aiui-count__decrease").attr("disabled", "disabled");
  $(".aiui-count__decrease").click(function(e) {
    var $input = $(e.currentTarget)
      .parent()
      .find(".aiui-count__number");
    var number = parseInt($input.val()) - 1;
    if (number <= MIN) {
      number = MIN;
      $(this).attr("disabled", "disabled");
    }
    $input.val(number);
  });
  $(".aiui-count__increase").click(function(e) {
    $(this)
      .siblings(".aiui-count__decrease")
      .removeAttr("disabled");
    var $input = $(e.currentTarget)
      .parent()
      .find(".aiui-count__number");
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

// 省市区演示数据
var provinceCityDistrictData = [
  {
    label: "广东省",
    value: 0,
    children: [
      {
        label: "广州市",
        value: 0,
        children: [
          {
            label: "海珠区",
            value: 0
          },
          {
            label: "番禺区",
            value: 1
          }
        ]
      },
      {
        label: "佛山市",
        value: 1,
        children: [
          {
            label: "禅城区",
            value: 0
          },
          {
            label: "南海区",
            value: 1
          }
        ]
      }
    ]
  },
  {
    label: "湖南省",
    value: 1,
    children: [
      {
        label: "长沙市",
        value: 0,
        children: [
          {
            label: "天心区",
            value: 0
          },
          {
            label: "芙蓉区",
            value: 1
          }
        ]
      },
      {
        label: "株洲市",
        value: 1,
        children: [
          {
            label: "芦淞区",
            value: 0
          },
          {
            label: "石峰区",
            value: 1
          }
        ]
      }
    ]
  }
];
