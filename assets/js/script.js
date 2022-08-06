var city = $('#city');
var searchinput = $('#citysearch');
var searchbtn = $('#searchbtn');

city;

// fetch url
function fetchforecast(city) {
    city = 'london';
    var APIkey = '9ab17c4002c412673ac783a9c0da3a9e';
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIkey;
    fetch(queryURL)
    .then(function (response) {
        if(response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displayforecast(data);
            })
        }
        else{
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to openweathermap');
    });
};
fetchforecast();

function displayforecast(data) {
    console.log(data);
    city.text(data.city.name);
    // current forecast
    console.log(data.list[0]);
    $('#daytemp').text(data.list[0].main.temp);
    $('#daywind').text(data.list[0].wind.speed);
    $('#dayhumidity').text(data.list[0].main.humidity);

    // +1 day forecast
    console.log(data.list[8]);
    $('#temp1').text(data.list[8].main.temp);
    $('#wind1').text(data.list[8].wind.speed);
    $('#humidity1').text(data.list[8].main.humidity);
    // +2 day forecast
    console.log(data.list[16]);
    $('#temp2').text(data.list[16].main.temp);
    $('#wind2').text(data.list[16].wind.speed);
    $('#humidity2').text(data.list[16].main.humidity);
    // +3 day forecast
    console.log(data.list[24]);
    $('#temp3').text(data.list[24].main.temp);
    $('#wind3').text(data.list[24].wind.speed);
    $('#humidity3').text(data.list[24].main.humidity);
   // +4 day forecast
   console.log(data.list[32]);
   $('#temp4').text(data.list[32].main.temp);
   $('#wind4').text(data.list[32].wind.speed);
   $('#humidity4').text(data.list[32].main.humidity);
   // +5 day forecast
   console.log(data.list[39]);
   $('#temp5').text(data.list[39].main.temp);
   $('#wind5').text(data.list[39].wind.speed);
   $('#humidity5').text(data.list[39].main.humidity);
}




// set dates
$('#today').text(moment().format('DD/MM/YYYY'));
$('#plus1').text(moment().add(1, 'day').format('DD/MM/YYYY'));
$('#plus2').text(moment().add(2, 'days').format('DD/MM/YYYY'));
$('#plus3').text(moment().add(3, 'days').format('DD/MM/YYYY'));
$('#plus4').text(moment().add(4, 'days').format('DD/MM/YYYY'));
$('#plus5').text(moment().add(5, 'days').format('DD/MM/YYYY'));

// city.text('London'); set text content

console.log(moment().format('DD/MM/YYYY'));
console.log(moment().add(1, 'day').format('DD/MM/YYYY'));