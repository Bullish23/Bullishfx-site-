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