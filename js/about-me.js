
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var months=["January","February","March","April","May","June","July",
"August","September","October","November","December"];


document.getElementById("day").innerHTML = 
days[d.getDay()] + ',' + months[d.getMonth()] + ' ' + d.getDate() + ',' + d.getFullYear();

$(document).ready(function() {

  var where;
  var country;

  $.getJSON("http://ip-api.com/json", function(geo) {

    where = geo.city;
    country = geo.country;
    $('.where').html(where);

   
 

    

                fetch("http://api.openweathermap.org/data/2.5/weather?q=" + where + "&units=metric" + "&appid=1c6386de462fc10f229ac365ea8fca48")
                    .then(
                        function(response){
                            response.json().then(function(data){
                                console.log(data);
                                
                
                    temps = data.main.temp;
                    weathur = data.weather[0].description;
                    city = data.name;          
                    
                    $('.name').html(city)
                    $('.temp').html("Temp: " + temps + "C");
                    $('.weather').html("Weather: " + weathur);
                })
            }
        );
    });
  });










