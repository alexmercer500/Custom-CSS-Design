const billAmount = document.querySelector(".biil-amount");
const person = document.querySelector(".party");
let tipPercentage = document.querySelectorAll(".tip-btn");
const customTip = document.querySelector(".custom-tip");

const tipAmount = document.getElementById("tipToe");
let totalBillAmount = document.getElementById("billToe");
const resetAll = document.querySelector(".reset");
let totalTip = null;

// Formula to Calculate Total Tip and Total Bill.

function billCalculate() {
    totalTip = (billAmount.value * tip) / 100;
    totalBill = parseInt(billAmount.value) + totalTip;
    tipAmount.innerHTML = (totalTip / person.value).toFixed(2); // .toFixed method to round upto 2 digit after decimal.
    totalBillPerson = totalBill / person.value;
    totalBillAmount.innerHTML = totalBillPerson.toFixed(2);
}

// to remove active class when other cell is selected.
function resetFunc() {
    tipPercentage.forEach(remove => {
        remove.classList.remove("active");
    })
}

tipPercentage.forEach(tipcalc => {
    tipcalc.addEventListener("click", () => {
        customTip.value = null;
        if (billAmount.value < 1  ||  person.value < 1) 
        return alert("Please Enter Total Bill Amount And Number Of People")
        else {
            tip = parseInt(tipcalc.innerHTML);
            billCalculate();
            if (tipcalc.classList.contains("active"))
                tipcalc.classList.remove("active");
            else {
                resetFunc();
                tipcalc.classList.add("active");
            }
        }
    })
});

customTip.addEventListener("input", () => {
    tip = parseInt(customTip.value);
    billCalculate();
})

resetAll.addEventListener("click", () => {
    tipAmount.innerHTML = 0;
    totalBillAmount.innerHTML = 0;
    billAmount.value = null;
    person.value = null;
    customTip.value = null;
    resetFunc();
})

