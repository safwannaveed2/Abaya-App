// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// State
let cart = JSON.parse(localStorage.getItem('abayaCart')) || [];

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    if(cartCountElement) cartCountElement.innerText = totalItems;
}

// Add to Cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('abayaCart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart');
}

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple basic toggle logic, styles need to handle 'active' class
        if(navLinks.classList.contains('active')) {
             navLinks.style.display = 'flex';
             navLinks.style.flexDirection = 'column';
             navLinks.style.position = 'absolute';
             navLinks.style.top = '70px';
             navLinks.style.left = '0';
             navLinks.style.width = '100%';
             navLinks.style.background = '#FFFFF0';
             navLinks.style.padding = '1rem';
             navLinks.style.borderBottom = '1px solid #ccc';
        } else {
            navLinks.style.display = 'none';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Smooth Scroll for specific links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
