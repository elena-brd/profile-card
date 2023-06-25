const mainBtnClose = document.querySelector('.btn-main-close');
const btnClose = document.querySelector('.btn-close');
const updateBtn = document.querySelector('.btn-update');
const cardContent = document.getElementById('card-content');

function closeCard() {
    const container = document.querySelector('.container');
    container.remove();
}

function closeCard() {
    cardContent.remove();
}

function updateCardText() {
    cardContent.textContent = 'Loading...';
    cardContent.style.textAlign = 'center';
}


mainBtnClose.addEventListener('click', closeCard);
btnClose.addEventListener('click', closeCard);
updateBtn.addEventListener('click', updateCardText);