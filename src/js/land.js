$(".land:nth-child(1)").on("click", function() {
  if ($(this).hasClass("land1")) {
    $(this)
      .siblings()
      .css("z-index", "0");
    $(this).css("z-index", 10);
    landOne(1, 2, 3);
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
});
$(".land:nth-child(3)").on("click", function() {
  if ($(this).hasClass("land1")) {
    $(this)
      .siblings()
      .css("z-index", 0);
    $(this).css("z-index", 10);
    landTwo(1, 2, 3);
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
});

$(".land:nth-child(2)").on("click", function() {
  if ($(this).hasClass("land1")) {
    $(this)
      .siblings()
      .css("z-index", 0);
    $(this).css("z-index", 10);
    landThree(1, 2, 3);
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
});

var landOne = function(index1, index2, index3) {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650,
    complete: function(anim) {
      return anim.completed;
    }
  });

  tl.add({
    targets: ".land" + index1,
    translateX: "3.2rem",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land" + index2,
        scale: 0.8,
        translateX: "2.6rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ) // relative offset
    .add(
      {
        targets: ".land" + index3,
        scale: 0.8,
        translateX: "-6.4rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ); // absolute offset
};

var landTwo = function(index1, index2, index3) {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land" + index1,
    translateX: "-3.2rem",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land" + index2,
        scale: 0.8,
        translateX: "5.2rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ) // relative offset
    .add(
      {
        targets: ".land" + index3,
        scale: 0.8,
        translateX: "-2.6rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ); // absolute offset
};

var landThree = function(index1, index2, index3) {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land" + index1,
    translateX: "0",
    translateY: "0",
    scale: 1
  })
    .add(
      {
        targets: ".land" + index2,
        scale: 0.8,
        translateX: "-1.5rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ) // relative offset
    .add(
      {
        targets: ".land" + index3,
        scale: 0.8,
        translateX: "1.5rem",
        translateY: "-0.2rem"
      },
      "-=600"
    ); // absolute offset
};
