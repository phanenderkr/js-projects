// Init weather
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();


//DOM loads
document.addEventListener('DOMContentLoaded', getWeather);


// Get weather
function getWeather(){
    weather.getWeather()
    .then(results=> {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
