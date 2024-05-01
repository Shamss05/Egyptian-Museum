function toggleText() {
    var extraText = event.target.previousElementSibling;
    // Check if the additional text is currently hidden
    if (extraText.style.display === "none")
    // If hidden, show the additional text and update the button text 
    {
        extraText.style.display = "block";
        event.target.textContent = "Read Less";
    } else {
        // If visible, hide the additional text and update the button text
        extraText.style.display = "none";
        event.target.textContent = "Read More";
    }
}

function search() {
    // Get the value of the search input
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


