// document.getElementById("zsudmit").addEventListener("submit",function(zsubmit){
//   const input = document.getElementsByClassName("z11").value;
//   if(input.trim()===""){
//     alert("your details has been successfully submitted. Thanks!");
//     zsubmit.preventDefault()
//  }
// });
function zbkjs(zbk1){
    document.getElementById("zbk1").style.color="gold";
}
    function zbkjs1(zbk1){
    document.getElementById("zbk1").style.color="rgba(2, 2, 42, 0.907)"
} 
// alert and storage
function zsubmit(zsubmit){
    let input =
    document.getElementById("z11").value
    alert(input);
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

// photo transform
function changeimage1(zph1) {
    var image = document.getElementById("zph1"); // Get the image element using its ID
    image.src = "media/3.jpg";
}
function changeimage2(zph1){
    var image = document.getElementById("zph1");
    image.src = "media/dsc.jpg";
}
function changeimage3(zph2) {
    var image = document.getElementById("zph2"); // Get the image element using its ID
    image.src = "media/dsc_0059.jpg";
}
function changeimage4(zph2){
    var image = document.getElementById("zph2");
    image.src = "media/dsc_0040.jpg";
}
function changeimage5(zph3) {
    var image = document.getElementById("zph3"); // Get the image element using its ID
    image.src = "media/g75a3520.jpg";
}
function changeimage6(zph3){
    var image = document.getElementById("zph3");
    image.src = "media/g75a3519.jpg";
}
function changeimage7(zph4) {
    var image = document.getElementById("zph4"); // Get the image element using its ID
    image.src = "media/g75a3369.jpg";
}
function changeimage8(zph4){
    var image = document.getElementById("zph4");
    image.src = "media/g75a3364.jpg";
}
function changeimage9(zph5) {
    var image = document.getElementById("zph5"); // Get the image element using its ID
    image.src = "media/3 (1).jpg";
}
function changeimage10(zph5){
    var image = document.getElementById("zph5");
    image.src = "media/image1.jpeg";
}
//dark mode
// let dlz1 = document.getElementById("dlz1");
// function darkz(){
//     btn = document.getElementById("zzbb");
//     // document.body.classList.toggle("darkzz");
//     btn.onclick = function darkz(){
//         document.body.classlist.toggle("darkz");
//     }
// }
function darkz(dlz1) {
  const body = document.body;
  body.classList.toggle("dark-mode"); // Toggle the "dark-mode" class on the body element

  // Update CSS variables based on the current mode
  const isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    document.documentElement.style.setProperty('--background-colorz', 'rgba(22, 22, 69, 0.82)');
    document.documentElement.style.setProperty('--text-colorz', 'rgb(185, 183, 221)');
    // ... Update other CSS variables as needed
  } else {
    document.documentElement.style.setProperty('--background-colorz', 'rgb(70 70 149 / 82%)');
    document.documentElement.style.setProperty('--text-colorz', 'rgb(5, 2, 47)');
    // ... Update other CSS variables as needed
  }
}
// const button = document.querySelector(".switchz");
// button.addEventListener("click", darkz);

// function darkz(event) {
//     if (event.button === 1) { // Check if right mouse button was pressed (button 2)
//       const body = document.body;
//       body.classList.toggle("dark-mode")
//     }
// }



//     if ( changeimage == 1) {
//         image.src = "dsc.jpg";
//     } else if (changeimage == 2) {
//         image.src = "3.jpg";
//     }
// }
// let bottonz = document.getElementById('dlz');
// let bodz = document.body;
// let darkz = localStorage.getItem('darkz-mode');
// const enabledarkmodw = () =>{
//     bottonz.classList.replace(sliderz)
// }
// validation
// function validationzz(z44){
//     if (z44 < 8 && z44> 8){
//         return false;
//         // document.getElementById("spanz").style.display = "erorr";
//     } else{
//         // document.getElementById("spanz").style.display = "none";
//         return ture;
//     }
// }
// function darkz(swiz){
//     if (click == 1){

//     }
// }
