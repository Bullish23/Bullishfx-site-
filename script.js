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
    // 1. Get values from your actual HTML IDs
    const balance = parseFloat(document.getElementById('balance').value);
    const risk = parseFloat(document.getElementById('risk').value);
    const stoploss = parseFloat(document.getElementById('stoploss').value);
    
    // 2. Set a default instrument value (10 is standard for Forex)
    const instrumentValue = 10; 

    // 3. Validation
    if (!balance || !stoploss || stoploss <= 0) {
        alert("Please enter a valid Balance and Stop Loss.");
        return;
    }

    // 4. The Math
    const riskDollars = balance * (risk / 100);
    let lotSize = riskDollars / (stoploss * instrumentValue);

    // 5. Update the UI (Matches the IDs you shared earlier)
    document.getElementById('risk-amount').innerText = "$" + riskDollars.toFixed(2);
    document.getElementById('lot-result').innerText = lotSize.toFixed(2);
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optional: Animate the hamburger bars into an 'X'
    mobileMenu.classList.toggle('is-active');
});

// This ensures the script waits for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobile-menu');
    const navList = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Check if it's working in the console (Press F12 to see)
            console.log("Menu clicked!"); 
            navList.classList.toggle('active');
        });
    }
});

const menuBtn = document.getElementById('mobile-menu');
const mobilenavLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    console.log("Menu clicked!"); // If this shows up in console, the button is perfect.
    mobilenavLinks.classList.toggle('active');
});

<script>
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        // 1. Immediately wipe the client's information from the boxes
        form.reset(); 

        // 2. Show the "Message Sent" pop-up
        status.style.display = "block";

        // 3. Make the pop-up disappear after 3 seconds
        setTimeout(() => {
          status.style.display = "none";
        }, 3000);

      } else {
        alert("Oops! There was a problem sending your message.");
      }
    }).catch(error => {
      alert("Error connecting to the server.");
    });
  }
  
  form.addEventListener("submit", handleSubmit);
</script>

