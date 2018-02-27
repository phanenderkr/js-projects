// Init weather
const weather = new Weather('Boston', 'MA');


//DOM loads
document.addEventListener('DOMContentLoaded', getWeather);


// Get weather
function getWeather(){
    weather.getWeather()
    .then(results=> {
        console.log(results);
    })
    .catch(err => console.log(err));
}
