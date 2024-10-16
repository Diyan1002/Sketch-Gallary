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

    // Prevent scrolling initially
    let scrollingAllowed = false;

    // Show the message when the page loads
    scrollMessage.style.display = 'block';

    // Add event listener to the scroll icon
    scrollIcon.addEventListener("click", function () {
        // Enable scrolling
        scrollingAllowed = true;

        // Add the 'active' class to change the icon color to green
        scrollIndicator.classList.add("active");

        // Hide the message
        scrollMessage.style.display = 'none';

        // Allow scrolling by changing the body's overflow property
        document.body.style.overflow = "auto";
    });

    // Disable scrolling by preventing default behavior until the eye is clicked
    window.addEventListener("scroll", function (event) {
        if (!scrollingAllowed) {
            event.preventDefault();
            window.scrollTo(0, 0); // Keep scroll position at the top
        }
    });
});

