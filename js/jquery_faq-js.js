"use strict";

$(function(){


    $(".show").click(function (){
        // event.preventDefault();???
        $("dd").toggleClass("invisible");
    });

    $(".sty").click(function(){
        $("ul li:last-child").css("background-color", "yellow");
    });

    $(".park").click(function(){
        $(this).next().css("font-weight", "bold");
    });

    $(".park2").click(function(){
        $(this).next().css("font-weight", "bold");
    });

    $(".park3").click(function(){
        $(this).next().css("font-weight", "bold");
    });

    $("li").click(function(){
        $(this).parent().children().first().css("color", "blue");
    })


});