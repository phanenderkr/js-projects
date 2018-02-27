class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL';
    }

    // Get Location data
    getLocationData(){
        this.city = localStorage.getItem('city') || this.defaultCity;
        this.state = localStorage.getItem('state') || this.defaultState;

        return {
            city: this.city,
            state: this.state
        }
    }


    // Set Location data
    setLocationData(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}