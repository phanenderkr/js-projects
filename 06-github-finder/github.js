class Github{
    constructor(){
        // Github OAuth credentials
        this.client_id = '5b351258f2a3329b015e';
        this.client_secret = `4489dc91b6bd6bad7faa445cb7bcb3852b21e4c2`;
    }

    // Get Method
    async getUser(user){
        // Get request for profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // Profile data
        const profile = await profileResponse.json();

        // Returning profile data and repos
        return{
            profile
        }
    }
}