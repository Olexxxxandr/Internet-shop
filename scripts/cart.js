const cartBlock = document.querySelector('.cart-list');
const emptyCart = document.querySelector('.empty-cart');

const cartData = JSON.parse(localStorage.getItem('cart'));

if(cartData !== null) {
    cartBlock.innerHTML += `<button id="clearBtn">Очистити вибране</button>`;
} else {
    emptyCart.classList.remove('invisible');
}

cartData.map(item => {
    cartBlock.innerHTML += `
                            <div class="cart-item">
                                <img src="${item.img}" alt="">
                                <p>${item.name}</p>
                                <p class="price">${item.price}</p>
                            </div>
    `;
})

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
    const isConfirmed = confirm("Видалити вибрані?");
    if(isConfirmed) {
        emptyCart.classList.remove('invisible');
        localStorage.clear();
        clearBtn.classList.add('unvisible');
        cartBlock.innerHTML = "";
    }
})