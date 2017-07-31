var temp,condition, windSpeed, humidity, title,latitude,longitude;

function getWeather(lat,lng) {
  $.ajax({
    headers: {
    "X-Mashape-Key": "iMVl6lH7jymshTUTR0O5Dl36kjACp10V8lujsneXQQgEKnHx6z",
    "Accept": "application/json"
  },
    url: "https://simple-weather.p.mashape.com/weatherdata?lat="+String(lat)+"&lng="+String(lng),
    success: function(r) {
        if (typeof r === 'string') {
            r = JSON.parse(r); 
        }

        temp=r.query.results.channel.item.condition.temp;
        condition=r.query.results.channel.item.condition.text;
        title=r.query.results.channel.item.title;
        windSpeed=r.query.results.channel.wind.speed;      humidity=r.query.results.channel.atmosphere.humidity;
        
        $('#title').text(title);
        $('#temp').text("The temperature out side is "+temp+" C.");
        $('#windSpeed').text("Currently, the wind speed is "+windSpeed+" km per hour.");
        $('#humidity').text("The humidity is at "+humidity+"%.");
        $('#condition').text("It is "+condition.toLowerCase()+".");
        $('#date').text(date);            
    }
  });
}


$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitude=position.coords.latitude.toFixed(1);
                longitude=position.coords.longitude.toFixed(1);
                getWeather(latitude,longitude);
        
        });
    }


  });
    


    
