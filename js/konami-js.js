"use strict";


 // $(document).keyup(function(event){
 //     console.log(event.keyCode);
 // });




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

