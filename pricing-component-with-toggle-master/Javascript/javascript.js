const switchPlan = document.querySelector(".toggle-plan");
let planPriceMonthly = document.querySelectorAll(".month-plan");
let planPriceAnnualy = document.querySelectorAll(".annual-plan");


switchPlan.addEventListener("click", () => {
    if (switchPlan.classList.contains("active")){
        switchPlan.classList.remove("active");
        planPriceMonthly.forEach(monthly => {
            monthly.style.display = "none";
        });
        planPriceAnnualy.forEach(annualy => {
            annualy.style.display = "block";
        });
    }
    else {
        switchPlan.classList.add("active");
        planPriceMonthly.forEach(monthly => {
            monthly.style.display = "block";
        });
        planPriceAnnualy.forEach(annualy => {
            annualy.style.display = "none";
        });
    }
})