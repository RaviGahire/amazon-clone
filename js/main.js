const headerLocation = document.querySelector('.header-location');
const addressModal = document.querySelector('.address-modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const defaultAddress = document.querySelectorAll('.address-status');

function showModal() {
    addressModal.classList.add('active');
}
function hideModal() {
    addressModal.classList.remove('active');
}

headerLocation.addEventListener('click', (e) => {
    e.stopPropagation();
    showModal();
});

defaultAddress.forEach((add) => {
    defaultAddress.forEach(addr => addr.innerText = 'Make as Default Address');
    add.addEventListener('click', (e) => {
        defaultAddress.forEach(addr => addr.innerText = 'Make Default Address');
        e.currentTarget.innerText = 'Default Address';

    })

})

modalCloseBtn.addEventListener('click', hideModal);
