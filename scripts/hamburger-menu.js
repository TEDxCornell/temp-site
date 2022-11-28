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
