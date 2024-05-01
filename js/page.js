// nav bar and footer js
function over1() {
        document.getElementById("icon1G").style.color = "goldenrod";
}
function over2() {
        document.getElementById("icon2G").style.color = "goldenrod";
}
function over3() {
        document.getElementById("icon3G").style.color = "goldenrod";
}
function over4() {
        document.getElementById("icon4G").style.color = "goldenrod";
}
function over5() {
        document.getElementById("icon5G").style.color = "goldenrod";
}
function out1() {
        document.getElementById("icon1G").style.color = "white";
}
function out2() {
        document.getElementById("icon2G").style.color = "white";
}
function out3() {
        document.getElementById("icon3G").style.color = "white";
}
function out4() {
        document.getElementById("icon4G").style.color = "white";
}
function out5() {
        document.getElementById("icon5G").style.color = "white";
}
//light dark mode 
var darkmode = document.getElementById("darkmode");
darkmode.onclick = function () {
        document.body.classList.toggle("dark-theme");
}
function search() {
        var searchQuery = document.getElementById("searchInputee").value.toLowerCase();
        //remove existing Highlidhts
        var elements = document.querySelectorAll("body *");
        elements.forEach(function(element) {
                element.innerHTML = element.innerHTML.replace(/<mark>|<\/mark>/gi, '');
        });
        //Highlidhts matching text
        if (searchQuery !== "") {
                var regex = new RegExp(searchQuery, "gi");
                elements.forEach(function(element) {
                        element.innerHTML = element.innerHTML.replace(regex, function(match){
                                return "<mark>" + match + "</mark>";
                        });
                });
        }
}