const ratingStar = document.querySelectorAll(".rate");
const submitButton = document.getElementById("btn");
const ratingCard = document.querySelector(".box1");
const thanksCard = document.querySelector(".box2");
let rateValue = false;
const errorMsg = document.querySelector("h5");
const ratingValue = document.querySelector(".rate-me");
let totalStar;

ratingStar.forEach(star => {
    star.addEventListener("click", () => {
        if (star.classList.contains("rated")) {
            star.classList.remove("rated");
            rateValue = false;
        }
        else {
            ratingStar.forEach(stared => {
                stared.classList.remove("rated")
                rateValue = false;
            })
            star.classList.add("rated");
            rateValue = true;
            totalStar = star.innerHTML;
        }
    })
    submitButton.addEventListener("click", () => {
        if (rateValue) {
            ratingCard.style.display = "none";
            thanksCard.style.display = "block";
            ratingValue.innerHTML = `You selected ${totalStar} out of 5`
        }
        else {
            errorMsg.innerText = "Please rate before submission";
            setTimeout(() => {
                errorMsg.innerText = "";
            }, 4000);
        }
    })
});
