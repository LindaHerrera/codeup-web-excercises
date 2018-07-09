$(document).ready(function(){
"use strict";


var people = [
    {
        name: "Fred",
        favColor: "red"
    },

    {
        name: "Sally",
        favColor: "blue"
    },

    {
        name: "Tom",
        favColor: "yellow"
    }
];




        document.getElementById("add-names-btn").addEventListener("click", function(){
            for (var i = 0; i< people.length; i++) {
                console.log(people[i]);
                document.getElementById("names-list").innerHTML= "<li>"+people[i].name+"</li>";
            }

                })




});


// add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.