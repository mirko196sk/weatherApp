
//apikey with connect on the url
const apiKey = "ef31825640bf5ccee3c869021574aa08"

//sending primmary data to url from user
function fetchWeather(city) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
    + city 
    + '&units=metric&appid='
    + apiKey)
    .then(response => response.json())
    .then(displayData)
    .catch(error => console.error('error in server, please try again later.'))
}

//connect with https address and sending data from user on the server and back on display
function displayData(response) {
    const {name} = response;
    const {humidity} = response.main;
    const {temp} = response.main;
    const {icon} = response.weather[0];
    const {description} = response.weather[0];
    const {speed} = response.wind;
    document.querySelector('.city').innerHTML = name;
    document.querySelector('.humidity').innerHTML = 'Humidity: ' + humidity +' %';
    document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
    document.querySelector('.temperature').innerHTML = Math.floor(temp) + '°C';
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.wind').innerHTML = 'Wind speed: ' + speed + ' km/h';
    function calcultePxCity() {
        //calculating value the city -->HTML<--
        let cityPx = document.querySelector('.city');
        let px = (cityPx.clientWidth - 2);
        let R = (Math.floor(px / 2)); //R = result (Math.floor(px / 2) = result
        let M = 150 - R; // M = middle world 
        let L = M - 4; // L = left value in css
        cityPx.style.left = L + 'px';

        //calculating value the description -->HTML<--
        let descriptionWeather = document.querySelector('.description');
        let px1 = (descriptionWeather.clientWidth - 2);
        let R1 = (Math.floor(px1 / 2)); //R = result (Math.floor(px / 2) = result
        let M1 = 150 - R1; // M = middle world 
        let L1 = M1 - 4; // L = left value in css
        descriptionWeather.style.left = L1 + 'px';
    }
    calcultePxCity()
}

//box for writing city when you want know actual weather and search button
document.querySelector('.searchBtn').addEventListener('click', () => {
    let searchCity = document.querySelector('.searchBox').value;
    if(searchCity){
        fetchWeather(searchCity)
    }
});
