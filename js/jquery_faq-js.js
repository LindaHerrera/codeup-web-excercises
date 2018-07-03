$(function(){


$(".show").click(function (){
    // event.preventDefault();
        $("dd").toggleClass("invisible");

});

$(".sty").click(function(){

    $("li").last().css("background-color", "yellow");
})




});