const infoBlock = document.querySelector('.info');
const invisibleParagraph = infoBlock.querySelector('.invisible');

const btn = infoBlock.querySelector('.button-info');

btn.addEventListener('click', () => {
    invisibleParagraph.classList.toggle('invisible');
})