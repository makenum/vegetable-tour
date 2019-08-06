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

$(".land:nth-child(1)").on("click", function() {
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
});

$(".land:nth-child(2)").on("click", function() {
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
});

$(".land:nth-child(3)").on("click", function() {
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
    landRightOne();
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
});

var landLeftOne = function() {
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
    ) // relative offset
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
    ); // absolute offset
};

var landLeftTwo = function() {
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
    ) // relative offset
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
    ); // absolute offset
};

var landLeftThree = function() {
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
    ) // relative offset
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
    ); // absolute offset
};


var landRightOne =function(){
  
}
var landRightTwo =function(){

}
var landRightThree =function(){

}