// 初始动画
initLand();

function initLand() {
  anime({
    targets: ".land1",
    translateX: "1.2rem",
    translateY: "-0.2rem",
    scale: 0.7,
    duration: 0
  });
  anime({
    targets: ".land2",
    zIndex: {
      value: 1,
      round: true
    },
    translateX: 0,
    translateY: 0,
    duration: 0,
    scale: 1
  });
  anime({
    targets: ".land3",
    duration: 0,
    translateX: "-1.2rem",
    translateY: "-0.2rem",
    scale: 0.7
  });
}
// 遍历土地点击事件
$(".land").each(function(index) {
  var $this = $(this);
  $this.bind("click", function() {
    // 第一个元素点击
    if (index === 0) {
      if ($this.hasClass("land1")) {
        landLeftOne();
        $this.removeClass("land1");
        $this.addClass("land2");
        $this
          .next()
          .removeClass("land2")
          .addClass("land3");
        $this
          .next()
          .next()
          .removeClass("land3")
          .addClass("land1");
      }
      if ($this.hasClass("land3")) {
        landRightOne();
        $this.removeClass("land3");
        $this.addClass("land2");
        $this
          .next()
          .removeClass("land1")
          .addClass("land3");
        $this
          .next()
          .next()
          .removeClass("land2")
          .addClass("land1");
      }
    }
    // 第二个元素点击
    if (index === 1) {
      if ($this.hasClass("land1")) {
        landLeftTwo();
        $this.removeClass("land1");
        $this.addClass("land2");
        $this
          .next()
          .removeClass("land2")
          .addClass("land3");
        $this
          .prev()
          .removeClass("land3")
          .addClass("land1");
      }
      if ($this.hasClass("land3")) {
        landRightTwo();
        $this.removeClass("land3");
        $this.addClass("land2");
        $this
          .next()
          .removeClass("land1")
          .addClass("land3");
        $this
          .prev()
          .removeClass("land2")
          .addClass("land1");
      }
    }
    // 第三个元素点击
    if (index === 2) {
      if ($this.hasClass("land1")) {
        landLeftThree();
        $this.removeClass("land1");
        $this.addClass("land2");
        $this
          .prev()
          .removeClass("land3")
          .addClass("land1");
        $this
          .prev()
          .prev()
          .removeClass("land2")
          .addClass("land3");
      }
      if ($this.hasClass("land3")) {
        landRightThree();
        $this.removeClass("land3");
        $this.addClass("land2");
        $this
          .prev()
          .removeClass("land2")
          .addClass("land1");
        $this
          .prev()
          .prev()
          .removeClass("land1")
          .addClass("land3");
      }
    }
  });
});

// 左侧.land1点击动画
function landLeftOne() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 1,
      round: true
    },
    translateX: "3.2rem",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "-5.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    );
}
// 左侧.land2点击动画
function landLeftTwo() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 1,
      round: true
    },
    translateX: "0",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "-1.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "1.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    );
}
// 左侧.land3点击动画
function landLeftThree() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 1,
      round: true
    },
    translateX: "-3.2rem",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "5.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "-2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    );
}
// 右侧.land1点击动画
function landRightOne() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 0,
      round: true
    },
    translateX: "2rem",
    translateY: "-0.2rem",
    scale: 0.7
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "-5.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 1,
          round: true
        },
        scale: 1,
        translateX: "3.2rem",
        translateY: 0
      },
      "-=600"
    );
}
// 右侧.land2点击动画
function landRightTwo() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 0,
      round: true
    },
    translateX: "-1.2rem",
    translateY: "-0.2rem",
    scale: 0.7
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "1.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 1,
          round: true
        },
        scale: 1,
        translateX: "0",
        translateY: "0"
      },
      "-=600"
    );
}

// 右侧.land3点击动画
function landRightThree() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land1",
    zIndex: {
      value: 0,
      round: true
    },
    translateX: "5.2rem",
    translateY: "-0.2rem",
    scale: 0.7
  })
    .add(
      {
        targets: ".land2",
        zIndex: {
          value: 0,
          round: true
        },
        scale: 0.7,
        translateX: "-2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    )
    .add(
      {
        targets: ".land3",
        zIndex: {
          value: 1,
          round: true
        },
        scale: 1,
        translateX: "-3.2rem",
        translateY: 0
      },
      "-=600"
    );
}

// 常用操作工具条swiper
var landOperateSwiper = new Swiper("#landOperateSwiper", {
  direction: "vertical",
  slidesPerView: 4,
  preventClicksPropagation: false,
  navigation: {
    nextEl: ".land-operate__next",
    prevEl: ".land-operate__prev"
  }
});
// 浇水动作
$("#wateringBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .watering").remove();
  showGif("watering", 3500);
});
// 施肥动作
$("#fertilizationBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .fertilization").remove();
  showGif("fertilization", 3500);
});

