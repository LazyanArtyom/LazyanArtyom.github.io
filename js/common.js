$(function() {

    /* Modal portfolio */
    $(".portfolio-block").click(function() {

        // vercnum e nkari src u poxum
        $att = $(this).children().attr("src");
        $link = $(this).children().attr("alt");
        $(".modal-content").attr("src", $att);
        $(".modal-content").wrap("<a href="  + $link + "></a>");

        // description
        $description = $(this).find(".des").text();
        $(".caption").html($description);
        $(".modal").css("display", "block");
        $("body").css("overflow", "hidden");

    });

    $(".close").click(function() {
        $(".modal").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
    /*_--------- modal ----------*/


    // animations
    $(window).scroll(function() {

        if ($(this).scrollTop() > 480) {
            $(".bar-chart li").addClass("animated fadeInUp");
        }
        if ($(this).scrollTop() > 1300) {
            $(".process-text").addClass("animated fadeInLeft");
            $(".development-img").addClass("animated fadeInRight");
        }
        if ($(this).scrollTop() > 1550) {
            $(".form").addClass("animated fadeInUp");
        }
    });

    // scroll nav animate
    $(".nav a, .top, .navbar-bottom a").mPageScroll2id({
        offset: 0, // nra hamara vor cheta kpni verevin mi qich margin top unena
        scrollSpeed: 700 // aragutyunna
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you. Your message has been sent.");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
