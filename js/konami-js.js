"use strict";

/*
 $(document).keyup(function(event){
     console.log(event.keyCode);
 });


 target area; body of the page, when keys are pressed, compare EACH event to this string:
         xx xx xx xx xx  x x x. if string matches this
             then do this

 https://stackoverflow.com/questions/3278556/for-loop-with-if-else-statement
*/

// $(document).keyup(function(event){
//     console.log(event.keyCode);
//
// });
//
//
// // loop to compare to my array
// // if true do this
//
// // up == 38

$(document).ready(function(event){

    // Array sequence for correct Konami code
    var code = [38, 38, 40, 40, 37, 39, 37,39, 66, 65, 13];

    var counter = 0;

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
            $("#takei").slideToggle("900", function () {
                console.log("okay");
            })
        }
    });
})

