"use strict";

// console.log("test");


$(function(){
    $("#playButton").click(function(){
        $("#playOutput").text($("#playInput").val());
    });
// $(".codeup").on("mouseover", function (){
//     $(this).css("background-color", "yellow");
// })

        // $("li").css("font-size", "20px").css("background-color", "aqua");
        // $("p").css("background-color", "salmon");
        // $("h1").css("background-color", "papayawhip");

    $("h1").click(function () {
        $(this).css("background-color", "papayawhip");
    });

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    });



    $("li").hover(function() {
        $(this).css("color", "red");
    }, function (){
        $(this).css("color", "black");
    })



});



