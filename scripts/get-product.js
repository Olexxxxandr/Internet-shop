import {iphones} from '../data/iphones.js';
import {ipads} from '../data/ipads.js';
import {macs} from '../data/macs.js';
import {gadgets} from '../data/gadgets.js';

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];


const listBlock = document.querySelector('.product-list');
listBlock.innerHTML += `<div class='products'>`

const products = document.querySelector('.products');

const currentHref = window.location.href;

const checkedHref = 'http://localhost:5000';

const checkedIphone = checkedHref + '/iphones';
const checkedIpad = checkedHref + '/ipads';
const checkedMac = checkedHref + '/macs';
const checkedGadgets = checkedHref + '/gadgets';

if(currentHref === checkedIphone) {
    generateItem(iphones);
} else if(currentHref === checkedIpad) {
    generateItem(ipads)
} else if(currentHref === checkedMac) {
    generateItem(macs);
} else if(currentHref === checkedGadgets) {
    generateItem(gadgets);
} else if(currentHref === checkedGadgets + '/air-pods') {
    const filtered = gadgets.filter(item => item.type === 'air-pods');
    generateItem(filtered);
} else if(currentHref === checkedGadgets + '/watch') {
    const filtered = gadgets.filter(item => item.type === 'watch');
    generateItem(filtered);
} else if(currentHref === checkedGadgets + '/air-tag') {
    const filtered = gadgets.filter(item => item.type === 'air-tag');
    generateItem(filtered);
} else if(currentHref === checkedGadgets + '/acoustic') {
    const filtered = gadgets.filter(item => item.type === 'acoustic');
    generateItem(filtered);
}

function generateItem(item) {
    item.map(i => {
        const {img, name, price, color} = i;
        products.innerHTML += `
            <div class="product-item">
                <img src=${img} alt=${name}>
                <p class="name">${name} ${name.length < 30 ? color : ""}</p>
                <p class="price">${price} грн</p>
                <button id="add-btn" class="add-to-cart">Додати</button>
            </div>
    `;
    })
}

const addToCartButtons = document.querySelectorAll("#add-btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productContainer = button.parentElement;
        const productImg = productContainer.querySelector('img').src;
        const productName = productContainer.querySelector(".name").innerHTML;
        const productPrice = productContainer.querySelector(".price").innerHTML;
        addToCart(productName, productImg, productPrice);
        location.reload();
    });
});

function addToCart(name, img, price) {
    const obj = {
        name, img, price
    }
    cartItems.push(obj);
    saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}