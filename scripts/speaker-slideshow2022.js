/* For 2022 Talks */
const SLIDES22 = $(".slides22");

function nextSlide22() {
  let nextNum22 = SLIDES22.index($(".slides22:not(.hidden)")) + 1 + 1;
  if (nextNum22 > SLIDES22.length) {
    nextNum22 = 1;
  }
  showSlide22(nextNum22);
}

function prevSlide22() {
  let prevNum22 = SLIDES22.index($(".slides22:not(.hidden)")) - 1 + 1;
  if (prevNum22 <= 0) {
    prevNum22 = SLIDES22.length;
  }
  showSlide22(prevNum22);
}

function showSlide22(num) {
  let index = num - 1;
  let currentSlide22 = SLIDES22.eq(index);

    SLIDES22.addClass("hidden");
    currentSlide22.removeClass("hidden")
}

var timer22 = setInterval(nextSlide22, 10000);

$(".arrow-right").click(function() {
    nextSlide22();
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 10000);
  });

$(".arrow-left").click(function() {
    prevSlide22();
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 10000);
});

/* Below: set the timer to 3min if the visitor clicks to see a specific speaker so that they have enough time to read*/

$("#toSpeaker1-22").click(function() {
    showSlide22(1);
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker2-22").click(function() {
    showSlide22(2);
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker3-22").click(function() {
    showSlide22(3);
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker4-22").click(function() {
    showSlide22(4);
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker5-22").click(function() {
  showSlide22(5);
  clearInterval(timer22);
  timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker6-22").click(function() {
  showSlide22(6);
  clearInterval(timer22);
  timer22 = setInterval(nextSlide22, 180000);
})

$("#toSpeaker7-22").click(function() {
    showSlide22(7);
    clearInterval(timer22);
    timer22 = setInterval(nextSlide22, 180000);
})
