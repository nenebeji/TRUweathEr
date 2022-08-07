var city = $('#city');
var searchinput = $('#citysearch');
var searchform = $('#search-form');
var searchhistory = $('#searchhistory');
var searchbtn = $('#searchbtn');
var UVIndex = $('#dayindex');

city;

// handle submit of searched city
function handleFormSubmit(event) {
    event.preventDefault();

    fetchforecast(searchinput.val());

    var searchhistItem = searchinput.val();

    searchhistory.prepend('<li>' + '<button class="btn btn-secondary" id="select" data-name="'+searchhistItem+'">' + searchhistItem + '</button>' + '</li>');

    if($('.historyList').length > 5) {
        $('.historyList').splice(5);
    }

    searchinput.val('');
    
    $('#select').on('click', historyClickHandler);
}

// handle history click
function historyClickHandler(event) {
    var searchedcity = event.target.getAttribute('data-name');
  
    if (searchedcity) {
      fetchforecast(searchedcity);

    }
};

//event listener
searchbtn.on('click', handleFormSubmit);

// fetch url
function fetchforecast(city) {
    //city = 'London'
    var APIkey = '9ab17c4002c412673ac783a9c0da3a9e';
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIkey;
    fetch(queryURL)
    .then(function (response) {
        if(response.ok) {
            response.json().then(function (data) {
                displayforecast(data);
                fetchUVI(data);
            })
        }
        else{
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to openweathermap');
    });
    

    // get UV Index
   function fetchUVI(data) {
    var UVIurl = "https://api.openweathermap.org/data/3.0/onecall?lat="+data.city.coord.lat+"&lon="+data.city.coord.lon+"&units=metric&exclude=minutely,hourly,daily,alerts&appid="+APIkey;
    fetch(UVIurl)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                UVIndex.text(data.current.uvi);
                if(data.current.uvi === 0) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('greyI');
                }
                else if(data.current.uvi > 0 && data.current.uvi <= 2.59) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('greenI');
                }
                else if (data.current.uvi >= 2.6 && data.current.uvi <= 5.59) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('yellowI');
                }
                else if (data.current.uvi >= 5.6 && data.current.uvi <= 7.59) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('orangeI');
                }
                else if (data.current.uvi >= 7.6 && data.current.uvi <= 10.59) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('redI');
                }
                else if(data.current.uvi >= 10.6) {
                    $(UVIndex).removeClass();
                    $(UVIndex).addClass('purpleI');
                }
            })
        }
        else{
            alert('Error: ' + response.statusText);
        }
    })
   }
};

//fetchforecast();

function displayforecast(data) {
    city.text(data.city.name);
    // current forecast
    var icontoday = document.createElement("img")
    icontoday.src = 'http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png'
    $('#todayicon').html(icontoday);
    $('#daytemp').text(data.list[0].main.temp);
    $('#daywind').text(data.list[0].wind.speed);
    $('#dayhumidity').text(data.list[0].main.humidity);

    // +1 day forecast
    var icon1 = document.createElement("img")
    icon1.src = 'http://openweathermap.org/img/wn/'+data.list[8].weather[0].icon+'@2x.png'
    $('#icon1').html(icon1);
    $('#temp1').text(data.list[8].main.temp);
    $('#wind1').text(data.list[8].wind.speed);
    $('#humidity1').text(data.list[8].main.humidity);

    // +2 day forecast
    var icon2 = document.createElement("img")
    icon2.src = 'http://openweathermap.org/img/wn/'+data.list[16].weather[0].icon+'@2x.png'
    $('#icon2').html(icon2);
    $('#temp2').text(data.list[16].main.temp);
    $('#wind2').text(data.list[16].wind.speed);
    $('#humidity2').text(data.list[16].main.humidity);

    // +3 day forecast
    var icon3 = document.createElement("img")
    icon3.src = 'http://openweathermap.org/img/wn/'+data.list[24].weather[0].icon+'@2x.png'
    $('#icon3').html(icon3);
    $('#temp3').text(data.list[24].main.temp);
    $('#wind3').text(data.list[24].wind.speed);
    $('#humidity3').text(data.list[24].main.humidity);

   // +4 day forecast
   var icon4 = document.createElement("img")
   icon4.src = 'http://openweathermap.org/img/wn/'+data.list[32].weather[0].icon+'@2x.png'
   $('#icon4').html(icon4);
   $('#temp4').text(data.list[32].main.temp);
   $('#wind4').text(data.list[32].wind.speed);
   $('#humidity4').text(data.list[32].main.humidity);

   // +5 day forecast
   var icon5 = document.createElement("img")
   icon5.src = 'http://openweathermap.org/img/wn/'+data.list[39].weather[0].icon+'@2x.png'
   $('#icon5').html(icon5);
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

// set night theme

if (moment().hour() >= 19 || moment().hour() <= 2 ) {
    $('#current').addClass('nighttime');
}
else {
    $('#current').removeClass('nighttime');
}
