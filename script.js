// Script for any future JS interactions (e.g., lightbox)
console.log("Gallery initialized!");

// You can add more interaction here, like modals, lightboxes, etc.
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("animated-logo");

    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Get the scroll position
        let scrollPosition = window.scrollY;

        // Move the logo down as you scroll (adjust the speed with the division factor)
        logo.style.transform = `translateY(${scrollPosition / 2}px)`;
    });
});

// script.js

// script.js

// script.js

// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close");
    const starRating = document.getElementById("starRating");
    const submitRatingBtn = document.getElementById("submitRating");
    const userNameInput = document.getElementById("userName");

    // Google Apps Script Web App URL
    const GOOGLE_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw4GNmPEqnZ67CT_-3PdPSmZ0JeN5wt68pcE45Zm4hDtK_OnFrKcm1E4fqs2ZUoGLHluA/exec'; // Paste your Google Apps Script URL here

    // Open modal on gallery item click
    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', function () {
            const imageUrl = this.parentElement.getAttribute('data-image');
            fullImage.src = imageUrl;
            modal.style.display = "block";
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // Handle star rating
    let selectedRating = 0;
    starRating.addEventListener('click', function (e) {
        if (e.target.dataset.star) {
            selectedRating = e.target.dataset.star;
            // Remove active class from all stars
            document.querySelectorAll('.stars span').forEach(star => {
                star.classList.remove('active');
            });
            // Add active class to the selected star
            for (let i = 0; i < selectedRating; i++) {
                document.querySelectorAll('.stars span')[i].classList.add('active');
            }
        }
    });

    // Submit rating
    submitRatingBtn.addEventListener('click', function () {
        const name = userNameInput.value.trim();
        if (name === "") {
            alert('Please enter your name before submitting!');
        } else {
            // Create payload to send to Google Apps Script
            const payload = {
                name: name
            };

            // Send POST request to Google Apps Script
            fetch(GOOGLE_WEB_APP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Name submitted successfully!');
                } else {
                    alert('There was an issue submitting the name: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the name.');
            });

            // Clear the form and close the modal
            userNameInput.value = "";
            selectedRating = 0;
            // Reset stars
            document.querySelectorAll('.stars span').forEach(star => {
                star.classList.remove('active');
            });
            modal.style.display = "none";
        }
    });

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollIcon = document.getElementById("scrollIcon");
    const scrollMessage = document.getElementById("scrollMessage");
    const scrollIndicator = document.querySelector(".scroll-indicator");

    // Function to detect mobile devices (screen width less than 768px)
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Show or hide the scroll indicator based on the device
    function handleScrollIndicator() {
        if (isMobile()) {
            scrollIndicator.style.display = "none"; // Hide the indicator on mobile
        } else {
            scrollIndicator.style.display = "flex"; // Show the indicator on desktop/laptop
        }
    }

    // Call the function when the page loads to check the screen size
    handleScrollIndicator();

    // Add event listener to resize, in case the window is resized
    window.addEventListener("resize", handleScrollIndicator);

    // Prevent scrolling initially if the screen is not mobile
    let scrollingAllowed = false;
    if (!isMobile()) {
        document.body.style.overflow = "hidden"; // Disable scrolling initially
    }

    // Add event listener to the scroll icon for enabling scroll
    scrollIcon.addEventListener("click", function () {
        if (!isMobile()) {
            // Enable scrolling on non-mobile devices
            scrollingAllowed = true;
            scrollIndicator.classList.add("active"); // Change the icon color to green
            scrollMessage.style.display = "none"; // Hide the scroll message
            document.body.style.overflow = "auto"; // Allow scrolling
        }
    });

    // Disable scrolling until the eye icon is clicked (for larger screens)
    window.addEventListener("scroll", function (event) {
        if (!scrollingAllowed && !isMobile()) {
            event.preventDefault();
            window.scrollTo(0, 0); // Keep scroll position at the top
        }
    });
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('clientName').value;
    const number = document.getElementById('whatsAppNumber').value;
    const details = document.getElementById('sketchDetails').value;

    // Your WhatsApp number (replace it with your actual WhatsApp number)
    const yourWhatsAppNumber = '923180731330'; // E.g., '923001234567' for Pakistan (without '+')

    // Construct the WhatsApp message URL
    const message = `Hi, my name is ${name}. I'd like to order a sketch. Here are the details: ${details}. You can contact me at: ${number}`;
    const whatsAppURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat with the message pre-filled
    window.open(whatsAppURL, '_blank');
});
