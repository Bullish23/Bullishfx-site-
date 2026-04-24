// BullishFX Site Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("BullishFX Platform: Online");

    // 1. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only apply to links that stay on the same page (like #features)
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Simple Market "Open/Closed" Status
    // Forex markets are generally closed on weekends
    const checkMarketStatus = () => {
        const now = new Date();
        const day = now.getUTCDay(); // 0 is Sunday, 6 is Saturday
        const statusElement = document.getElementById('market-status');
        
        if (statusElement) {
            if (day === 0 || day === 6) {
                statusElement.innerHTML = "● Markets are CLOSED (Weekend)";
                statusElement.style.color = "#ef4444"; // Red
            } else {
                statusElement.innerHTML = "● Markets are OPEN";
                statusElement.style.color = "#22c55e"; // Green
            }
        }
    };

    checkMarketStatus();
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function calculateLot() {
    // 1. Get values from the HTML IDs
    const instrumentValue = parseFloat(document.getElementById('instrument').value);
    const balance = parseFloat(document.getElementById('balance').value);
    const risk = parseFloat(document.getElementById('risk').value);
    const stoploss = parseFloat(document.getElementById('stoploss').value);

    // 2. Validation
    if (!balance || !stoploss || stoploss <= 0) {
        alert("Please enter a valid Balance and Stop Loss pips.");
        return;
    }

    // 3. The Math
    const riskDollars = balance * (risk / 100);
    let lotSize = riskDollars / (stoploss * instrumentValue);

    // 4. Update the UI
    document.getElementById('risk-amount').innerText = "$" + riskDollars.toLocaleString(undefined, {minimumFractionDigits: 2});
    document.getElementById('lot-result').innerText = lotSize.toFixed(2) + " Lots";
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optional: Animate the hamburger bars into an 'X'
    mobileMenu.classList.toggle('is-active');
});