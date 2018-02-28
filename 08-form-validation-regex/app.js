// Form Blur event listeners
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);


// Functions
function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-za-z]{2,10}$/; // 2-10 word characters

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
}


function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?/; // 5 numbers and optional dash, 4numbers

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
}


function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([A-za-z0-9_\-\.]+)@([A-za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/; // something@something.something

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}


function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}   