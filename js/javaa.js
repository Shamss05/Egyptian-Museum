// nav bar and footer js
function over1(){
    document.getElementById("icon1G").style.color="goldenrod";
}
function over2(){
    document.getElementById("icon2G").style.color="goldenrod";
}
function over3(){
    document.getElementById("icon3G").style.color="goldenrod";
}
function over4(){
    document.getElementById("icon4G").style.color="goldenrod";
}
function over5(){
    document.getElementById("icon5G").style.color="goldenrod";
}
function out1(){
    document.getElementById("icon1G").style.color="white";
}
function out2(){
    document.getElementById("icon2G").style.color="white";
}
function out3(){
    document.getElementById("icon3G").style.color="white";
}
function out4(){
    document.getElementById("icon4G").style.color="white";
}
function out5(){
    document.getElementById("icon5G").style.color="white";
}
// JavaScript for search functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const museumSections = document.querySelectorAll(".museum");
    const searchMessage = document.getElementById("searchMessage");
    // Function to perform search and scroll to museum if found
    function searchAndScroll() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        let found = false;
        museumSections.forEach(section => {
            const museumName = section.querySelector("h2").textContent.toLowerCase();
            if (museumName.includes(query)) {
                // Scroll to the found museum section
                section.scrollIntoView({ behavior: 'smooth' });
                // Optionally, you can highlight the found museum or do other actions here
                found = true;
                return;
            }
        });
        if (!found) {
            // Show message for no matching museum found
            searchMessage.textContent = "No matching museum found.";
            searchMessage.style.display = "block";
        } else {
            // Clear the search message if a matching museum was found
            searchMessage.textContent = "";
            searchMessage.style.display = "none";
        }
        document.cookie = searchQuery=${query}; expires=Fri, 31 Dec 9999 23:59:59 GMT;
    }

    // Restore search query from cookie
    function getCookie(name) {
        const value = ; ${document.cookie};
        const parts = value.split(; ${name}=);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const savedSearchQuery = getCookie('searchQuery');
    if (savedSearchQuery) {
        searchInput.value = savedSearchQuery;
    }
    
    // Event listener for Enter key press
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchAndScroll();
        }
    });
});
function showSearchInput() {
    const searchContainer = document.getElementById("searchContainer");
    searchContainer.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const toggleModeButton = document.getElementById("toggleModeButton");
    const body = document.body;

    // Event listener for toggle mode button click
    toggleModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Toggle the image source between moon and sun icons
        const imgmoon = document.querySelector(".imgmoon");
        if (body.classList.contains("dark-mode")) {
            imgmoon.src = "moon.jpg";
        } else {
            imgmoon.src = "sun.jpg";
        }
    });
});
// JavaScript code in main.js

// Function to move up the specified section
function moveSectionUp(sectionId) {
    const section = document.querySelector(sectionId);
    section.style.transform = "translateY(-20px)"; // Move up by 20 pixels, adjust as needed
}

// Function to move down the specified section
function moveSectionDown(sectionId) {
    const section = document.querySelector(sectionId);
    section.style.transform = "translateY(0)"; // Move down to original position
}

// Attach event listeners to each section
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".seca1, .seca2, .seca3, .seca4, .seca5, .seca6, .seca7, .seca8");
    sections.forEach(section => {
        section.addEventListener("mouseover", function() {
            moveSectionUp(#${section.id});
        });
        section.addEventListener("mouseout", function() {
            moveSectionDown(#${section.id});
        });
    });
});