// Init
const github = new Github();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input Event Listener
searchUser.addEventListener('keyup',(e)=> {
    // Get input text
    const userInput = e.target.value;

    // Validation
    if(userInput !==''){
        // Make Http call
        github.getUser(userInput)
        .then(data=>{
            // Validation
            if(data.profile.message !== 'Not Found'){
                // Show profile
            }else{
                // Show alert
            }
        })
        .catch(error => console.log(error));
        ;
    }else{
        // Clear profile
    }
})