// 松土动作
$("#looseningBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .loosening").remove();
  showGif("loosening", 3000);
});

// 播种动作
$("#sowingBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .sowing").remove();
  showGif("sowing", 3200);
  $(".land2")
    .find(".seedlings")
    .delay(3500)
    .fadeIn();
});
// 铲除动画
$("#eradicateBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".eradicate").hide();
  showGif("eradicate", 3000);
  $(".land2")
    .find(".tree-wrap")
    .delay(3000)
    .hide("fast", addBtn);
});

// 杀虫动作
$("#dewormingBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .deworming").remove();
  showGif("deworming", 3000);
});

// 除草动作
$("#weedingBtn").bind("click", function() {
  $(".land").attr("disabled", true);
  var $this = $(this);
  $this.attr("disabled", true);
  $this.siblings(".aiui-badge").remove();
  $(".land2 .weeding").remove();
  showGif("weeding", 3000);
});

// 显示动画
function showGif(el, duration) {
  $(".land2")
    .find("." + el + "-gif")
    .show()
    .delay(duration)
    .fadeOut("fast", removeEl);
}
// 移除土地动画提醒和gif动画
function removeEl() {
  $(".land2")
    .find(".gif")
    .remove();
  $(".land2")
    .find(".land-bubble")
    .remove();
  // 清除虫子
  $(".land2")
    .find(".insect")
    .remove();
  // 清除草
  $(".land2")
    .find(".grass")
    .remove();
  $(".land").attr("disabled", false);
}
// 显示添加按钮
function addBtn() {
  $(".land2 .soil")
    .find(".tree-wrap")
    .remove();
  var btnEl = "<button type='button' class='land-add__btn'></button>";
  var soil = $(".land2").find(".soil");
  $(btnEl)
    .appendTo(soil)
    .fadeIn();
}

// 首页禁用日常操作按钮
$(".land-operate .swiper-slide")
  .find("button")
  .attr("disabled", true);

// 默认判断第2块地是否有操作
var $nowLand = $(".land2").find(".land-bubble");
if ($nowLand.length > 0) {
  hasOperate($nowLand);
}
// 切换地块显示与隐藏元素
$(".land").each(function(index) {
  var $this = $(this);
  $this.bind("click", function() {
    // 显示动作提示元素
    var bubble = $this.find(".land-bubble");
    if (bubble.length === 1) {
      bubble.show();
      hasOperate(bubble);
    } else {
      $(".land-operate .swiper-slide")
        .find(".aiui-badge")
        .hide();
      $(".land-operate .swiper-slide")
        .find("button")
        .attr("disabled", true);
    }
    // 清除按钮禁用状态
  });
});

function setDisableFalse(el) {
  $("#" + el + "Btn").attr("disabled", false);
  $("#" + el + "Btn")
    .siblings(".aiui-badge")
    .show();
}
function setDisableTrue(el) {
  $("#" + el + "Btn").attr("disabled", true);
  $("#" + el + "Btn")
    .siblings(".aiui-badge")
    .hide();
}

function hasOperate(el) {
  // 如果有施肥操作
  if (el.hasClass("fertilization")) {
    setDisableFalse("fertilization");
  } else {
    setDisableTrue("fertilization");
  }
  // 如果有浇水操作
  if (el.hasClass("watering")) {
    setDisableFalse("watering");
  } else {
    setDisableTrue("watering");
  }

  // 如果有铲除操作
  if (el.hasClass("eradicate")) {
    setDisableFalse("eradicate");
  } else {
    setDisableTrue("eradicate");
  }

  // 如果有松土操作
  if (el.hasClass("loosening")) {
    setDisableFalse("loosening");
  } else {
    setDisableTrue("loosening");
  }

  // 如果有播种操作
  if (el.hasClass("sowing")) {
    setDisableFalse("sowing");
  } else {
    setDisableTrue("sowing");
  }
  // 如果有采摘操作
  if (el.hasClass("reward")) {
    setDisableFalse("reward");
  } else {
    setDisableTrue("reward");
  }
  // 如果有杀虫操作
  if (el.hasClass("deworming")) {
    setDisableFalse("deworming");
  } else {
    setDisableTrue("deworming");
  }
  // 如果有除草操作
  if (el.hasClass("weeding")) {
    setDisableFalse("weeding");
  } else {
    setDisableTrue("weeding");
  }
}
