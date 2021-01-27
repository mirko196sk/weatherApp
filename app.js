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
    .catch(error => console.error('chyba na strane servera... prosím skúte to neskôr'))
}

//connect with https address and sending data from user on the server and back on display
function displayData(response) {
    const {name} = response;
    const {humidity} = response.main;
    const {main, temp} = response.main;
    const {icon} = response.weather[0];
    const {description} = response.weather[0];
    const {speed} = response.wind;
    document.querySelector('.city').innerHTML = name;
    document.querySelector('.humidity').innerHTML = 'Humidity: ' + humidity +' %';
    document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
    document.querySelector('.temperature').innerHTML = temp + ' °C';
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.wind').innerHTML = 'Wind speed: ' + speed + ' km/h';
}

//box for writing city when you want know actual weather and search button
document.querySelector('.searchBtn').addEventListener('click', () => {
    let searchCity = document.querySelector('.searchBox').value;
    if(searchCity){
        fetchWeather(searchCity)
    }
});
