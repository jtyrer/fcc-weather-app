//Not been able to get the Fahrenheit/Celsius button working

// var fahrenheit = false;

$(document).ready(function() {
  //    $('#tempBtn').on('click', function(data){
  //    if(this.innerHTML === 'Fahrenheit'){
  //      this.innerHTML = 'Celsius';
  //      fahrenheit = true;
  //     update(data);
  //    } else {
  //      this.innerHTML = 'Fahrenheit';
  //      fahrenheit = false;
  //      update(data);
  //    }
  // });

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    getWeather(lat, lon);
  }

  function error() {
    alert("error");
  }

  function getWeather(lat, lon) {
    var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    $.getJSON(url, function(data) {
      update(data);
    });
  }

  function update(data) {
    var city = data.name;
    var country = data.sys.country;
    var temp = Math.round(data.main.temp);
    //  var fahTemp = Math.round(data.main.temp) * 9/5 + 32;
    var icon = data.weather[0].icon;
    var tempMax = data.main.temp_max;
    var tempMin = data.main.temp_min;
    var desc = data.weather[0].description;

    $("#city").html(city);
    $("#country").html(country);
    //    if (fahrenheit = true){
    //      $('#temp').html(fahTemp);
    //    } else {
    $("#temp").html(temp);
    //    }
    $("#weatherIcon").attr("src", icon);
    $("#tempMax").html(tempMax);
    $("#tempMin").html(tempMin);
    $("#desc").html(desc);
  }
}); // End of doc ready
