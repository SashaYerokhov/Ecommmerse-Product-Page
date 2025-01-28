
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
// console.log(quantity.textContent); //0
// console.log(quantity);

let cart = document.querySelector('.header__menu-picture button');
let cartDesc = document.querySelector('.cart__desc');
const btnCart = document.querySelector('.btn__cart');
let inputValue = document.querySelector('input');
// console.log(inputValue.value);
const emptyCart = document.querySelector('.cart__desc-empty');

//  Пустой массив для корзины
let arr = [];


cart.addEventListener('click', () => {
    cartDesc.classList.toggle('open');
})


btnCart.addEventListener('click', () => {
    // нужно чтобы не было 0, а какая-та цифра
    // нужно сделать если 0 - то не выводить
    // console.log(inputValue.value); // выводит число которое в инпуте
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
    // var button = event.target;
    // var title = document.querySelector('.cart__bought-title').innerText;
    // console.log(title);
    
    // var price = document.querySelector('.cart__bought-price');
    // console.log(price);
    
    // перерменная для числа вводимого в количество - сколько нужно купить
    var amount = document.querySelector('#cart-number');
    amount = inputValue.value;
    // console.log(amount);
    
    // переменная для общей цены - цены умноженой на количество
    var result = document.querySelector('.cart__bought-result');
    result = 125 * amount;
    // console.log(result);   

    addProductCart(amount, result)
}

function addProductCart(amount, result) {
    // создаем тег div
    var item = document.createElement('div');
    // console.log(item);    
    // присвавиваем ему класс
    item.classList.add = 'item';
    // переменная для всего контента который появляется при покупке
    var cartBuy = document.querySelector('.cart__buy');
    // console.log(cartBouget);
    
    // переменная для контента при покупке
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
    // всавялем контнент в созданный div
    item.innerHTML = cartBouget;
    // console.log(cartBouget);
    
    // определяем место вставленному контенту
    cartBuy.append(item);
    // console.log(cartBouget);
    // добавили удаление товара
    item.querySelector('.btn-delete').addEventListener('click', delItem)
    emptyCart.style.display = 'none';
}


// Кнопка удаления корзины
const btnDel = document.querySelector('.btn-delete');

// console.log(emptyCart);



function delItem (event) {
    var btnClicked = event.target;
    // console.log(btnClicked); // img
    //  console.log(btnClicked.parentElement.parentElement.nextElementSibling);   
    // удаление всего контента в корзине
      btnClicked.parentElement.parentElement.parentElement.remove();
      // появление надпииси - корзина пуста
    emptyCart.style.display = 'block';
    // после удаления содержимого корзины удаляется количество в корзине
    quantity.classList.remove('buy');
}

btnDel.addEventListener('click', delItem);