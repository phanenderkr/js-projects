// Init weather
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();


//DOM loads
document.addEventListener('DOMContentLoaded', getWeather);


// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    // Get and display weather with new values
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});


// Get weather
function getWeather(){
    weather.getWeather()
    .then(results=> {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
