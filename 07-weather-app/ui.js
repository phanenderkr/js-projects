class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    // displaying everything 
    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.description.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.icon.setAttribute('z-index', 2);
        this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.feelslike_string}`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;
    }
}