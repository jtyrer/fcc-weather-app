
$(document).ready(function() {

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    getWeather(lat, lon);
    console.log($('#temp').value);
  }

  function error() {
    alert("error");
  }

  function getWeather(lat, lon) {
    var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    $.getJSON(url, function(data) {
      update(data)
    });
  }

  function update(data) {
    var city = data.name;
    var country = data.sys.country;
    var temp = Math.round(data.main.temp);
    var icon = data.weather[0].icon;
    var tempMax = data.main.temp_max;
    var tempMin = data.main.temp_min;
    var desc = data.weather[0].description;
    $("#city").html(city);
    $("#country").html(country);
    $("#temp").html(temp+'&#8451');
    $("#weatherIcon").attr("src", icon);
    $("#tempMax").html(tempMax+'&#8451');
    $("#tempMin").html(tempMin+'&#8451');
    $("#desc").html(desc);
    convertTemp(temp,tempMax,tempMin);
  }

  function convertTemp(temp,tempMax,tempMin){
    var state='celsius';
    $('#tempBtn').on('click', function(){
      if(state === 'celsius'){
        temp = Math.round(temp*9/5+32);
        tempMax = Math.round(tempMax*9/5+32);
        tempMin = Math.round(tempMin*9/5+32);
        state = 'fahrenheit';
        $("#temp").html(temp+'&#8457');
        $("#tempMax").html(tempMax+'&#8457');
        $("#tempMin").html(tempMin+'&#8457');
      } else if (state==='fahrenheit') {
        temp = Math.round((temp-32)*5/9);
        tempMax = Math.round((tempMax-32)*5/9);
        tempMin = Math.round((tempMin-32)*5/9);
        state = 'celsius';
        $("#temp").html(temp+'&#8451');
        $("#tempMax").html(tempMax+'&#8451');
        $("#tempMin").html(tempMin+'&#8451');
      }
    });

  }

}); // End of doc ready
