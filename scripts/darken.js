$("#apply-member").hover(() => {
  $("#apply-member").addClass("darken")
}, () => {
  $("#apply-member").removeClass("darken")
})

$("#apply-speaker").hover(() => {
  $("#apply-speaker").addClass("darken")
}, () => {
  $("#apply-speaker").removeClass("darken")
})

$("#social-media").hover(() => {
  $("#social-media").addClass("darken")
}, () => {
  $("#social-media").removeClass("darken")
})

$("#email-contact").hover(() => {
  $("#email-contact").addClass("darken")
}, () => {
  $("#email-contact").removeClass("darken")
})


$(window).resize(function () {
  if ($(window).width() < 700) {
    $(".home-container").addClass("column-display")
    $(".apply-btn").addClass("half-width")
  } else {
    $(".home-container").removeClass("column-display")
    $(".apply-btn").addClass("half-width")
  }
});
