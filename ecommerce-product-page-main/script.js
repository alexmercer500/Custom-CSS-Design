
let shoeQuantity = document.getElementById("shoeNumb");
let addShoe = document.querySelector(".add-to");
let removeShoe = document.querySelector(".remove-to");
let addButton = document.getElementById("addutton");
let cartItem = document.getElementById("cartlist");
let mainImage = document.querySelector(".sneaker");
let thumbImage = document.querySelectorAll(".preview");
let cartView = document.querySelector(".cart");
let cartInside = document.querySelector(".insideCart");

const newBlock = document.createElement('div');
newBlock.id = 'new-block';

mainImage.addEventListener('click', () => {
  
    document.body.appendChild(newBlock);
    previewImage = document.createElement('img');
    previewImage.id = 'preview-image';
    newBlock.appendChild(previewImage)
    previewImage.src = mainImage.src
})

newBlock.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    else {
        document.body.removeChild(newBlock);
    }

})

let mediaGallary = Array.from(thumbImage);


// User profile control------>
const userAccount = document.querySelector('.avatar');
const userAccountTab = document.querySelector('.use-profile');

userAccount.addEventListener('click', () => {
    userAccountTab.classList.toggle('active-pro')
})

// Product media control start here

const preBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImage = 0;
preBtn.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        mainImage.src = mediaGallary[currentImage].src;
    } else {
        currentImage = mediaGallary.length - 1;
        mainImage.src = mediaGallary[currentImage].src;
    }
})
nextBtn.addEventListener('click', () => {
    if (currentImage < mediaGallary.length - 1) {
        currentImage++;
        mainImage.src = mediaGallary[currentImage].src;
    } else {
        currentImage = 0;
        mainImage.src = mediaGallary[currentImage].src;
    }
})

let shoeCount = 0;
//element for inside cart items

let deleteCart = document.getElementById("trash");
let finalPrice = document.querySelector(".final-check");
let totalPrice = document.getElementById("total-price");
let emptyCart = document.createElement("h3");
emptyCart.id = "empty-cart";
emptyCart.innerText = "Your Cart is Empty";
cartInside.appendChild(emptyCart);

// Shoe Quantity and add to cart event

addShoe.addEventListener("click", function () {
    shoeCount++;
    shoeQuantity.innerText = shoeCount;
})

removeShoe.addEventListener("click", function () {
    if (shoeCount > 0) {
        shoeCount--;
        shoeQuantity.innerText = shoeCount;
    }
})


// shoe Quantity and total price calculations in cart box

addButton.addEventListener("click", function () {
    totalPrice.innerHTML = `$125 x ${shoeCount} ${125 * shoeCount}`
    if (shoeCount === 0) {
        cartItem.innerHTML = "";
        finalPrice.style.display = "none";
        cartInside.appendChild(emptyCart);
    }
    else {
        cartItem.innerHTML = shoeCount;
        finalPrice.style.display = "block"
        cartInside.removeChild(emptyCart);

    }
})
// Show inside the Cart Items Event

cartView.addEventListener("click", function () {
    if (cartInside.style.display === "none") {
        cartInside.style.display = "block";
    }
    else {
        cartInside.style.display = "none";
    }
})
// delete Cart items

deleteCart.addEventListener("click", () => {
    shoeCount = 0;
    cartItem.innerHTML = "";
    shoeQuantity.innerText = shoeCount;
    finalPrice.style.display = "none";
    cartInside.appendChild(emptyCart);
})

// image slideshow Event

thumbImage.forEach(preview => {
    preview.addEventListener("click", () => {
        mainImage.src = preview.src;
    })
})