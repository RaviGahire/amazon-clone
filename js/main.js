
// Address Modal
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

// Navbar
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navLinks = document.querySelector('.nav-links');
const navCloseBtn = document.querySelector('.nav-close-btn');

// Open menu
navToggleBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close menu
navCloseBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Home page carousel
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");






fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((proData) => {
        console.log(proData)
    });

// Factrory function 

function Allproducts() {


}