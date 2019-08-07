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
  $(this).on("click", function() {
    // 第一个元素点击
    if (index === 0) {
      if ($(this).hasClass("land1")) {
        landLeftOne();
        $(this).removeClass("land1");
        $(this).addClass("land2");
        $(this)
          .next()
          .removeClass("land2")
          .addClass("land3");
        $(this)
          .next()
          .next()
          .removeClass("land3")
          .addClass("land1");
      }
      if ($(this).hasClass("land3")) {
        landRightOne();
        $(this).removeClass("land3");
        $(this).addClass("land2");
        $(this)
          .next()
          .removeClass("land1")
          .addClass("land3");
        $(this)
          .next()
          .next()
          .removeClass("land2")
          .addClass("land1");
      }
    }
    // 第二个元素点击
    if (index === 1) {
      if ($(this).hasClass("land1")) {
        landLeftTwo();
        $(this).removeClass("land1");
        $(this).addClass("land2");
        $(this)
          .next()
          .removeClass("land2")
          .addClass("land3");
        $(this)
          .prev()
          .removeClass("land3")
          .addClass("land1");
      }
      if ($(this).hasClass("land3")) {
        landRightTwo();
        $(this).removeClass("land3");
        $(this).addClass("land2");
        $(this)
          .next()
          .removeClass("land1")
          .addClass("land3");
        $(this)
          .prev()
          .removeClass("land2")
          .addClass("land1");
      }
    }
    // 第三个元素点击
    if (index === 2) {
      if ($(this).hasClass("land1")) {
        landLeftThree();
        $(this).removeClass("land1");
        $(this).addClass("land2");
        $(this)
          .prev()
          .removeClass("land3")
          .addClass("land1");
        $(this)
          .prev()
          .prev()
          .removeClass("land2")
          .addClass("land3");
      }
      if ($(this).hasClass("land3")) {
        landRightThree();
        $(this).removeClass("land3");
        $(this).addClass("land2");
        $(this)
          .prev()
          .removeClass("land2")
          .addClass("land1");
        $(this)
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
