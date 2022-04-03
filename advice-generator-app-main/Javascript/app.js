const dice = document.querySelector(".juggle");
const adviceNumb = document.querySelector(".advice-number");
const randomAdvice = document.querySelector(".advice");

function rollDice(){
    fetch('https://api.adviceslip.com/advice').then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
        randomAdvice.innerHTML = JSON.stringify(data.slip.advice);
        let givenAdvice = JSON.stringify(data.slip.id);
        adviceNumb.innerHTML = "ADVICE: " + givenAdvice;
    }).catch((err) => {
        console.log('rejected', err);
    })
}

dice.addEventListener("click", rollDice);
window.onload = rollDice();

