let email = document.getElementById('email-here');
let submit = document.getElementById('submit');
let trialPage = document.querySelector('.product-trial');


let notify = document.createElement('p');
notify.id = 'notify';
notify.innerText = 'Thank-you for your Subscription, We will Notify you soon.';

// function to create Alert messeges.

function validateEmail() {
    trialPage.appendChild(notify);
    setTimeout(() => {
        trialPage.removeChild(notify);
    }, 3000);
}
// create a regular function.

let emailPattrn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

submit.addEventListener('click', () => {
    if (emailPattrn.test(email.value)) {
        validateEmail();
    }
    else {
        notify.innerText = ' Sorry! Please provide a valid email Address'
        notify.style.color = 'red';
        validateEmail();
    }
})