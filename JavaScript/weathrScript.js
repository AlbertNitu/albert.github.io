$(document).ready(function() {  
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 60000); //Update the weather every 10 minutes.
});


function getWeather() {
if ("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude);
  });
} else { document.getElementById("weather").innerHTML="We could not find your current location. Please make sure to enable location to see the weather in your city..."
}
}
  
function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
 if (weather.units.temp == 'F') {
   if (weather.temp > 59) {
$('body').animate({backgroundColor: '#F7AC57'}, 1500);
   } else {
$('body').animate({backgroundColor: '#1192d3'}, 1500);
   }
} else if (weather.units.temp == 'C') {
   if (weather.temp > 15) {
$('body').animate({backgroundColor: '#F7AC57'}, 1500);
   } else {
$('body').animate({backgroundColor: '#1192d3'}, 1500);
   }   
} else {
  var d = new Date();
  var n = d.getMonth();
  if (n < 4 || n > 8) {
$('body').animate({backgroundColor: '#1192d3'}, 1500);
  } else {
$('body').animate({backgroundColor: '#F7AC57'}, 1500);
  }
}
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li style="font-size: 120%;"><i class="fa fa-map-marker" aria-hidden="true" style="color: red; margin-right: 8px; font-size: 130%;"></i>'+weather.city+', '+weather.region+'</li>';
      html += '<li style="font-size: 120%;" class="currently"><i class="fa fa-sun-o" aria-hidden="true" style="color: orange; margin-right: 8px; font-size: 130%;"></i>'+weather.currently+'</li><br>';
      html += '<li style="font-size: 110%; margin-right: 20px; margin-bottom: 0px;"><i class="fa fa-arrow-up" aria-hidden="true" style="color: red; margin-right: 8px; font-size: 120%;"></i>'+Math.round(weather.high)+'&deg'+weather.units.temp+'</li>';  
      html += '<li style="font-size: 110%; margin-right: 20px; margin-bottom: 0px;"><i class="fa fa-arrow-down" aria-hidden="true" style="color: #4fabc9; margin-right: 8px; font-size: 120%;"></i>'+Math.round(weather.low)+'&deg'+weather.units.temp+'</li>';  
      html += '<li style="font-size: 110%; margin-right: 20px; margin-bottom: 0px;"><i class="fa fa-tint" aria-hidden="true" style="color: blue; margin-right: 8px; font-size: 120%;"></i>'+Math.round(weather.humidity)+'%'+'</li>';
      html += '<li style="margin-right: 20px; font-size: 110%; margin-bottom: 0px;">'+Math.round(weather.wind.speed)+'<span style="text-transform: lowercase;"> ' + weather.units.speed+'</span> ('+weather.wind.direction+')'+'</li></ul>';
      var timestamp = moment(weather.updated);
      html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>'; 
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
