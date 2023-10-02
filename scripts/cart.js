import { CartProduct } from "./classes/CartProduct"; 

const cartBlock = document.querySelector('.cart-list');
const emptyCart = document.querySelector('.empty-cart');

const cartAmount = document.querySelector('.cart-amount');

const cartData = JSON.parse(localStorage.getItem('cart'));
const cartDataArray = [];

if(cartData !== null) {
    cartData.forEach(item => {
        const el = new CartProduct(item.img, item.name, item.price);
        cartDataArray.push(el);
    })
    cartAmount.classList.remove('invisible');
    cartAmount.innerHTML = cartData.length;
    cartBlock.innerHTML += `<button id="clearBtn">Очистити вибране</button>`;
} else {
    cartAmount.classList.add('invisible');
    emptyCart.classList.remove('invisible');
}

console.log(cartDataArray);

cartData.map(item => {
    cartBlock.innerHTML += `
                            <div class="cart-item">
                                <div class="cart-item-info">
                                    <img src="${item.img}" alt="">
                                    <p>${item.name}</p>
                                </div>
                                <div class="cart-item-info">
                                    <p class="price">${item.price}</p>
                                    <svg class="ico-delete" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-6v2h1.10938l1.7832,15.25586v0.00781c0.13102,0.98666 0.98774,1.73633 1.98242,1.73633h8.24805c0.99468,0 1.8514,-0.74968 1.98242,-1.73633l0.00195,-0.00781l1.7832,-15.25586h1.10938v-2h-6l-1,-1zM6.125,5h11.75l-1.75195,15h-8.24805z"/></g></g></svg>
                                </div>     
                            </div>
    `;
})

const deleteIcon = document.querySelectorAll('.ico-delete');
const clearBtn = document.getElementById('clearBtn');

deleteIcon.forEach(button => {
    button.addEventListener('click', () => {
        console.log('deleted');
    })
})

console.log(deleteIcon);

clearBtn.addEventListener('click', () => {
    const isConfirmed = confirm("Видалити вибрані?");
    if(isConfirmed) {
        cartAmount.classList.add('invisible');
        emptyCart.classList.remove('invisible');
        localStorage.clear();
        clearBtn.classList.add('unvisible');
        cartBlock.innerHTML = "";
    }
})