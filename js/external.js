'use strict';

// ---sample exercise---

// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// var color = prompt("What\'s your favorite color?");
// console.log(color);
//
// alert("Woah! " +(color) + " is my favorite color too!");

// ------movie rental-------

// var rentalDayPerDollars = prompt("What\'s the cost to rent a movie per day?");
// console.log(rentalDayPerDollars);
//
// alert("Awh yeah!  $" + (rentalDayPerDollars) + " thanks for refreshing my memory!");
//
// var littleMermaidDays = prompt ("How many days did you rent the Little Mermaid?");
// console.log(littleMermaidDays);
//
// var brotherBearDays = prompt("How many days did you rent Brother Bear?");
// console.log(brotherBearDays);
//
// var herculesDays = prompt("How about Hercules?");
// console.log(herculesDays);
//
// var totalRentalCost = (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * parseInt(rentalDayPerDollars);
// console.log(totalRentalCost);
//
// alert("Your total cost is $" + (totalRentalCost));


// ----weekly rate-----

// var googleRatePerHour =  prompt("How much does Google pay per hour?");
// console.log(googleRatePerHour);
//
//
// var amazonRatePerHour = prompt("How much does Amazon pay per hour?");
// console.log(amazonRatePerHour);
//
// var  facebookRatePerHour = prompt("And how about Facebook? What\'s their hourly rate?");
// console.log(facebookRatePerHour);
//
// alert("Thanks! You're a big help!");
//
// var googlehours = 6;
// var amazonhours = 4;
// var facebookhours = 10;
//
// var totalPayment = googleRatePerHour * googlehours
// totalPayment += amazonRatePerHour * amazonhours
// totalPayment += facebookRatePerHour * facebookhours
//
// alert("Your total payment for the week for working for all three companies is $" +(totalPayment) + "!");


// ----student enrollment-----

alert("Now for some True or False questions!");

var scheduleConflict = prompt("Class will not conflict with my schedule outside of class.")
console.log(scheduleConflict);

var classNotFull = prompt("The class roster will be empty at time of enrollment.");
console.log(classNotFull);

var studentEnrolled = classNotFull && scheduleConflict;
console.log(studentEnrolled);

alert("It is " + (studentEnrolled) + " that you can now enroll.");