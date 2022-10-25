# TRUweathEr 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Description](#project-description)

  - [Problems Solved](#problems-solved)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)


## Project Description

This application allows the user to view the current and future weather forecast for multiple cities.

* When a user searches for a city they are presented with the current and future forecast for that city and the city is added to the search history.
    * The current forecast contains the city name, date, temperature, wind speed, humidity, weather icon and UV Index.
    * The future forecast contains have the temperature, wind, date, humidity and weather icon.
    * Between 19h00 and 02h00, the current block turns dark to signify night-time.

* The UV Index will change colour to indicate whether it's favourable or severe.

* A user can click on the search history to get the current and future forecasts of previously searched cities.

### Problems Solved

* Created the index.html and css using bootstrap, JQuery, fontawesome for icons and google fonts.

* Used Third-party APIs to get the weather forecast conditions and UV Index per city.

* The hardest part was the on.submit eventlistener for the form, couldn't get it to work for some reason. Had to change it to on.click the button for it to work, after several tries.

* Also struggled with the colour change for the UV Index, the classes were overlapping each other. Until I realised to apply .removeClass(), to remove all classes before applying a new class to prevent overlapping.

## Screenshots

![Webpage Image](/assets/images/truweather.png)
>  Let's See the Weather

![Webpage Git](/assets/images/TRUweathEr.gif)


## Usage

Click the link below to open the web page.

URL for application:

https://nenebeji.github.io/TRUweathEr/

## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/TRUweathEr

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review

## Tests

Tests were run using console and browser page.

## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com

## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.