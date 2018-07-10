$(document).ready(function(){

    var jgXhr = $.get('https://api.openweathermap.org/data/2.5/forecast', {
        APPID: "f2511f1261fcaba2195f6e135c9e75d0",
        id: 4726206
    });

    jgXhr.done(function(data){
        console.log(data);data.list[8].main.humidity;
    })
});