/**
 * Created by zhanglongde on 2016/9/12.
 */

$(document).ready(function() {
    var zip, city, state;

    timedBackground();
    getLocation();
    $("#tempWeather2").hide();

    function getLocation() {
        $.get("http://ipinfo.io", function(location) {
            //console.log(location);
            zip = location.postal;
            city = location.city;
            state = location.region;
            var units="imperial";

            $('.location')
                .append(city + ", " + state);
            getWeather(zip, units);
        }, "json");
    }

    function getWeather(zip, units) {
        var urlWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + zip + ",us&&units="+units+"&appid=dfe63f918180b43b0bdd747c2766ea39";
        $.getJSON(urlWeather, function(json) {
            var weathData = json.weather[0].main;
            var tempData = Math.round(json.main.temp)
            var tempData2=Math.round(((json.main.temp)-32)*(5/9));
            $('#condWeather').append(weathData);
            $('#tempWeather1').append(tempData);
            $("#tempWeather2").append(tempData2);
            tempIcon(json.main.temp);
            tempF(json.main.temp);

        });
    }

    function timedBackground() { //timed background
        var d = new Date();
        var n = d.getHours();
        // If time is after 7PM or before 6AM, apply night theme to ‘body’
        if (n >= 19 || n <= 6)
            document.body.className = "night";
        //If time is between 4PM – 7PM sunset theme to ‘body’
        else if (n > 16 && n < 19)
            document.body.className = "sunset";
        // Else use ‘day’ theme
        else
            document.body.className = "day";

        //end timed background
    }

    function tempIcon(tempData) {
        if (tempData >= 90)
            $(".wi-thermometer").addClass("red");
        if (tempData < 90 && tempData > 65)
            $(".wi-thermometer").addClass("white");
        if (tempData <= 65)
            $(".wi-thermometer").addClass("blue");

    }

    function tempF(tempData) {
        $(".btnF").click(function() {
            $(".wi").removeClass("wi-fahrenheit btnF");
            $(".wi").addClass("wi-celsius btnC");
            $("#tempWeather1").hide();
            $("#tempWeather2").show();

            tempC(tempData);
        })

    };

    function tempC(tempData) {
        $(".btnC").click(function() {
            $(".wi").removeClass("wi-celsius btnC");
            $(".wi").addClass("wi-fahrenheit btnF");
            $("#tempWeather1").show();
            $("#tempWeather2").hide();

            tempF(tempData);
        });

    };

});

//dfe63f918180b43b0bdd747c2766ea39

//http://api.openweathermap.org/data/2.5/forecast?q=20164,us&appid=dfe63f918180b43b0bdd747c2766ea39
