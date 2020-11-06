/* Drop-Downs */
$(document).ready(function() {
    /* Change of icon when cursor enters a league dropdown */
    $("#bunDrop").on("mouseenter",function() {
        $("#bun-icon").attr("src", "images/dropdowns/bun-8a2be2.png");
    });

    $("#eplDrop").on("mouseenter",function() {
        $("#epl-icon").attr("src", "images/dropdowns/epl-8a2be2.png");
    });

    $("#flcDrop").on("mouseenter",function() {
        $("#flc-icon").attr("src", "images/dropdowns/flc-8a2be2.png");
    });

    $("#gaaDrop").on("mouseenter",function() {
        $("#gaa-icon").attr("src", "images/dropdowns/gaa-8a2be2.png");
    });

    $("#loiDrop").on("mouseenter",function() {
        $("#loi-icon").attr("src", "images/dropdowns/loi-8a2be2.png") ;
    });

    $("#nhlDrop").on("mouseenter",function() {
        $("#nhl-icon").attr("src", "images/dropdowns/nhl-8a2be2.png");
    });

    $("#slrDrop").on("mouseenter",function() {
        $("#slr-icon").attr("src", "images/dropdowns/slr-8a2be2.png");
    });

    /* Changes back to default icon upon cursor exit */
    $("#bunDrop").on("mouseleave",function() {
        $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
    });

    $("#eplDrop").on("mouseleave",function() {
        $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
    });

    $("#flcDrop").on("mouseleave",function() {
        $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
    });

    $("#gaaDrop").on("mouseleave",function() {
        $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
    });

    $("#loiDrop").on("mouseleave",function() {
        $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
    });

    $("#nhlDrop").on("mouseleave",function() {
        $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
    });

    $("#slrDrop").on("mouseleave",function() {
        $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
    });

    /* add club crest animation down here */
    
});