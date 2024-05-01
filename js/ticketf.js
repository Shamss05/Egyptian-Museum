function search() {
    var searchQuery = document.getElementById("searchInputf").value.toLowerCase();
    // Remove existing highlights
    var elements = document.querySelectorAll("body *");
    elements.forEach(function(element) {
        element.innerHTML = element.innerHTML.replace(/<mark>|<\/mark>/gi, '');
    });

    // Highlight matching text
    if (searchQuery !== "") {
        var regex = new RegExp(searchQuery, "gi");
        elements.forEach(function(element) {
            element.innerHTML = element.innerHTML.replace(regex, function(match) {
                return "<mark>" + match + "</mark>";
            });
        });
    }
}



function showAlert() {

    var requiredInputs = document.querySelectorAll('input[required], select[required]');

    // Check if all required fields are filled
    var allFilled = true;
    requiredInputs.forEach(function(input) {
        if (!input.value.trim()) {
            allFilled = false;
            return;
        }
    });

    // Show alert message only if all required fields are filled
    if (allFilled) {
        alert("Your ticket has been booked successfully!");
    } else {
        alert("Please fill out all required fields.");
    }
}



document.addEventListener("DOMContentLoaded", function() {
    var openingsHour = document.getElementById("openingsHourf");

    // Add mouseover event listener
    openingsHour.addEventListener("mouseover", function() {
        openingsHour.style.color = "darkslategray"; // Change text color to red
    });

    // Add mouseout event listener
    openingsHour.addEventListener("mouseout", function() {
        openingsHour.style.color = ""; // Reset text color to default
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('museum-linkf');

    // Add event listener for mouseover event
    link.addEventListener('mouseover', function () {
        // Change the color to blue when mouse hovers over
        link.style.color = 'blue';
    });

    link.addEventListener('mouseout', function () {
        link.style.color = '';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var bookTicketButton = document.getElementById("bookTicketButtonf");

    bookTicketButton.addEventListener("mouseover", function () {
        // Change the background color 
        bookTicketButton.style.backgroundColor = "blue";
        // Change the text color
        bookTicketButton.style.color = "white";
    });

    // Add event listener for mouseout event
    bookTicketButton.addEventListener("mouseout", function () {
        // Restore the default background color
        bookTicketButton.style.backgroundColor = "";
        bookTicketButton.style.color = "";
    });
});

// Function to set mode preference in localStorage
function setModePreference(mode) {
    localStorage.setItem('mode', mode);
}

function getModePreference() {
    return localStorage.getItem('mode');
}

// Function to toggle between light and dark mode
function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-themef');

    // Check if dark mode is active and update storage
    if (body.classList.contains('dark-themef')) {
        setModePreference('dark');
    } else {
        setModePreference('light');
    }
}

// Function to update UI based on mode preference stored in local Storage
function updateUIMode() {
    var mode = getModePreference();
    if (mode === 'dark') {
        document.body.classList.add('dark-themef');
    } else {
        document.body.classList.remove('dark-themef');
    }
}

// Listen for mode changes and update local Storage
document.addEventListener('DOMContentLoaded', function() {
    updateUIMode();

    var conf = document.getElementById("conf");
    conf.onclick = function() {
        toggleMode();
    };
});


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