/**
 * Write your solutions here
 */

$("#change-bg-color").click(function (){                    //when button #change-bg-color is clicked, the body will change to blue
    $("body").css("background-color", "blue")
});

$("#append-to-ul").click(function(){                        //when button #append-to-ul is clicked the ul of #append-to-me will fill with li's with context of text
    $("#append-to-me").append("<li>text</li>")
});

//after 2 seconds, Hello World #message, should change to Goodbye World
setTimeout(function (){
    document.getElementById("message").innerHTML = "Goodbye World!";
}, 2000);

// setTimeout(function(){
//     $("#message").text("Goodbye World");
// }, 2000); another possible solution

//when ul #hl-toggle when li is clicked only that should change color to yellow then back to white when clicked again

$("#hl-toggle li").click(function(){
    $(this).css("background-color", "yellow");
});

//^^^solution= add class of yellow to li by = $(this).toggleClass('yellow'). we don't have to put . because we are toggling the CLASS


// $("#uppercase").click(function(){
//     $("#output").text("Your name uppercased is" + $("#input").val().toUpperCase());
// });
//
// ^^^ solution. become familiar with .val() for value

//
// $("#font-grow li").dblclick(function(){
//    var fontSize = $(this).css("font-size");
//    // console.log(fontSize); //this will give us current font size
//     var newFontSize = parseFloat(fontSize) * 2 + px;
//     $(this).css('font-size', newFontSize)
// });