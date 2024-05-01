document.addEventListener("DOMContentLoaded", function () {
    var submitb = document.getElementById("submitb");
    submitb.addEventListener("mouseover", function () {
        submitb.style.backgroundColor = "black";
        submitb.style.color = "";

    });

    submitb.addEventListener("mouseout", function () {
        submitb.style.backgroundColor = "";
        submitb.style.color = "";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById("museum-linkb");
    link.addEventListener("mouseover", function () {
        link.style.color = "#607D8B";
    });
    link.addEventListener("mouseout", function () {
        link.style.color = "";
    });
});


// search

function myfunction(){

    var input , filter , ul , li , a , i , textValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myU1");
    li = ul.getElementsByTagName("li");

    for(i=0 ; i<li.length ; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(filter)> -1){

            li[i].style.display = "";

        }else{
            li[i].style.display = "none";
        }
    }
}

//MODE
window.onload = function(){
    let isDarkmode = localStorage.getItem('darkMode')

    if( isDarkmode === 'true')
    document.body.classList.add('dark-themeb')
}

function modefunction(){
btn = document.getElementById("btnthemeb");

    btn.onclick = function modefunction(){
        document.body.classList.toggle("dark-themeb");
    }
        if(body.classList.contains('dark-themeb'))
        localStorage.setItem('darkMode' , 'true')
    else
    localStorage.removeItem('darkMode')
}




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

