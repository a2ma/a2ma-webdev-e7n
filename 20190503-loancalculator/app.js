// listen for submit event
// document.querySelector('#loan-form').addEventListener('submit', calculateResults);
document.querySelector('#loan-form').addEventListener('submit', function(e){
    // hide results
    document.querySelector('#results').style.display = 'none';
    //show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

//  calc results
function calculateResults() {
    console.log('calculating...');

    // UI vars
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        // hide (previous) results
        document.querySelector('#results').style.display = 'block';
        // hide loader
        document.querySelector('#loading').style.display = 'none';
    } else {
        showError('Please check your numbers.');
    }
}

function showError(err) {
    // hide (previous) results
    document.querySelector('#results').style.display = 'none';
    // hide loader
    document.querySelector('#loading').style.display = 'none';
    
    // create div
    const errorDiv = document.createElement('div');

    // get elements between which error mssg will be inserted
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add error classes
    errorDiv.className = 'alert alert-danger';

    //add message content
    errorDiv.appendChild(document.createTextNode(err));
    console.log(err);

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(function(){ document.querySelector('.alert').remove()}, 3000);
}

