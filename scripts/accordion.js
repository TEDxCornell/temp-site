/* We are working on it.**/





$("#EVENTquestion1").click(function() {
    if ($("#EVENTanswer1").hasClass("hidden")) {
        $("#EVENTanswer1").removeClass("hidden");
        $("#EVENTquestion1 > .arrow-up").removeClass("hidden");
        $("#EVENTquestion1 > .arrow-down").addClass("hidden");
    } else {
        $("#EVENTanswer1").addClass("hidden");
        $("#EVENTquestion1 > .arrow-up").addClass("hidden");
        $("#EVENTquestion1 > .arrow-down").removeClass("hidden");
    }

});
