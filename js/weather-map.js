$(document).ready(function(){
"use strict";

    var jgXhr = $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: "f2511f1261fcaba2195f6e135c9e75d0",
        id: 4726206,
        cnt: "17"                               //count set to 17 so we don't go through all 40 index
    });

    var tableBody = $(".col-sm");

    jgXhr.done(function(data){
        // console.log(data);
        for(var i = 0; i < data.list.length; i+= 8){        //loop until end of object and only give every 8th
            // var hum = data.list[i].main.humidity;        //humidity for 3 days in variable
            // console.log(hum);
            var html = "<div>";
            html += "<div>" + data.list[i].main.temp + "</div>";
            html += "<div>" + data.list[i].main.humidity + "</div>";
            html += "</div>";
            tableBody.append(html);
        }
        });















    });


