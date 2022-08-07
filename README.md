# TRUweathEr 


>  Let's See the Weather

## Table of Contents

* Description

* * Problems Solved

* References


## Description
This application allows the user to view the current and future weather forecast for multiple cities.

* When a user searches for a city they are presented with the current and future forecast for that city and the city is added to the search history.
* * The current forecast contains the city name, date, temperature, wind speed, humidity, weather icon and UV Index.
* * The future forecast contains have the temperature, wind, date, humidity and weather icon.
* * Between 19h00 and 02h00, the current block turns dark to signify night-time.

* The UV Index will change colour to indicate whether it's favourable or severe.

* A user can click on the search history to get the current and future forecasts of previously searched cities.

### Problems Solved

* Created the index.html and css using bootstrap, JQuery, fontawesome for icons and google fonts.

* Used Third-party APIs to get the weather forecast conditions and UV Index per city.

* The hardest part was the on.submit eventlistener for the form, couldn't get it to work for some reason. Had to change it to on.click the button for it to work, after several tries.

* Also struggled with the colour change for the UV Index, the classes were overlapping each other. Until I realised to apply .removeClass(), to remove all classes before applying a new class to prevent overlapping.

## References
URL for application:


