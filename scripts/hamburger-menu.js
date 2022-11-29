$("#navbutton").click(function() {
    if ($("#cross").hasClass("hidden")) {
        $("#cross").removeClass("hidden");
        $("#burger").addClass("hidden");
        $("#main-nav").removeClass("hidden");
        $(".main").addClass("transparent");
      } else {
        $("#cross").addClass("hidden");
        $("#burger").removeClass("hidden");
        $("#main-nav").addClass("hidden");
        $(".main").removeClass("transparent");
      }
  });

  $(".events-button").click(function() {
    if ($(".events-button > .arrow-up").hasClass("hidden")) {
        $(".events-button > .arrow-up").removeClass("hidden");
        $(".events-button > .arrow-down").addClass("hidden");
        $(".dropdown").removeClass("hidden");
      } else {
        $(".events-button > .arrow-up").addClass("hidden");
        $(".events-button > .arrow-down").removeClass("hidden");
        $(".dropdown").addClass("hidden");
      }
    if ($(".dropdown").hasClass("hidden_dropdown")){
      $(".dropdown").removeClass("hidden_dropdown");
    } else{
      $(".dropdown").addClass("hidden_dropdown");
    }
  });

  $(".subsection").click(function() {
    $("#cross").addClass("hidden");
    $("#burger").removeClass("hidden");
    $("#main-nav").addClass("hidden");
    $(".main").removeClass("transparent");
    }
);
