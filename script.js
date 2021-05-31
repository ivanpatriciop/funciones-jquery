$(document).ready(function() {
    $(".image").hide();
    $("div.div2 p").hide();
    console.log('todo ok');
    $('div.div1 button').click(function() {
        $('div.div1 p').addClass("red");
    });
    $("div.div2 button").click(function() {
        $(".image").slideToggle('slow');
        $(".image").attr("title", "Ninja Coder");

        $("div.div2 p").show();
    });
    $("p").hover(function() {

        $(this).fadeOut("slow");
    });

    $("div.div3 button").click(function() {
        $("div.div3").append("This is another paragraph");
    });

    $("div.buttons").hide();
    $("#showBtn").click(function() {
        $("div.buttons").toggle();
    });

    $("#newDiv").click(function() {
        $("div.buttons").html('<div> <p>This is a new div</p> </div>');

    });
    $("#newText").click(function() {
        $("div.buttons p").text("This is a new text");
        $("div.buttons p").addClass("newText");

    });
    $("#fadeIn").click(function() {
        $("h3.hidden").fadeIn("slow");
    });

    $("#before").click(function() {
        $(this).before("Before paragraph");
    });

    $("#after").click(function() {
        $(this).before("After paragraph");
    });

    $("#val").click(function() {
        var x = $(this).text();
        alert(x);
    });
});