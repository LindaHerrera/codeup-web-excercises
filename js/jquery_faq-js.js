"use strict";

$(function(){

//shows dd's with class of invisible when button is clicked
    $(".show").click(function (){
        // event.preventDefault();???
        $("dd").toggleClass("invisible");
    });
//highlightslast li of each ul when button clicked
    $(".sty").click(function(){
        $("ul li:last-child").css("background-color", "yellow");
    });
//bolds all li items when respective h3 is clicked
    $(".park").click(function(){
        $(this).next().css("font-weight", "bold");
    });
//bolds all li items when respective h3 is clicked
    $(".park2").click(function(){
        $(this).next().css("font-weight", "bold");
    });
/// bolds all li items when respective h3 is clicked
    $(".park3").click(function(){
        $(this).next().css("font-weight", "bold");
    });
//when any li is clicked the first li of that list changes color
    $("li").click(function(){
        $(this).parent().children().first().css("color", "blue");
    })


});