$(".land").each(function(index) {
  var land = $(this);
  land.find(".soil").on("click", function() {
    console.log(index);
    switch (index) {
      case 0:
        land
          .addClass("on")
          .siblings()
          .removeClass("on");
        landStyleOne(index);
        break;
      case 2:
        land
          .addClass("on")
          .siblings()
          .removeClass("on");
          landStyleTwo(index);
      default:
        break;
    }
  });
});

var landStyleOne = function(index) {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land.first",
    zIndex: {
      value: 1
    },
    translateX: "3.2rem",
    translateY: "0.2rem",
    scale: 1
  })
    .add(
      {
        targets: ".land.second",
        scale: 0.8,
        translateX: "2.6rem"
      },
      "-=600"
    ) // relative offset
    .add(
      {
        targets: ".land.third",
        scale: 0.8,
        translateX: "-6.4rem"
      },
      "-=600"
    ); // absolute offset
};
var landStyleTwo = function(index) {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 650
  });

  tl.add({
    targets: ".land.first",
    zIndex: {
      value: 1
    },
    translateX: "3.2rem",
    translateY: "0.2rem",
    scale: 1
  })
    .add(
      {
        targets: ".land.second",
        scale: 0.8,
        translateX: "2.6rem"
      },
      "-=600"
    ) // relative offset
    .add(
      {
        targets: ".land.third",
        scale: 0.8,
        translateX: "-6.4rem"
      },
      "-=600"
    ); // absolute offset
};