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


// document.write("<h1>for you prosewr </h1>");

//popup masseage
function openPopup() {
    document.getElementById("popupn").classList.add("open-popupe");
}
function closePopup() {
    document.getElementById("popupn").classList.remove("open-popupe");
}

// function sss(s){
//         window.alert("Hello to the musuem");
//         // alert("khfvdg");
//  }
document.addEventListener("DOMContentLoaded", function () {
    var bookTicketButton = document.getElementById("mue");
    //Add event listener mouseover event 
    mue.addEventListener("mouseover", function () {
            //change background color of the button when mouse hover
            mue.style.backgroundColor = "black";
            //change the text color of the button when mouse hover
            mue.style.color = "white";
    });
    //Add event listener mouseout event 
    mue.addEventListener("mouseout", function () {
            mue.style.backgroundColor = "rgb(146, 15, 15)";
            mue.style.color = "white";
    });
});

//link collor
document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById("gogee");
    //Add event listener mouseover event 
    link.addEventListener("mouseover", function () {
            //change the color to black when mouse hover over  
            link.style.color = "black"
    });
    //Add event listener mouseout event 
    link.addEventListener("mouseout", function () {
            link.style.color = "";
    });
});

var mode = document.getElementById("mode");
mode.onclick = function () {
    document.body.classList.toggle("dark-theme");
}