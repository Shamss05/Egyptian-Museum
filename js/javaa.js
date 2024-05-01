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
});
var button = document.getElementById('mybutton');
var image = document.getElementById('imgbutton');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Change the image source
    image.src = "moon.jpg";
});
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mybutton");
    const image = document.getElementById("imgbutton");
    let isDarkMode = false;

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Toggle dark mode
        isDarkMode = !isDarkMode;

        // Change the image source based on mode
        if (isDarkMode) {
            image.src = "moon.jpg"; // Dark mode image
            document.body.style.backgroundColor ="burlywood"; // Dark mode background color
        } else {
            image.src = "sun.jpg"; // Light mode image
            document.body.style.backgroundColor = "beige"; // Light mode background color
        }
    });
});
