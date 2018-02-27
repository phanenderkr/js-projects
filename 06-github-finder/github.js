class GitHub {
    constructor() {
        this.client_id ; //insert client id here
        this.client_secret;// insert client secret here
        this.repos_count = 5;
        this.respos_sort = `create: asc`
    }
  
    async getUser(user) {
        // Profile get request
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // repos get request
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // Profile data promise
        const profile = await profileResponse.json();

        // Repos data promise
        const repos = await reposResponse.json()
  
        return {
            profile,
            repos
        };
    }
      
  }
  