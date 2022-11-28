/* For 2021 Talks */
const SLIDES21 = $(".slides21");

function nextSlide() {
  let nextNum = SLIDES21.index($(".slides21:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES21.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES21.index($(".slides21:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES21.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES21.eq(index);

    SLIDES21.addClass("hidden");
    currentSlide.removeClass("hidden")
}

var timer = setInterval(nextSlide, 60000);

$(".arrow-right").click(function() {
    nextSlide();
    clearInterval(timer);
    timer = setInterval(nextSlide, 60000);
  });

$(".arrow-left").click(function() {
    prevSlide();
    clearInterval(timer);
    timer = setInterval(nextSlide, 60000);
});

/* Below: set the timer to 3min if the visitor clicks to see a specific speaker so that they have enough time to read*/

$("#toSpeaker1").click(function() {
    showSlide(1);
    clearInterval(timer);
    timer = setInterval(nextSlide, 180000);
})

$("#toSpeaker2").click(function() {
    showSlide(2);
    clearInterval(timer);
    timer = setInterval(nextSlide, 180000);
})

$("#toSpeaker3").click(function() {
    showSlide(3);
    clearInterval(timer);
    timer = setInterval(nextSlide, 180000);
})

$("#toSpeaker4").click(function() {
    showSlide(4);
    clearInterval(timer);
    timer = setInterval(nextSlide, 180000);
})

$("#toSpeaker5").click(function() {
  showSlide(5);
  clearInterval(timer);
  timer = setInterval(nextSlide, 180000);
})

$("#toSpeaker6").click(function() {
  showSlide(6);
  clearInterval(timer);
  timer = setInterval(nextSlide, 180000);
})
