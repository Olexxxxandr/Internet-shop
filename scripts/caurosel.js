//--------------------------GETTING DATA-----------------------------
const cauroselBlock = document.querySelector('.caurosel-block');
const caurosel = document.getElementById('caurosel');

const arrows = document.querySelectorAll('.arrow');
console.log(arrows);

const images = [
    "https://www.apple.com/euro/iphone/home/j/screens_alt/images/meta/iphone__ky2k6x5u6vue_og.png",
    "https://sota.kh.ua/image/data/News/iphone-14-pro-news-03.jpg",
    "https://images.ctfassets.net/2yd1b0rk61ek/10Wn9tj66w3iyrdkyiO4FV/bc8ba2617988ed55d34857f47e0e4130/apple_herobanner_en.jpg",
    "https://ms.detector.media/doc/images/news/29630/ArticleImage_29630.webp",
];

//--------------------------STARTING-----------------------------
let numberOfImg = 0;
let intervalId;

updateCarousel();
startInterval();

//--------------------------LOGIC-----------------------------
arrows[0].addEventListener('click', () => {
    numberOfImg = (numberOfImg - 1 + images.length) % images.length;
    updateCarousel();
    resetInterval()
});

arrows[1].addEventListener('click', () => {
    numberOfImg = (numberOfImg + 1) % images.length;
    updateCarousel();
    resetInterval()
});

function createImg(image, alt) {
    return `<img src="${image}" alt="${alt}">`;
}

function updateCarousel() {
    caurosel.innerHTML = createImg(images[numberOfImg], `photo${numberOfImg}`);
}

//--------------------------HOVERING-----------------------------
cauroselBlock.addEventListener('mouseover', () => {
    arrows[0].classList.add('appear');
    arrows[1].classList.add('appear');
});

cauroselBlock.addEventListener('mouseleave', () => {
    arrows[0].classList.remove('appear');
    arrows[1].classList.remove('appear');
});

//--------------------------INTERVAL-----------------------------

function startInterval() {
     intervalId = setInterval(() => {
        numberOfImg = (numberOfImg + 1) % images.length;
        updateCarousel();
    }, 5000);
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}