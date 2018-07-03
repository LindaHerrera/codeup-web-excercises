$(function(){


$(".show").click(function (){
    // event.preventDefault();
        $("dd").toggleClass("invisible");

});

$(".sty").click(function(){

    $("ul li:last-child").css("background-color", "yellow");
})




});