$(document).ready(function(){
"use strict";

    var jgXhr = $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: "f2511f1261fcaba2195f6e135c9e75d0",
        id: 4726206,
        cnt: "17",  //count set to 17 so we don't go through all 40 index
        units: "imperial"
    });

    var tableBody = $("#rowOne");

    jgXhr.done(function(data){
        console.log(data);
        for(var i = 0; i < data.list.length; i+= 8){        //loop until end of object and only give every 8th
            // var hum = data.list[i].main.humidity;        //humidity for 3 days in variable
            // console.log(hum);
            var html = "<div class='card-body card d-inline float-left text-center mx-auto w-25 p-2 my-3'>";
            html += "<div>" +"Temp "+ data.list[i].main.temp + "</div>";
            html += "<div>" + "<strong>Clouds: </strong>"+ data.list[i].weather[0].description + "</div>";     //clouds in array so place array name in array brackets
            html += "<div>" + "<strong>Humidity: </strong>"+ data.list[i].main.humidity +"%"+ "</div>";
            html += "<div>" + "<strong>Wind: </strong>"+ data.list[i].wind.speed + "</div>";
            html += "<div>" + "<strong>Pressure: </strong>" + data.list[i].main.pressure +"</div>";
            html += "</div>";
            tableBody.append(html);
        }
            $("#city-name").append(data.city.name);
        });








    });


