class GitHub {
    constructor() {
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
        const profileRes = await fetch(`https://api.github.com/users/${user}`);
        const profile = await profileRes.json();
  
        return {
            profile 
        };
    }
      
  }
  