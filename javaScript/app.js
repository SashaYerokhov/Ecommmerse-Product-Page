
const incrementBtn = document.querySelector('.counter__inc');
const decrementBtn = document.querySelector('.counter__dec');

function addProduct() {
    incrementBtn.addEventListener('click', () => {
        let input = incrementBtn.previousElementSibling;
        // console.log(input);
        let inputValue = input.value;
        // console.log(inputValue);
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })

    decrementBtn.addEventListener('click', () => {
        let input = decrementBtn.nextElementSibling;
        // console.log(input);
        let inputValue = input.value;
        // console.log(inputValue);
        let newValue = parseInt(inputValue) - 1;
        input.value = newValue;

        if (newValue >= 0) {
            input.value = newValue;
        } else {
            input.value = 0;
        }   // console.log(newValue);
    })
    // addToCart();
}
addProduct();




/////////////////////////////////////////////////////////////////
let quantity = document.querySelector('.quantity');
let cart = document.querySelector('.header__menu-picture button');
let cartDesc = document.querySelector('.cart__desc');
const btnCart = document.querySelector('.btn__cart');
let inputValue = document.querySelector('input');
const emptyCart = document.querySelector('.cart__desc-empty');

let arr = [];


cart.addEventListener('click', () => {
    cartDesc.classList.toggle('open');
})


btnCart.addEventListener('click', () => {
    quantity.classList.add('buy');
    addToCart();
    addAllProductCart();

})

function addToCart(key) {
    if (inputValue.value !== 0) {
        quantity.textContent = inputValue.value;
    }
}

addToCart();
// addProduct();



function addAllProductCart(event) {

    var amount = document.querySelector('#cart-number');
    var result = document.querySelector('.cart__bought-result');
    result = 125 * amount;
    addProductCart(amount, result)
}

function addProductCart(amount, result) {
    var item = document.createElement('div');
    item.classList.add = 'item';
    var cartBuy = document.querySelector('.cart__buy');
    var cartBouget = `
              <div class="cart__bought">
                <div class="cart__bought-content">                  
                  <img src="./images/image-product-1-thumbnail.jpg" alt="image product thumbnail"
                    class="cart__bought-images">
                  <div class="cart__bought-name">
                    <p class="cart__bought-title">Fall Limited Edition Sneakers</p>
                    <p class="cart__bought-price">$125.00 x <span id="cart-number">${amount}</span><strong
                        class="cart__bought-result">$${result}.00</strong></p>
                  </div>
                  <button class="btn-delete">
                    <img src="./images/icon-delete.svg" alt="icon delete">
                  </button>                  
                </div>
                <a href="#" class="cart__checkout">Checkout</a>         
              </div>
    `
    item.innerHTML = cartBouget;
    
    cartBuy.append(item);
    item.querySelector('.btn-delete').addEventListener('click', delItem)
    emptyCart.style.display = 'none';
}


const btnDel = document.querySelector('.btn-delete');

function delItem (event) {
    var btnClicked = event.target;
      btnClicked.parentElement.parentElement.parentElement.remove();
    emptyCart.style.display = 'block';
    quantity.classList.remove('buy');
}

btnDel.addEventListener('click', delItem);
