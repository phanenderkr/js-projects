document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

    // Create xhr object
    const xhr = new XMLHttpRequest();

    // Open request
    const numberOfJokes = document.getElementById('number').value || 1;
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    let output =``;

    // On load
    xhr.onload = function(){
        if(this.status === 200 && JSON.parse(this.responseText).type === 'success'){
            const jokesObject = JSON.parse(this.responseText);
            jokesObject.value.forEach(function(jokeOject){
                output += `<li>${jokeOject.joke}</li>`;
            });
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    
    // Send to finalize everything
    xhr.send();

    e.preventDefault();
}