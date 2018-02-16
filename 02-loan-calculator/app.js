//Variables
const loading = document.getElementById('loading');
const results = document.getElementById('results');

// Listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){
    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const noOfYears = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
   
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatedPayments = parseFloat(noOfYears.value) * 12;

    // Monthly Payments
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    

    //to check if monthly payment is finite
    if(isFinite(monthly)){
        
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*12).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    }
    //Loading
    showLoading(isFinite(monthly));
    e.preventDefault();
}

// Show error
function showError(error){
    // Get elements where we need to place this error
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Create a div
    const errorDiv = document.createElement('div');

    //Add classes alert alert-danger
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv,heading);

    // Clear error after 3 seconds
    setTimeout(function(){
        errorDiv.remove();
    },2000)
}

// Loading
loading.style.display = 'none';
results.style.display = 'none';

function showLoading(monthlyIsFinite){
    loading.style.display = 'block';
    results.style.display = 'none';
    setTimeout(function(){
        loading.style.display = 'none';
        if(monthlyIsFinite){
            results.style.display = 'block';
        }else{
            
            showError('Please check your numbers');
        }
        
                
    },1000);
}

//Show results
