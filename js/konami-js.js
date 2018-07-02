"use strict";

 // $(document).keyup(function(event){
 //     console.log(event.keyCode);
 // });


// for page title
$(".top, .top2").hover(function (){
    $(this).css("color", "red");
}, function (){
    $(this).css("color", "#cdcdb9");
});



    // array for Konami code
    var code = [38, 38, 40, 40, 37, 39, 37,39, 66, 65, 13];


    var counter = 0;

    // compare input to array
    $(document).keyup(function(event){
        console.log(event.keyCode);

        if (event.keyCode == code[counter]) {
            counter++;
            console.log(counter);
        } else {
            counter = 0;
            console.log(counter);

        }
        if (counter == code.length) {
            $("#Gtakei").show("slow")
                .animate({left: "+=500"}, 1000)
                .queue(function(){
                    $(this).addClass("slow").dequeue();
                })
                .animate({left: "-=900"}, 1000)
                .queue(function(){
                    $(this).removeClass("slow").dequeue;
                })
            $("#sound").trigger("play");


        }
    });




