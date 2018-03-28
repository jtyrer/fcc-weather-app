$(document).ready(function(){

var myLat;
var myLon;

// Get user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var myLat = position.coords.latitude;
    var myLon = position.coords.longitude;
    getWeather(myLat, myLon);
  });
} else {
  $('#location').html("Location not available.");
  };


function getWeather(myLat, myLon){
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lon="+myLon+"&lat="+myLat +'', function(json){

   $('#temp').html(JSON.stringify(Math.floor(json.main.temp)+"&#8451;").replace(/\"/g, ""));
   $('#location').html(JSON.stringify(json.name + ', ' + json.sys.country).replace(/\"/g, ""));

   $('#weatherIcon').html('<img class="icon" src="' + json.weather[0].icon + '">');
}) //End of JSON
  }; //End of getWeather

//Fahrenheit Celsius conversion

$('#tempBtn').on('click', function(){
  if(this.innerHTML === 'Fahrenheit'){
    this.innerHTML = 'Celsius';
  } else {
    this.innerHTML = 'Fahrenheit';
  }
}); // End of conversion button
   });//End of get function
