// https: //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// AIzaSyAsKuC0hocfFZe2bD53oofjFOGCTGWFbT4

const goggleMapApi = {
    key: "AIzaSyAsKuC0hocfFZe2bD53oofjFOGCTGWFbT4",
    baseUrl: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD19cqU2rIzBHOPL_t8GhJJ9cmi-HNpULg&callback=initialize",
}

function change(e) {
    console.log(e);
    fetch(`${goggleMapApi.baseUrl}`).then(weather => {
        console.log(weather.json());
        return weather.json();
    });

}

const weatherApi = {
    key: "23e474955260bb00bfc59eb22f85f6ce",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

//event listener fuction on keypress
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});




//get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}




//show weather report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    } else
    if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
    } else
    if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')"
    } else
    if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.jpg')"
    } else
    if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')"
    } else
    if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/haze pic.jpg')"
    } else
    if (weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')"
    } else
    if (weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('images/sunny.jpg')"
    } else
    if (weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('images/Mist.jpg')"
    }
}


//date manage
function dateManage(dateArgs) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArgs.getFullYear();
    let month = months[dateArgs.getMonth()];
    let date = dateArgs.getDate();
    let day = days[dateArgs.getDay()];

    return `${date} ${month} (${day}), ${year} `;
}