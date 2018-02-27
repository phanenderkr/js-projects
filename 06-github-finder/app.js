// Initialize GitHub
const github = new GitHub();
// Init UI 
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup',(e) => {
    // Get input value
    const userText = e.target.value;

    if (userText !== '') {
      // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                // Show repos
                ui.showRepos(data.repos);
            }
        });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
